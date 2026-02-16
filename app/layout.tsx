import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grapreneur | Free Startup Mentorship & Funding for Students in India",
  description: "Grapreneur, a Grapinz Technology initiative, transforms students into future-ready entrepreneurs. Join our free non-profit program for mentorship, funding, and community.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonProfitType",
              "name": "Grapreneur",
              "url": "https://www.grapreneur.com",
              "logo": "https://www.grapreneur.com/favicon.png",
              "founder": "Grapinz Technology",
              "description": "Non-profit entrepreneurship development program for students.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12/1 VV layout, Dr. Rajendraprasad Road",
                "addressLocality": "Udumalpet",
                "postalCode": "642126",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8270661299",
                "contactType": "customer support",
                "email": "contact@grapreneur.com"
              }
            })
          }}
        />
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
