"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  institution: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  institution: "",
  subject: "general",
  message: "",
};

export default function ContactClientPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormState>("idle");

  function validate(): boolean {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    if (form.message.trim().length > 0 && form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    // In production, wire this to your form backend (Resend, Formspree, etc.)
    // For now, simulate a network request
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <>
      {/* Page header */}
      <div className="bg-navy-950 py-14 md:py-20 relative overflow-hidden">
        <div aria-hidden="true" className="absolute -top-32 right-0 w-96 h-96 rounded-full opacity-[0.05] bg-opal-shimmer blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-body text-xs text-navy-500">
              <li><Link href="/" className="hover:text-navy-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded">Home</Link></li>
              <li aria-hidden="true"><span className="text-navy-700">/</span></li>
              <li aria-current="page" className="text-navy-300">Contact</li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">
            Contact Us
          </h1>
          <p className="font-body text-base text-navy-400 max-w-xl">
            Ordering questions, bulk pricing, institutional accounts, or general inquiries.
          </p>
        </div>
      </div>

      {/* Contact layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Sidebar info */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-pearl-300 shadow-card">
              <h2 className="font-display text-xl font-semibold text-navy-950 mb-4">
                Get in Touch
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="3.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                        <path d="M1.5 6L9 10.5l7.5-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                    ),
                    label: "Email",
                    value: "amanda@opalpeptide.com",
                    href: "mailto:amanda@opalpeptide.com",
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-opal-50 border border-opal-200 flex items-center justify-center text-opal-600 flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="font-body text-2xs font-semibold text-navy-400 uppercase tracking-widest">{label}</p>
                      <a href={href} className="font-body text-sm font-medium text-navy-800 hover:text-opal-600 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded">
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-pearl-100 rounded-2xl border border-pearl-300">
              <h3 className="font-body text-sm font-semibold text-navy-950 mb-3">
                Common Inquiry Types
              </h3>
              <ul className="space-y-2">
                {[
                  "Product availability & stock",
                  "Bulk and institutional pricing",
                  "Custom compound requests",
                  "CoA / QC documentation",
                  "Shipping & logistics",
                  "Compliance questions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-navy-600">
                    <svg aria-hidden="true" className="text-opal-500 flex-shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
              <p className="font-body text-xs text-amber-800 leading-relaxed">
                <strong>Important:</strong> Opal Peptide sells research compounds to verified
                researchers and qualified professionals only. Please include your institution or
                research affiliation in your message.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 16.5L12 21.5L25 8.5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-semibold text-navy-950 mb-2">
                  Message Sent
                </h2>
                <p className="font-body text-sm text-navy-500 mb-8 max-w-sm">
                  Thank you for reaching out. We&apos;ll respond to {form.email} within 1 business day.
                </p>
                <button
                  onClick={() => { setForm(INITIAL_FORM); setStatus("idle"); }}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="bg-white rounded-2xl border border-pearl-300 shadow-card p-6 md:p-8 space-y-5"
              >
                <h2 className="font-display text-2xl font-semibold text-navy-950 mb-1">
                  Send a Message
                </h2>
                <p className="font-body text-sm text-navy-500 mb-6">
                  We typically respond within 1 business day.
                </p>

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-semibold text-navy-700 mb-1.5">
                      Full Name <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Jane Smith"
                      className={`w-full h-11 px-4 rounded-xl border font-body text-sm text-navy-900 placeholder-navy-400 bg-pearl-50
                        focus:outline-none focus:ring-2 focus:ring-opal-500 focus:border-transparent transition-colors duration-150
                        ${errors.name ? "border-red-400 bg-red-50" : "border-pearl-300"}`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 font-body text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-semibold text-navy-700 mb-1.5">
                      Email Address <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@lab.edu"
                      className={`w-full h-11 px-4 rounded-xl border font-body text-sm text-navy-900 placeholder-navy-400 bg-pearl-50
                        focus:outline-none focus:ring-2 focus:ring-opal-500 focus:border-transparent transition-colors duration-150
                        ${errors.email ? "border-red-400 bg-red-50" : "border-pearl-300"}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 font-body text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Institution */}
                <div>
                  <label htmlFor="institution" className="block font-body text-sm font-semibold text-navy-700 mb-1.5">
                    Institution / Organization
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    autoComplete="organization"
                    value={form.institution}
                    onChange={handleChange}
                    placeholder="University of Research / Independent Lab"
                    className="w-full h-11 px-4 rounded-xl border border-pearl-300 font-body text-sm text-navy-900 placeholder-navy-400 bg-pearl-50
                      focus:outline-none focus:ring-2 focus:ring-opal-500 focus:border-transparent transition-colors duration-150"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-body text-sm font-semibold text-navy-700 mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-xl border border-pearl-300 font-body text-sm text-navy-900 bg-pearl-50 cursor-pointer
                      focus:outline-none focus:ring-2 focus:ring-opal-500 focus:border-transparent transition-colors duration-150 appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="order">Product / Order Question</option>
                    <option value="bulk">Bulk / Institutional Pricing</option>
                    <option value="coa">CoA / Documentation Request</option>
                    <option value="shipping">Shipping & Logistics</option>
                    <option value="compliance">Compliance Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-semibold text-navy-700 mb-1.5">
                    Message <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : "message-hint"}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please describe your inquiry. Include compound names, quantities, or any relevant research context."
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-navy-900 placeholder-navy-400 bg-pearl-50 resize-y min-h-[120px]
                      focus:outline-none focus:ring-2 focus:ring-opal-500 focus:border-transparent transition-colors duration-150
                      ${errors.message ? "border-red-400 bg-red-50" : "border-pearl-300"}`}
                  />
                  {errors.message ? (
                    <p id="message-error" role="alert" className="mt-1.5 font-body text-xs text-red-600">
                      {errors.message}
                    </p>
                  ) : (
                    <p id="message-hint" className="mt-1.5 font-body text-xs text-navy-400">
                      Include your research context for faster responses.
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  aria-busy={status === "submitting"}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <svg aria-hidden="true" className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" strokeDasharray="24" strokeDashoffset="8"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="font-body text-xs text-navy-400 text-center pt-1">
                  By submitting, you confirm all products are for research use only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
