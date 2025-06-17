"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { PillToggle } from "@/components/ui/pill-toggle";

const PERSONA_OPTIONS = [
  { value: "expert" as const, label: "Expert" },
  { value: "provider" as const, label: "Provider" },
];

export default function CallToAction() {
  const [selected, setSelected] = useState<"expert" | "provider">("expert");
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-2xl px-6 flex flex-col items-center">
        <PillToggle
          options={PERSONA_OPTIONS}
          active={selected}
          onActiveChange={setSelected}
          className="mb-8"
        />
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">
          {selected === "expert" ? "Ready to monetize your expertise?" : "Ready to accelerate your business?"}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          {selected === "expert"
            ? "Join thousands of experts earning $150K+ annually sharing their knowledge."
            : "Connect with vetted experts to solve your toughest challenges faster."
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Button
            size="lg"
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-white"
          >
            <Link href={`/${selected}s`}>
              {selected === "expert" ? "Start Earning" : "Find Experts"}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="flex-1"
          >
            <Link href="/pricing">
              View Pricing
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
