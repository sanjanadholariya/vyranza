import HeroSection from "@/components/home/HeroSection";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import ProcessSection from "@/components/home/ProcessSection";

export const metadata = {
  title: "Vyranza | Enterprise Digital Marketing Agency & Paid Ads",
  description:
    "Vyranza is a performance digital marketing agency specializing in high-converting Meta Ads, Google Ads, funnel optimization, and lead generation.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesHighlight />
      <ProcessSection />
    </main>
  );
}
