const testimonials = [
  {
    name: "Mirka",
    date: "10 February 2026",
    service: "Patio Services",
    rating: 5,
    text: "Driveway Southwest are great company, they do what customer needs, they'd come back if needed. Bunch of young, eager to work guys! Good job!! Thank you",
  },
  {
    name: "Alan",
    date: "29 May 2025",
    service: "",
    rating: 5,
    text: "Amazing team, brilliant job! Went above and beyond and so hard working. I would recommend 100%. Thank you so much!",
  },
  {
    name: "Lucas Middleton",
    date: "4 April 2025",
    service: "",
    rating: 5,
    text: "Sturdy & Stunning Paving. The paved walkway they installed around our home is not only functional but adds a stylish touch.",
  },
  {
    name: "Toby Hewitt",
    date: "2 April 2025",
    service: "Block Paving",
    rating: 5,
    text: "Top-Quality Paving Work! From start to finish, the team delivered excellent brick and block paving. It's sturdy, looks great, and adds a lot of curb appeal.",
  },
  {
    name: "Gwen S. Bray",
    date: "1 April 2025",
    service: "Gate Installation",
    rating: 5,
    text: "Secure & Stylish Gate Installation! The team was polite, professional, and worked efficiently. The gate is stylish, functional, and secure — just what we needed!",
  },
  {
    name: "Jamie Bibi",
    date: "31 March 2025",
    service: "Fence Installation",
    rating: 5,
    text: "Excellent Fence Installation. The crew was on time, efficient, and the quality of the fence is outstanding. It has transformed the look of our property.",
  },
  {
    name: "Riley",
    date: "31 March 2025",
    service: "Fencing",
    rating: 5,
    text: "Reliable & Beautiful Fence Work! Our new fence not only looks great but is sturdy and secure. Great craftsmanship and excellent customer service!",
  },
  {
    name: "Jay Long",
    date: "29 March 2025",
    service: "Gate Installation",
    rating: 5,
    text: "Perfect Gate Setup! From design to installation, the gate looks exactly as we envisioned. Professional and quick service. Couldn't be happier!",
  },
  {
    name: "Taylor Coles",
    date: "28 March 2025",
    service: "Fence Installation",
    rating: 5,
    text: "Stunning Fence Installation! The team did an incredible job installing our new fence. It looks fantastic and really enhances the privacy of our garden.",
  },
  {
    name: "Anthony Mann",
    date: "3 July 2024",
    service: "Landscaping",
    rating: 5,
    text: "Did all I required in their quote.",
  },
  {
    name: "Brenda Good",
    date: "21 April 2024",
    service: "Landscaping",
    rating: 5,
    text: "Excellent, recommend! Guys were quick and pleasant. Very pleased with the job they did.",
  },
  {
    name: "Brenda Good",
    date: "19 April 2024",
    service: "Landscaping",
    rating: 5,
    text: "Very pleased, they did an excellent job. I would recommend them. Also, I would like to rate the guys who did the work — very hardworking, very pleasant. Would highly rate them.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-accent" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const featured = testimonials.slice(0, 3);
  const rest = testimonials.slice(3);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Rated 5 stars on Bark.com — hear from homeowners who&apos;ve
            trusted Driveways South West.
          </p>
          {/* Bark.com badge */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white border border-gray-200 px-5 py-2.5 shadow-sm">
            <img
              src="/bark-icon.png"
              alt="Bark.com"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-text">5.0</span>
            <span className="text-sm text-text-light">•</span>
            <span className="text-sm text-text-light">12 Reviews on Bark.com</span>
          </div>
        </div>

        {/* Featured Reviews (top 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {featured.map((t) => (
            <div
              key={`${t.name}-${t.date}`}
              className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-5 text-text leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    {t.service && (
                      <p className="text-xs text-primary font-medium">{t.service}</p>
                    )}
                  </div>
                </div>
                <img src="/bark-icon.png" alt="Bark.com" className="h-5 w-5 rounded-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Reviews - Scrollable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((t) => (
            <div
              key={`${t.name}-${t.date}`}
              className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-4 text-sm text-text leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary text-xs font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text">{t.name}</p>
                    {t.service && (
                      <p className="text-[10px] text-primary font-medium">{t.service}</p>
                    )}
                  </div>
                </div>
                <img src="/bark-icon.png" alt="Bark.com" className="h-4 w-4 rounded-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Bark.com link */}
        <div className="text-center mt-12">
          <a
            href="https://www.bark.com/en/gb/b/driveway-southwest-ltd/40bQQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-light transition-all"
          >
            Read all reviews on Bark.com
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
