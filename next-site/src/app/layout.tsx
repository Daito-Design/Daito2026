import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Daito Design | Industrial UX & Enterprise Experience Design",
  description: "Enterprise software that works for the people who actually use it. From offshore platforms to control rooms.",
  metadataBase: new URL("https://daito2026.vercel.app"),
  openGraph: {
    title: "Daito Design | Industrial UX & Enterprise Experience Design",
    description: "Enterprise software that works for the people who actually use it.",
    url: "https://daito2026.vercel.app",
    siteName: "Daito Design",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div className="scroll-progress" aria-hidden="true" />
        <Nav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
