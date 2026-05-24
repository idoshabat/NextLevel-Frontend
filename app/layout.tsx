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

export const metadata: Metadata = {
  title: "Next Level | אקדמיית כדורסל",
  description: "אקדמיית כדורסל Next Level",
  icons: {
    icon: "/assets/logo-navbar.png",
    shortcut: "/assets/logo-navbar.png",
    apple: "/assets/logo-navbar.png",
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
