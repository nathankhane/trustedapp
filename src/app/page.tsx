import { Suspense } from "react";
import HeroTabs from "@/components/HeroTabs";
import TrustedByTeamsAt from "@/components/TrustedByTeamsAt";
import Features from "@/components/features";
import CommunitySection from "@/components/content-6";
import { Stats } from "@/components/marketing/Stats";
import Faqs from "@/components/faqs";
import CallToAction from "@/components/marketing/call-to-action";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <HeroTabs />
        </Suspense>
        <TrustedByTeamsAt />
        <Features />
        <CommunitySection />
        <Stats />
        <Faqs />
        <CallToAction />
      </main>
    </div>
  );
}
