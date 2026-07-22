import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Driveways South West | Driveways, Paths, Patios & Fencing Specialists",
  description:
    "Professional driveway, patio, path & fencing services in Midlands and South West England. Block paving, resin driveways, tarmac, gravel & more. Family-owned, fully insured. Free quotes!",
  keywords: [
    "driveways south west",
    "driveway contractors midlands",
    "block paving herefordshire",
    "resin driveway gloucestershire",
    "patio installers worcestershire",
    "fencing contractors midlands",
    "tarmac driveway",
    "gravel driveway",
    "driveway repair",
    "hard landscaping midlands",
    "driveway specialists south west england",
  ],
  openGraph: {
    title: "Driveways South West | Driveways, Paths, Patios & Fencing Specialists",
    description:
      "Professional driveway, patio, path & fencing services in Midlands and South West England. Family-owned, fully insured. Get a free quote today!",
    url: "https://driveways-sw.co.uk",
    siteName: "Driveways South West",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://driveways-sw.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Driveways South West",
    image: "/images/Driveways-Southwest-Logo.png",
    url: "https://driveways-sw.co.uk",
    telephone: "+447932339271",
    description:
      "Professional driveway, patio, path and fencing services in Midlands and South West England.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Midlands and South West England",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.0,
      longitude: -2.5,
    },
    areaServed: [
      { "@type": "City", name: "Hereford" },
      { "@type": "City", name: "Gloucester" },
      { "@type": "City", name: "Worcester" },
      { "@type": "City", name: "Bristol" },
      { "@type": "City", name: "Birmingham" },
      { "@type": "City", name: "Swindon" },
      { "@type": "City", name: "Cheltenham" },
      { "@type": "City", name: "Stroud" },
      { "@type": "City", name: "Ledbury" },
      { "@type": "City", name: "Ross-on-Wye" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Driveway and Landscaping Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Block Paving Driveways" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Resin Bound Driveways" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tarmac Driveways" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gravel Driveways" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Patios" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paths" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fencing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveway Repair" } },
      ],
    },
    priceRange: "££",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KC98QTH9');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased pt-[134px] lg:pt-[125px]`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC98QTH9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
