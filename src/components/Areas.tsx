const primaryAreas = [
  { name: "Hereford" },
  { name: "Gloucester" },
  { name: "Worcester" },
];

const otherAreas = [
  { name: "Bristol" },
  { name: "Birmingham" },
  { name: "Cheltenham" },
  { name: "Swindon" },
  { name: "Stroud" },
  { name: "Ledbury" },
  { name: "Ross-on-Wye" },
];

const counties = [
  "Herefordshire",
  "Gloucestershire",
  "Worcestershire",
  "Shropshire",
  "Warwickshire",
  "Oxfordshire",
];

export default function Areas() {
  return (
    <section id="areas" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Covering the Midlands &amp; South West
          </h2>
          <p className="mt-4 text-lg text-text-light">
            We proudly serve homeowners across a wide area. Not sure if we cover
            your location? Get in touch — we&apos;re happy to help.
          </p>
        </div>

        {/* Primary areas — large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {primaryAreas.map((area) => (
            <div
              key={area.name}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 sm:p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Primary Area</span>
                </div>
                <h3 className="text-2xl font-bold">{area.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Other areas — pill badges */}
        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text">Towns &amp; Cities</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {otherAreas.map((area) => (
              <span
                key={area.name}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-text hover:border-primary/30 hover:bg-primary-light hover:text-primary transition-all duration-200 cursor-default"
              >
                <svg className="h-3.5 w-3.5 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {area.name}
              </span>
            ))}
          </div>
        </div>

        {/* Counties — compact row */}
        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-11.938a3.375 3.375 0 11-5.25 0 3.375 3.375 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text">Counties We Cover</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {counties.map((county) => (
              <div
                key={county}
                className="flex items-center justify-center rounded-xl border border-gray-100 bg-surface px-4 py-3 text-sm font-medium text-text-light hover:border-primary/30 hover:text-primary transition-all duration-200"
              >
                {county}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-10 text-sm text-text-light">
          Don&apos;t see your area?{" "}
          <a href="tel:+447932339271" className="font-semibold text-primary hover:text-primary-dark underline">
            Call us on 07932 339 271
          </a>{" "}
          to check availability.
        </p>
      </div>
    </section>
  );
}
