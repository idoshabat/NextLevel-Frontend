import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";

const seo = pageSeo("/camps");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: seo.path,
  },
};

export default function CampsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
