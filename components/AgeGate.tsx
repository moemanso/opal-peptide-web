"use client";

import { useState, useEffect, useRef } from "react";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const passed = sessionStorage.getItem("op_age_gate");
    if (!passed) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible && confirmBtnRef.current) {
      confirmBtnRef.current.focus();
    }
  }, [visible]);

  const handleConfirm = () => {
    sessionStorage.setItem("op_age_gate", "1");
    setVisible(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-desc"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-950/90 backdrop-blur-sm p-4"
    >
      <div className="w-full max-w-md bg-pearl-100 rounded-2xl shadow-card-hover overflow-hidden animate-slide-up">
        {/* Header stripe */}
        <div className="h-1 bg-opal-shimmer w-full" />

        <div className="p-8 text-center">
          {/* Logo mark */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-opal-shimmer flex items-center justify-center shadow-opal">
              <svg
                aria-hidden="true"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5" />
                <path
                  d="M14 7C10.134 7 7 10.134 7 14s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
                  fill="white"
                  fillOpacity="0.8"
                />
              </svg>
            </div>
          </div>

          <h2
            id="age-gate-title"
            className="font-display text-2xl font-semibold text-navy-950 mb-2"
          >
            Age Verification Required
          </h2>

          <p id="age-gate-desc" className="font-body text-sm text-navy-600 mb-2 leading-relaxed">
            Opal Peptide sells research compounds intended for licensed researchers and qualified
            professionals only.
          </p>

          <p className="font-body text-sm text-navy-600 mb-8 leading-relaxed">
            By entering, you confirm you are{" "}
            <strong className="text-navy-900">21 years of age or older</strong>, a licensed
            researcher or professional, and that you understand all products are{" "}
            <strong className="text-navy-900">for research use only — not for human
            consumption</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              ref={confirmBtnRef}
              onClick={handleConfirm}
              className="flex-1 min-h-[48px] px-6 py-3 bg-navy-950 text-white font-body text-sm font-semibold rounded-xl
                hover:bg-navy-800 active:bg-navy-900
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 focus-visible:ring-offset-2"
            >
              I Confirm — Enter Site
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 min-h-[48px] px-6 py-3 bg-pearl-200 text-navy-600 font-body text-sm font-semibold rounded-xl
                hover:bg-pearl-300 active:bg-pearl-300
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2"
            >
              I Do Not Qualify — Exit
            </button>
          </div>

          <p className="mt-6 text-2xs text-navy-400 font-body leading-relaxed">
            By entering this site you agree to our{" "}
            <a href="/terms" className="underline hover:text-navy-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-opal-500 rounded">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-navy-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-opal-500 rounded">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
