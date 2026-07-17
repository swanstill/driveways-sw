"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const STEPS = [
  { id: 1, label: "Property" },
  { id: 2, label: "Service" },
  { id: 3, label: "Timescale" },
  { id: 4, label: "Postcode" },
  { id: 5, label: "Name" },
  { id: 6, label: "Phone" },
] as const;

const propertyTypes = [
  { value: "Detached House", icon: "🏡" },
  { value: "Semi-Detached House", icon: "🏠" },
  { value: "Terraced House", icon: "🏘️" },
  { value: "Bungalow", icon: "🏚️" },
  { value: "Cottage", icon: "🛖" },
  { value: "Flat / Apartment", icon: "🏢" },
  { value: "Commercial Property", icon: "🏛️" },
  { value: "Other", icon: "📋" },
];

const services = [
  { value: "block-paving", label: "Block Paving", icon: "🧱" },
  { value: "resin-driveway", label: "Resin Driveway", icon: "💎" },
  { value: "tarmac-driveway", label: "Tarmac Driveway", icon: "🛤️" },
  { value: "gravel-driveway", label: "Gravel Driveway", icon: "🪨" },
  { value: "patio", label: "Patio", icon: "🏠" },
  { value: "driveway-repair", label: "Driveway Repair", icon: "🔧" },
  { value: "other", label: "Other", icon: "📋" },
];

