"use client";

import { useState } from "react";

export default function ResearchBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Research use only disclaimer"
      className="relative z-50 w-full bg-navy-950 border-b border-opal-900/60 py-2 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-xs md:text-sm text-opal-200 text-center flex-1 font-body tracking-wide">
          <span className="font-semibold text-opal-100">⚠ For Research Use Only</span>
          {" — "}
          Not for human consumption. All products are for laboratory and in-vitro research only.
        </p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss research disclaimer banner"
          className="flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center text-opal-400 hover:text-opal-200 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
