"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#areas", label: "Areas" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const trustItems = [
  {
    icon: (
      <svg className="h-4 w-4 lg:h-[22px] lg:w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    text: "5 Year Guarantee",
  },
  {
    icon: (
      <svg className="h-4 w-4 lg:h-[22px] lg:w-[22px]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    text: "5-Star Rated",
  },
  {
    icon: (
      <svg className="h-4 w-4 lg:h-[22px] lg:w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "10+ Years Experience",
  },
  {
    icon: (
      <svg className="h-4 w-4 lg:h-[22px] lg:w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    text: "No Sub-Contractors",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Sub-header Trust Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-y-1 gap-x-3 lg:h-[45px] lg:gap-8 py-1.5 lg:py-0">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-1 lg:gap-1.5 whitespace-nowrap">
                <span className="text-white/80 flex items-center justify-center">{item.icon}</span>
                <span className="text-[11px] lg:text-[18px] font-medium text-white/90">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-[44px] lg:top-[45px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[90px] sm:h-[80px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/Driveways-Southwest-Logo.png"
                alt="Driveways South West – Driveways, Paths, Patios & Fencing Specialists"
                width={1958}
                height={461}
                className="h-10 sm:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Phone + Bark Badge (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.bark.com/en/gb/b/driveway-southwest-ltd/40bQQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full bg-white border border-gray-200 shadow-sm px-3 py-1.5 hover:shadow-md hover:border-gray-300 transition-all"
              >
                <img src="/bark-icon.png" alt="Bark" className="h-5 w-5 rounded-full" />
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-gray-900">Rated 5.0</span>
                  <div className="flex gap-px">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">based on 50 reviews</span>
                </div>
              </a>
              <div className="h-5 w-px bg-gray-200" />
              <a
                href="tel:+447932339271"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07932 339 271
              </a>
            </div>

            {/* Mobile Bark Badge — compact */}
            <a
              href="https://www.bark.com/en/gb/b/driveway-southwest-ltd/40bQQ/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex flex-col items-center justify-center w-[80px] h-[36px] rounded-lg bg-white border border-gray-200 shadow-sm"
            >
              <div className="flex items-center gap-1">
                <img src="/bark-icon.png" alt="Bark" className="h-3 w-3 rounded-full" />
                <div className="flex gap-px">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-2 w-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-[8px] font-semibold text-gray-600 leading-tight">5 Star Review</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 text-text hover:bg-primary-light transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-text hover:bg-primary-light hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.bark.com/en/gb/b/driveway-southwest-ltd/40bQQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white border border-gray-200 shadow-sm px-4 py-3 hover:shadow-md transition-all"
              >
                <img src="/bark-icon.png" alt="Bark" className="h-6 w-6 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-gray-900">Rated 5.0</span>
                  <div className="flex gap-px">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">based on 50 reviews</span>
                </div>
              </a>
              <a
                href="tel:+447932339271"
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-primary"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07932 339 271
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
