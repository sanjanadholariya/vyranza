import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL("https://vyranza.com"),
  title: {
    default: "Vyranza | Performance Marketing Agency & Paid Ads",
    template: "%s | Vyranza",
  },
  description:
    "Vyranza is a performance digital marketing agency specializing in high-converting Meta Ads (Facebook & Instagram), Google Ads, Conversion Remarketing, and CRM automation.",
  keywords: [
    "Vyranza",
    "Vyranza Agency",
    "Vyranza Marketing",
    "Vyranza Digital",
    "Meta Ads Agency",
    "Google Ads Management",
    "Performance Marketing Agency",
    "SMMA",
  ],
  authors: [{ name: "Vyranza", url: "https://vyranza.com" }],
  creator: "Vyranza",
  publisher: "Vyranza",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vyranza | Performance Marketing Agency & Paid Ads",
    description:
      "Scale your revenue with Vyranza's high-converting Meta Ads, Google Ads, and automated lead acquisition funnels.",
    url: "https://vyranza.com",
    siteName: "Vyranza",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyranza | Performance Marketing Agency",
    description:
      "Scale your revenue with Vyranza's high-converting Meta Ads & Google Ads.",
  },
  icons: {
    icon: "/logo/icon_logo.png",
    shortcut: "/logo/icon_logo.png",
    apple: "/logo/icon_logo.png",
  },
  verification: {
    google: ["dP_1XOw9AawEXp3ywPMtoZUDm41pXekbylitkQu5_cI", "LNJ4K73fulhzVpjxZaYl0cxjUG56Qx3zarMm2sZKPHU"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vyranza",
  url: "https://vyranza.com",
  logo: "https://vyranza.com/logo/long_bg_remove.png",
  description:
    "Performance digital marketing agency specializing in Meta Ads, Google Ads, and CRM lead automation.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@vyranza.com",
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <GoogleTagManager gtmId="GTM-KG6F969P" />
        <MetaPixel />

        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
