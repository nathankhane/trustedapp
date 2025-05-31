import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/marketing/logo-cloud";
import Features from "@/components/features";
import CommunitySection from "@/components/content-6";
import { Stats } from "@/components/marketing/Stats";
import Faqs from "@/components/faqs";
import CallToAction from "@/components/marketing/call-to-action";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <LogoCloud />
        <Features />
        <CommunitySection />
        <Stats />
        <Faqs />
        <CallToAction />
      </main>
    </div>
  );
}