const timescales = [
  { value: "asap", label: "ASAP", desc: "As soon as possible", icon: "⚡" },
  { value: "this-month", label: "This Month", desc: "Within the current month", icon: "📅" },
  { value: "1-3-months", label: "1–3 Months", desc: "Flexible timeline", icon: "🗓️" },
  { value: "researching", label: "Just Researching", desc: "No rush, just exploring options", icon: "🔍" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    service: "",
    timescale: "",
    postcode: "",
    name: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = (stepToValidate?: number): boolean => {
    const s = stepToValidate ?? step;
    const e: Record<string, string> = {};
    if (s === 1 && !formData.propertyType) e.propertyType = "Please select a property type";
    if (s === 2 && !formData.service) e.service = "Please select a service";
    if (s === 3 && !formData.timescale) e.timescale = "Please select a timescale";
    if (s === 4) {
      if (!formData.postcode.trim()) e.postcode = "Please enter your postcode";
      else if (!/^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/.test(formData.postcode.trim()))
        e.postcode = "Please enter a valid UK postcode";
    }
    if (s === 5) {
      if (!formData.name.trim()) e.name = "Please enter your name";
      else if (formData.name.trim().length < 2) e.name = "Please enter your full name";
    }
    if (s === 6) {
      if (!formData.phone.trim()) e.phone = "Please enter your phone number";
      else if (!/^[\d\s+()-]{7,}$/.test(formData.phone.trim()))
        e.phone = "Please enter a valid phone number";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* Auto-advance for selection steps (1–3) */
  const selectAndAdvance = (field: string, value: string) => {
    update(field, value);
    setTimeout(() => {
      if (step < 6) setStep(step + 1);
    }, 200);
  };

  /* Advance text-input steps on Enter */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step === 6) {
        handleSubmit(e as unknown as FormEvent);
      } else if (validate()) {
        setStep(step + 1);
      }
    }
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step === 6 && validate()) {
      setSubmitted(true);
    }
  };

  /* ---------------------------------------------------------------- */
  /*  Success State                                                    */
  /* ---------------------------------------------------------------- */
  if (submitted) {
    return (
      <section id="quote" className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary-dark to-gray-900">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="rounded-3xl bg-white p-12 shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-light mb-6">
              <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text">Thank You!</h3>
            <p className="mt-4 text-text-light">
              Your quote request has been received. We&apos;ll be in touch
              shortly to discuss your {formData.service.replace(/-/g, " ")} project.
            </p>
            <p className="mt-2 text-sm text-text-light">
              Prefer to talk now?{" "}
              <a href="tel:+447940959225" className="font-semibold text-primary underline">
                Call 07940 959 225
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Form                                                             */
  /* ---------------------------------------------------------------- */
  return (
    <section id="quote" className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary-dark to-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 mb-4">
            Free Quote
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get Your Free Quote Today
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Tell us about your project and we&apos;ll provide a no-obligation quote.
          </p>
        </div>

        {/* Form Card — Landscape layout */}
        <div className="rounded-3xl bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Left: Progress Sidebar */}
          <div className="lg:w-64 bg-gray-50 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
            <div className="flex lg:flex-col items-center lg:items-start gap-0 lg:gap-0">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center lg:items-start">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                        step > s.id
                          ? "bg-primary text-white"
                          : step === s.id
                            ? "bg-primary text-white ring-4 ring-primary/20"
                            : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {step > s.id ? (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : (
                        s.id
                      )}
                    </div>
                    <span
                      className={`hidden lg:block text-sm font-medium transition-colors duration-300 ${
                        step >= s.id ? "text-text" : "text-gray-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`hidden lg:block h-0.5 w-px bg-gray-200 ml-[18px] my-1 transition-colors duration-300 ${
                        step > s.id ? "bg-primary" : ""
                      }`}
                    />
                  )}
                  {/* Horizontal connector (mobile) */}
                  {i < STEPS.length - 1 && (
                    <div
                      className={`lg:hidden h-0.5 w-6 sm:w-8 mx-1 rounded transition-colors duration-300 ${
                        step > s.id ? "bg-primary" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="hidden lg:block mt-6 text-sm text-text-light font-medium">
              Step {step} of {STEPS.length}
            </p>
          </div>

          {/* Right: Form Content */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10">
            <p className="lg:hidden text-sm text-text-light font-medium mb-6 text-center">
              Step {step} of {STEPS.length}: {STEPS[step - 1].label}
            </p>

            <form onSubmit={handleSubmit}>
              {/* -------- Step 1: Property Type -------- */}
              {step === 1 && (
                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-bold text-text mb-2">
                    What type of property?
                  </h3>
                  <p className="text-sm text-text-light mb-6">
                    Select the option that best describes your property.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {propertyTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => selectAndAdvance("propertyType", type.value)}
                        className={`flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-4 text-center transition-all hover:scale-[1.02] ${
                          formData.propertyType === type.value
                            ? "border-primary bg-primary-light"
                            : "border-gray-200 hover:border-primary/40"
                        }`}
                      >
                        <span className="text-2xl">{type.icon}</span>
                        <span
                          className={`text-sm font-medium ${
                            formData.propertyType === type.value ? "text-primary" : "text-text"
                          }`}
                        >
                          {type.value}
                        </span>
                      </button>
                    ))}
                  </div>
                  {errors.propertyType && (
                    <p className="mt-3 text-sm text-red-500">{errors.propertyType}</p>
                  )}
                </div>
              )}

              {/* -------- Step 2: Service -------- */}
              {step === 2 && (
                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-bold text-text mb-2">
                    What service do you need?
                  </h3>
                  <p className="text-sm text-text-light mb-6">
                    Choose the service that best matches your project.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {services.map((svc) => (
                      <button
                        key={svc.value}
                        type="button"
                        onClick={() => selectAndAdvance("service", svc.value)}
                        className={`flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-5 text-center transition-all hover:scale-[1.02] ${
                          formData.service === svc.value
                            ? "border-primary bg-primary-light"
                            : "border-gray-200 hover:border-primary/40"
                        }`}
                      >
                        <span className="text-2xl">{svc.icon}</span>
                        <span
                          className={`text-sm font-medium ${
                            formData.service === svc.value ? "text-primary" : "text-text"
                          }`}
                        >
                          {svc.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  {errors.service && (
                    <p className="mt-3 text-sm text-red-500">{errors.service}</p>
                  )}
                </div>
              )}

              {/* -------- Step 3: Timescale -------- */}
              {step === 3 && (
                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-bold text-text mb-2">
                    When would you like to start?
                  </h3>
                  <p className="text-sm text-text-light mb-6">
                    This helps us prioritise your project.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {timescales.map((ts) => (
                      <button
                        key={ts.value}
                        type="button"
                        onClick={() => selectAndAdvance("timescale", ts.value)}
                        className={`flex items-center gap-4 rounded-xl border-2 px-6 py-4 text-left transition-all hover:scale-[1.01] ${
                          formData.timescale === ts.value
                            ? "border-primary bg-primary-light"
                            : "border-gray-200 hover:border-primary/40"
                        }`}
                      >
                        <span className="text-2xl shrink-0">{ts.icon}</span>
                        <div>
                          <span
                            className={`block text-sm font-bold ${
                              formData.timescale === ts.value ? "text-primary" : "text-text"
                            }`}
                          >
                            {ts.label}
                          </span>
                          <span className="block text-xs text-text-light mt-0.5">
                            {ts.desc}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.timescale && (
                    <p className="mt-3 text-sm text-red-500">{errors.timescale}</p>
                  )}
                </div>
              )}

              {/* -------- Step 4: Postcode -------- */}
              {step === 4 && (
                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-bold text-text mb-2">
                    What&apos;s your postcode?
                  </h3>
                  <p className="text-sm text-text-light mb-6">
                    We use this to check we cover your area and provide an accurate quote.
                  </p>
                  <input
                    type="text"
                    placeholder="e.g. HR1 2AA"
                    value={formData.postcode}
                    onChange={(e) => update("postcode", e.target.value.toUpperCase())}
                    onKeyDown={handleKeyDown}
                    className="w-full max-w-md rounded-xl border-2 border-gray-200 px-5 py-4 text-lg font-medium text-text placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all uppercase"
                    autoComplete="postal-code"
                    autoFocus
                  />
                  <p className="mt-3 text-xs text-text-light">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 font-mono text-[11px]">Enter</kbd> to continue
                  </p>
                  {errors.postcode && (
                    <p className="mt-2 text-sm text-red-500">{errors.postcode}</p>
                  )}
                </div>
              )}

              {/* -------- Step 5: Name -------- */}
              {step === 5 && (
                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-bold text-text mb-2">
                    What&apos;s your name?
                  </h3>
                  <p className="text-sm text-text-light mb-6">
                    So we can personalise your quote and get in touch.
                  </p>
                  <input
                    type="text"
                    placeholder="First and last name"
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full max-w-md rounded-xl border-2 border-gray-200 px-5 py-4 text-lg font-medium text-text placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    autoComplete="name"
                    autoFocus
                  />
                  <p className="mt-3 text-xs text-text-light">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 font-mono text-[11px]">Enter</kbd> to continue
                  </p>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
              )}

              {/* -------- Step 6: Phone -------- */}
              {step === 6 && (
                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-bold text-text mb-2">
                    What&apos;s your phone number?
                  </h3>
                  <p className="text-sm text-text-light mb-6">
                    We&apos;ll only use this to contact you about your quote.
                  </p>
                  <div className="relative max-w-md">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-medium text-text-light">
                      +44
                    </span>
                    <input
                      type="tel"
                      placeholder="7940 959 225"
                      value={formData.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full rounded-xl border-2 border-gray-200 pl-14 pr-5 py-4 text-lg font-medium text-text placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      autoComplete="tel"
                      autoFocus
                    />
                  </div>
                  <p className="mt-3 text-xs text-text-light">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 font-mono text-[11px]">Enter</kbd> to submit
                  </p>
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
              )}

              {/* -------- Navigation -------- */}
              <div className="mt-8 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prev}
                    className="flex items-center gap-2 rounded-xl border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-text hover:border-primary/40 transition-all"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {/* Submit only on final step */}
                {step === 6 && (
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-bold text-white shadow-md hover:bg-accent-dark transition-all hover:shadow-lg"
                  >
                    Submit Quote Request
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
