import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";

const seo = pageSeo("/programs");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: seo.path,
  },
};

export default function ProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
