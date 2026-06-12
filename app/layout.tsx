import type { Metadata } from "next";
import { Assistant, Rubik } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/accessibility-widget";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollHint } from "@/components/scroll-hint";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { absoluteUrl, contact, siteDescription, siteName, siteTitle, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "אקדמיית כדורסל",
    "אימוני כדורסל",
    "כדורסל נס ציונה",
    "אימונים אישיים בכדורסל",
    "מחנות כדורסל",
    "ניתוח וידאו כדורסל",
    "נקסט לבל",
    "Next Level Basketball Academy",
    "basketball academy Israel",
    "basketball training Ness Ziona",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "https://res.cloudinary.com/drhhvzcl0/image/upload/w_1600,c_limit,q_auto,f_auto/v1780907157/hero-poster.png",
        width: 1600,
        height: 900,
        alt: "Next Level Basketball Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      "https://res.cloudinary.com/drhhvzcl0/image/upload/w_1600,c_limit,q_auto,f_auto/v1780907157/hero-poster.png",
    ],
  },
  category: "sports education",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsOrganization", "LocalBusiness"],
  name: siteName,
  alternateName: "Next Level",
  description: siteDescription,
  url: siteUrl,
  logo: absoluteUrl("/icon.png"),
  image:
    "https://res.cloudinary.com/drhhvzcl0/image/upload/w_1600,c_limit,q_auto,f_auto/v1780907157/hero-poster.png",
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "נס ציונה",
    addressCountry: "IL",
  },
  areaServed: ["נס ציונה", "ישראל"],
  sameAs: [contact.instagram],
  knowsAbout: [
    "Basketball training",
    "Player development",
    "Video analysis",
    "Mental coaching",
    "Basketball camps",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: ["he-IL", "en"],
  potentialAction: {
    "@type": "ContactAction",
    target: absoluteUrl("/contact"),
    name: "יצירת קשר והרשמה",
  },
};

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-assistant",
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.className} ${assistant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
        <ScrollHint />
        <ScrollReveal />
        <BackToTop />
        <WhatsappButton />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
