import React from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Benjamin Stetzer",
    template: "%s — Benjamin Stetzer"
  },
  description: "Benjamin Stetzer — Web Developer. Minimal, accessible developer portfolio.",
  openGraph: {
    title: "Benjamin Stetzer — Web Developer",
    images: ["/og-image.svg"],
  }
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">{children}</main>
      <Footer />
    </div>
  );
}
