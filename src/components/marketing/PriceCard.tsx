"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface PriceCardProps {
  name: string;
  price: string | null;
  unit?: string;
  note?: string;
  perks: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

export const PriceCard: React.FC<PriceCardProps & { index: number }> = ({
  name,
  price,
  unit,
  note,
  perks,
  cta,
  featured,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -8, boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
    className={`group rounded-2xl bg-card/80 backdrop-blur-md transition ${featured
      ? "shadow-xl border-2 border-primary/20 bg-muted/50"
      : "shadow-md border border-border/50"
      } hover:-translate-y-1 hover:shadow-2xl duration-300 overflow-hidden flex flex-col h-full`}
  >
    <CardHeader className="pb-6 pt-8 px-8">
      <CardTitle className="text-2xl font-bold tracking-tight flex items-center gap-2 text-card-foreground">
        {name}
        {featured && (
          <span className="ml-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary">
            Most popular
          </span>
        )}
      </CardTitle>
      {price ? (
        <div className="flex items-end gap-1 mt-4">
          <span className="text-4xl font-bold text-card-foreground">{price}</span>
          {unit && (
            <span className="text-base text-muted-foreground font-medium mb-1">{unit}</span>
          )}
        </div>
      ) : null}
      {note && (
        <CardDescription className="mt-2 text-muted-foreground font-medium">
          {note}
        </CardDescription>
      )}
    </CardHeader>
    <CardContent className="flex-1 flex flex-col gap-6 px-8">
      <ul className="space-y-4 text-sm">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <Check className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
            <span className="text-card-foreground">{p}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="mt-auto pt-6 px-8 pb-8">
      <Button
        asChild
        className={`w-full ${featured ? "" : "variant-outline"}`}
        variant={featured ? "default" : "outline"}
        size="lg"
      >
        <a href={cta.href}>{cta.label}</a>
      </Button>
    </CardFooter>
  </motion.div>
);
