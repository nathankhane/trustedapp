"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

export default function CallToAction() {
  const [selected, setSelected] = useState<"expert" | "provider">("expert");
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="mx-auto max-w-2xl px-6 flex flex-col items-center">
        <div className="flex mb-8 rounded-full bg-muted p-1 w-fit">
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selected === "expert" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
            onClick={() => setSelected("expert")}
          >
            Expert
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selected === "provider" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
            onClick={() => setSelected("provider")}
          >
            SaaS Provider
          </button>
        </div>
        <h2 className="text-4xl font-bold text-center mb-2 text-foreground">
          {selected === "expert"
            ? "Start Earning From Your Stack"
            : "Get Insight From 5,000+ VC-Backed Founders"}
        </h2>
        <p className="text-muted-foreground text-center mb-4">
          {selected === "expert"
            ? "Invite-only access for VC-backed founders"
            : "Connect with founders who already love your product"}
        </p>
        <div className="flex items-center justify-center">
          <Link href="https://cal.com/trustedapp/30min" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 py-3 text-base font-semibold">
              {selected === "expert" ? "Request Access" : "Get Started"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
