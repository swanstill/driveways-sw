import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Driveway installation by Driveways South West"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay: darker on left for text, lighter on right to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>

      {/* Content — left-aligned */}
      <div className="relative z-10 flex items-center min-h-[90vh]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl pt-12 sm:pt-0 mb-16 sm:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Fully Insured &bull; Guaranteed Work
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Driveways, Paths,
              <br />
              <span className="text-accent">Patios & Fencing</span>
              <br />
              Specialists
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
              Transforming homes across the Midlands &amp; South West England
              with premium hard landscaping. Over a decade of experience, quality
              materials, and a full guarantee on every project.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-accent-dark transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                Get Your Free Quote
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+447932339271"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07932 339 271
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
