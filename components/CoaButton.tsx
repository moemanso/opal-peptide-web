"use client";

export default function CoaButton() {
  return (
    <button
      aria-label="Download Certificate of Analysis"
      className="btn-secondary flex-1 justify-center flex items-center gap-2"
      onClick={() =>
        alert("CoA document will be included with your order confirmation email.")
      }
    >
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13h10M8 3v7M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Download CoA
    </button>
  );
}
