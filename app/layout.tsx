import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollHint } from "@/components/scroll-hint";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WhatsappButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Next Level | אקדמיית כדורסל",
  description: "אקדמיית כדורסל Next Level",
};

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={assistant.className}>
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
        <ScrollHint />
        <ScrollReveal />
        <WhatsappButton />
      </body>
    </html>
  );
}
