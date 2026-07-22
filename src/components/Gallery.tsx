import Image from "next/image";

const gallery = [
  { src: "/images/472314961_535985259396224_1222598253678749779_n.jpg", alt: "Block paving driveway project completed by Driveways South West" },
  { src: "/images/487743582_600049572989792_361623904499775130_n.jpg", alt: "Resin bound driveway installation in South West England" },
  { src: "/images/472314393_535985249396225_7014460572438640517_n.jpg", alt: "New driveway transformation by Driveways South West" },
  { src: "/images/project-4.webp", alt: "Completed patio and path project" },
  { src: "/images/project-5.webp", alt: "Fencing and landscaping work" },
  { src: "/images/website-image-19.jpg", alt: "Driveway installation in progress" },
];

export default function Gallery() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Take a look at some of our latest driveway, patio, and fencing
            installations across the Midlands and South West.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "h-48 md:h-full" : "h-48 md:h-56"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
