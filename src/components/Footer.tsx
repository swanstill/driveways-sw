import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { href: "#services", label: "Block Paving" },
  { href: "#services", label: "Resin Driveways" },
  { href: "#services", label: "Tarmac Driveways" },
  { href: "#services", label: "Gravel Driveways" },
  { href: "#services", label: "Patios & Paths" },
  { href: "#services", label: "Fencing" },
  { href: "#services", label: "Driveway Repair" },
];

const companyLinks = [
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#areas", label: "Service Areas" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#quote", label: "Get a Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/Driveways-Southwest-Logo.png"
                alt="Driveways South West Logo"
                width={1958}
                height={461}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Family-owned hard landscaping specialists serving the Midlands and
              South West of England. Fully insured, guaranteed work.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+441452405416"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01452 405416
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@driveways-sw.co.uk"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@driveways-sw.co.uk
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">
                  Service Areas
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Hereford, Gloucester, Worcester, Bristol, Birmingham,
                  Cheltenham, Swindon, Stroud and surrounding areas.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Driveways South West. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-500">
            Website design with <span className="text-red-500">&hearts;</span> by{" "}
            <a href="https://www.tradesgrow.co.uk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              Trades Grow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
