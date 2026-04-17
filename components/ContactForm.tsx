"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";
type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Fields>;

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim())                          errors.name    = "Name is required.";
  if (!fields.email.trim())                         errors.email   = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                                    errors.email   = "Enter a valid email address.";
  if (!fields.subject)                              errors.subject = "Please select a subject.";
  if (!fields.message.trim())                       errors.message = "Message is required.";
  else if (fields.message.trim().length < 10)       errors.message = "Message is too short.";
  return errors;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name as keyof Fields]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof Fields;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate({ ...fields }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState("submitting");
    try {
      const res = await fetch("https://submit-form.com/pZGk01PX7", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="h-px w-12 bg-gold" />
        <p className="font-display text-3xl text-ink">Message received.</p>
        <p className="text-muted max-w-sm leading-relaxed">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputCls = (field: keyof Fields) =>
    `w-full border-b bg-transparent py-3 text-body placeholder-subtle text-sm focus:outline-none transition-colors duration-200 ${
      errors[field] && touched[field]
        ? "border-red-400 focus:border-red-400"
        : "border-parchment-mid focus:border-gold"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-1.5">
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            id="name" name="name" type="text"
            placeholder="Your name"
            value={fields.name} onChange={handleChange} onBlur={handleBlur}
            className={inputCls("name")}
          />
          {errors.name && touched.name && (
            <p className="text-xs text-red-400">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email"
            placeholder="Your email"
            value={fields.email} onChange={handleChange} onBlur={handleBlur}
            className={inputCls("email")}
          />
          {errors.email && touched.email && (
            <p className="text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="sr-only" htmlFor="subject">Subject</label>
        <select
          id="subject" name="subject"
          value={fields.subject} onChange={handleChange} onBlur={handleBlur}
          className={`${inputCls("subject")} cursor-pointer appearance-none ${!fields.subject ? "text-subtle" : ""}`}
        >
          <option value="" disabled>Select a subject</option>
          <option value="maternity">Maternity</option>
          <option value="newborn">New Born</option>
          <option value="events">Events</option>
          <option value="graduation">Graduation</option>
          <option value="family">Family</option>
          <option value="headshots">Headshots</option>
          <option value="children">Children</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && touched.subject && (
          <p className="text-xs text-red-400">{errors.subject}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea
          id="message" name="message" rows={5}
          placeholder="Tell us about your project…"
          value={fields.message} onChange={handleChange} onBlur={handleBlur}
          className={`${inputCls("message")} resize-none`}
        />
        {errors.message && touched.message && (
          <p className="text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center gap-3 bg-gold text-ink px-8 py-3.5 text-sm tracking-[0.08em] uppercase font-medium transition-colors duration-200 hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
