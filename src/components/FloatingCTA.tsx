"use client";

export default function FloatingCTA() {
  return (
    <>
      {/* Floating Phone Button - Mobile Only */}
      <a
        href="tel:+447932339271"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all animate-pulse-ring"
        aria-label="Call us now"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      {/* Floating Quote Button - Desktop */}
      <a
        href="#quote"
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-accent-dark transition-all hover:shadow-xl"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
        </svg>
        Get a Free Quote
      </a>
    </>
  );
}
