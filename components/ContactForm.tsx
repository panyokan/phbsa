"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    await new Promise((res) => setTimeout(res, 1200));
    setState("success");
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

  const inputCls =
    "w-full border-b border-parchment-mid bg-transparent py-3 text-body placeholder-subtle text-sm focus:outline-none focus:border-gold transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            id="name" name="name" type="text" required
            placeholder="Your name"
            value={formData.name} onChange={handleChange}
            className={inputCls}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email" required
            placeholder="Your email"
            value={formData.email} onChange={handleChange}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="sr-only" htmlFor="subject">Subject</label>
        <select
          id="subject" name="subject" required
          value={formData.subject} onChange={handleChange}
          className={`${inputCls} cursor-pointer appearance-none`}
        >
          <option value="" disabled>Select a subject</option>
          <option value="portrait">Portrait Session</option>
          <option value="wedding">Wedding Photography</option>
          <option value="event">Event Coverage</option>
          <option value="commercial">Commercial Work</option>
          <option value="other">Other Enquiry</option>
        </select>
      </div>

      <div>
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="Tell us about your project…"
          value={formData.message} onChange={handleChange}
          className={`${inputCls} resize-none`}
        />
      </div>

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
