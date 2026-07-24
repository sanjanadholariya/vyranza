import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Vyranza | Enterprise Digital Marketing Agency & Paid Ads",
  description:
    "Vyranza is a performance marketing agency specializing in high-converting Meta Ads, Google Ads, SEO, and web development.",
  icons: {
    icon: "/logo/icon_logo.png",
    shortcut: "/logo/icon_logo.png",
    apple: "/logo/icon_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
