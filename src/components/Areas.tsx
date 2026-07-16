const areas = [
  { name: "Hereford", highlight: true },
  { name: "Gloucester", highlight: true },
  { name: "Worcester", highlight: true },
  { name: "Bristol", highlight: false },
  { name: "Birmingham", highlight: false },
  { name: "Cheltenham", highlight: false },
  { name: "Swindon", highlight: false },
  { name: "Stroud", highlight: false },
  { name: "Ledbury", highlight: false },
  { name: "Ross-on-Wye", highlight: false },
  { name: "Herefordshire", highlight: false },
  { name: "Gloucestershire", highlight: false },
  { name: "Worcestershire", highlight: false },
  { name: "Shropshire", highlight: false },
  { name: "Warwickshire", highlight: false },
  { name: "Oxfordshire", highlight: false },
];

export default function Areas() {
  return (
    <section id="areas" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {areas.map((area) => (
            <div
              key={area.name}
              className={`rounded-xl px-6 py-4 text-center font-medium transition-all ${
                area.highlight
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface text-text hover:bg-primary-light hover:text-primary border border-gray-100"
              }`}
            >
              {area.name}
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-text-light">
          Don&apos;t see your area?{" "}
          <a href="tel:+447940959225" className="font-semibold text-primary hover:text-primary-dark underline">
            Call us on 07940 959 225
          </a>{" "}
          to check availability.
        </p>
      </div>
    </section>
  );
}
