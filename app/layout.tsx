import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { WhatsappButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Next Level | אקדמיית כדורסל",
  description: "אקדמיית כדורסל Next Level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <WhatsappButton />
      </body>
    </html>
  );
}
