import { Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import HeroTabs from "@/components/HeroTabs";
import TrustedByTeamsAt from "@/components/TrustedByTeamsAt";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/content-6";
import { Stats } from "@/components/marketing/Stats";
import Faqs from "@/components/faqs";
import CallToAction from "@/components/marketing/call-to-action";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <ErrorBoundary>
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <HeroTabs />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <TrustedByTeamsAt />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<div className="h-24 flex items-center justify-center">Loading features...</div>}>
            <FeaturesSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <CommunitySection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Stats />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Faqs />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <CallToAction />
        </ErrorBoundary>
      </main>
    </div>
  );
}
