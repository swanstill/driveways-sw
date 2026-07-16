import Image from "next/image";

const services = [
  {
    title: "Block Paving Driveways",
    description:
      "Premium block paving in a wide range of colours and patterns. Durable, low-maintenance, and guaranteed to enhance your home's kerb appeal.",
    image: "/images/block-paving-driveways.jpg",
    alt: "Block paving driveway installation by Driveways South West",
  },
  {
    title: "Resin Bound Driveways",
    description:
      "Stunning, permeable resin bound surfaces that are SuDS compliant. Available in natural stone blends for a modern, elegant finish.",
    image: "/images/resin-driveway-south-west.png",
    alt: "Resin bound driveway in South West England",
  },
  {
    title: "Tarmac Driveways",
    description:
      "Cost-effective, long-lasting tarmac driveways installed to the highest standards. Perfect for larger areas with excellent durability.",
    image: "/images/tarmac-driveways-south-west.png",
    alt: "Tarmac driveway installation",
  },
  {
    title: "Gravel Driveways",
    description:
      "Traditional gravel driveways with proper edging and weed membrane. A charming, budget-friendly option for any property.",
    image: "/images/website-image-6.jpg",
    alt: "Gravel driveway with edging",
  },
  {
    title: "Paths & Patios",
    description:
      "Beautiful patios and pathways designed to complement your home. From natural stone to porcelain, we create outdoor spaces you'll love.",
    image: "/images/patios.jpg",
    alt: "Patio and path installation",
  },
  {
    title: "Fencing",
    description:
      "Professional fencing solutions including panels, post and rail, and bespoke designs. Built to last with quality treated timber.",
    image: "/images/fencing-driveways.png",
    alt: "Fencing installation services",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Professional Driveway &amp; Landscaping Services
          </h2>
          <p className="mt-4 text-lg text-text-light">
            From block paving to fencing, we deliver premium hard landscaping
            solutions across the Midlands and South West of England.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#quote"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Get a Quote
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
