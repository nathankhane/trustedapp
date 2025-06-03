"use client";
import React from "react";
import { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Star,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { StatsRibbon } from "@/components/marketing/StatsRibbon";
import { Alert } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Hero from "@/components/layout/Hero";

interface Provider {
  id: string;
  name: string;
  category: string;
  rating: number;
  location: string;
  availability: string;
  image: string;
  description: string;
  website?: string;
}

const mockProviders: Provider[] = [
  {
    id: "1",
    name: "NVIDIA",
    category: "Technology",
    rating: 4.9,
    location: "Santa Clara, CA",
    availability: "Available Now",
    image:
      "https://img.logo.dev/nvidia.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    description:
      "Leading AI and GPU technology company revolutionizing computing and graphics.",
    website: "https://nvidia.com",
  },
  {
    id: "2",
    name: "GitHub",
    category: "Development",
    rating: 4.8,
    location: "San Francisco, CA",
    availability: "Available Now",
    image:
      "https://img.logo.dev/github.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    description:
      "The world's leading software development platform and community.",
    website: "https://github.com",
  },
  {
    id: "3",
    name: "Figma",
    category: "Design",
    rating: 4.9,
    location: "San Francisco, CA",
    availability: "Available Now",
    image:
      "https://img.logo.dev/figma.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    description: "Collaborative interface design tool for teams.",
    website: "https://figma.com",
  },
  {
    id: "4",
    name: "Notion",
    category: "Productivity",
    rating: 4.8,
    location: "San Francisco, CA",
    availability: "Available Now",
    image:
      "https://img.logo.dev/notion.so?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    description:
      "All-in-one workspace for notes, docs, and project management.",
    website: "https://notion.so",
  },
  {
    id: "5",
    name: "Linear",
    category: "Development",
    rating: 4.9,
    location: "San Francisco, CA",
    availability: "Available Now",
    image:
      "https://img.logo.dev/linear.app?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    description: "Issue tracking tool for high-performance teams.",
    website: "https://linear.app",
  },
  {
    id: "6",
    name: "Vercel",
    category: "Development",
    rating: 4.9,
    location: "San Francisco, CA",
    availability: "Available Now",
    image:
      "https://img.logo.dev/vercel.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    description: "Cloud platform for static sites and Serverless Functions.",
    website: "https://vercel.com",
  },
];

const experts = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior AI Engineer",
    company: "TrustedApp",
    companyLogo:
      "https://img.logo.dev/trustedapp.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    experience: "8+ years",
    hourlyRate: "$150-200",
    availability: "20h/week",
    description:
      "AI, Machine Learning, Cloud expert with 8+ years of experience.",
    location: "Remote",
    rating: 4.9,
    website: undefined,
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "Bild.ai",
    companyLogo:
      "https://img.logo.dev/bild.ai?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    experience: "6+ years",
    hourlyRate: "$120-150",
    availability: "15h/week",
    description: "Product, SaaS, B2B specialist with 6+ years of experience.",
    location: "Remote",
    rating: 4.8,
    website: undefined,
  },
  {
    id: "3",
    name: "Alex Thompson",
    role: "Full Stack Developer",
    company: "Adobe",
    companyLogo:
      "https://img.logo.dev/adobe.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    experience: "5+ years",
    hourlyRate: "$100-130",
    availability: "25h/week",
    description:
      "Web Development, React, Node.js developer with 5+ years of experience.",
    location: "Remote",
    rating: 4.7,
    website: undefined,
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "UX Designer",
    company: "Slack",
    companyLogo:
      "https://img.logo.dev/slack.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    experience: "7+ years",
    hourlyRate: "$90-120",
    availability: "30h/week",
    description:
      "UI/UX, Design Systems, Figma expert with 7+ years of experience.",
    location: "Remote",
    rating: 4.9,
    website: undefined,
  },
  {
    id: "5",
    name: "Jessica Lee",
    role: "Founding Engineer",
    company: "Snap",
    companyLogo:
      "https://img.logo.dev/snap.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    experience: "7+ years",
    hourlyRate: "$140-180",
    availability: "18h/week",
    description:
      "Mobile, AR, and social platform specialist. Founding engineer with deep experience in scaling consumer apps.",
    location: "Remote",
    rating: 4.8,
    website: undefined,
  },
  {
    id: "6",
    name: "David Kim",
    role: "CTO",
    company: "Stripe",
    companyLogo:
      "https://img.logo.dev/stripe.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
    experience: "10+ years",
    hourlyRate: "$200-250",
    availability: "10h/week",
    description:
      "Payments, APIs, and fintech leader. CTO with a decade of experience building global payment infrastructure.",
    location: "Remote",
    rating: 4.9,
    website: undefined,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ProviderMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = [
    "all",
    "Technology",
    "Development",
    "Design",
    "Productivity",
  ];

  const filteredExperts = experts.filter(
    (expert) =>
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <main className="flex-1">
        <Hero
          title="Book Vetted Founders in 60 Seconds"
          subtitle="Filter 7 500+ VC-backed operators by stack, launch calls or surveys, pay only when insights hit the mark."
        />

        {/* Positive Info Banner */}
        <div className="mx-4 sm:mx-6 lg:mx-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 text-blue-600 bg-primary/80 backdrop-blur-sm text-sm font-semibold py-3 sm:py-3 px-4 sm:px-6 rounded-2xl shadow-md animate-fade-in gap-2 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse flex-shrink-0" />
              <span className="text-center sm:text-left text-xs sm:text-sm leading-tight">
                TrustedApp accelerates product research and revenue—teams running
                weekly expert interviews see up to{" "}
                <span className="font-bold text-primary">2× faster growth</span>{" "}
                and{" "}
                <span className="font-bold text-primary">
                  save 20+ hours per sprint
                </span>
                .
              </span>
            </div>
            <span className="hidden lg:inline text-muted-foreground text-xs ml-4">
              Source: McKinsey, Nielsen Norman Group
            </span>
          </div>
        </div>

        <StatsRibbon />

        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative group">
              <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary transition-colors animate-pulse" />
              <input
                type="text"
                placeholder="Search experts..."
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-card/90 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all duration-200 shadow-sm text-foreground placeholder:text-muted-foreground border border-border/20 focus:border-primary/30 text-sm sm:text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Providers Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl pb-16 sm:pb-20 lg:pb-24 xl:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {filteredExperts.map((expert, index) => (
              <motion.div
                key={expert.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative bg-card/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden border border-border/50 hover:border-primary/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col h-full p-4 sm:p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <motion.div
                      className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-sm group-hover:shadow-md transition-shadow duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {expert.company === "TrustedApp" ? (
                        <img
                          src="/logos/Trusted_App_PFP-removebg-preview.png"
                          alt="TrustedApp Expert Logo"
                          className="object-contain p-1.5 sm:p-2 w-full h-full"
                        />
                      ) : (
                        <Image
                          src={expert.companyLogo}
                          alt={expert.company}
                          fill
                          className="object-contain p-1.5 sm:p-2"
                        />
                      )}
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm group-hover:shadow-md transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-foreground">
                        {expert.rating}
                      </span>
                    </motion.div>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.button
                          className="w-full mb-3 sm:mb-4 px-3 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 text-foreground font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center border border-primary/20 hover:border-primary/40 min-h-[36px] sm:min-h-[40px]"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Pay to reveal name
                        </motion.button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Unlock expert details with a small deposit</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <div className="text-primary font-bold text-sm sm:text-base md:text-lg mb-1 group-hover:text-primary/80 transition-colors duration-200">
                    {expert.role} @ {expert.company}
                  </div>
                  <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base group-hover:text-foreground/70 transition-colors duration-200">
                    {expert.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <motion.span
                      className="inline-flex items-center px-2 sm:px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      Experience: {expert.experience}
                    </motion.span>
                    <motion.span
                      className="inline-flex items-center px-2 sm:px-2.5 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-medium hover:bg-green-500/20 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      Rate: {expert.hourlyRate}
                    </motion.span>
                    <motion.span
                      className="inline-flex items-center px-2 sm:px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium hover:bg-purple-500/20 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      Availability: {expert.availability}
                    </motion.span>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-2 gap-2">
                    <div className="flex items-center text-xs text-muted-foreground bg-background/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm flex-shrink-0">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
                      <span className="truncate">{expert.location}</span>
                    </div>
                    <motion.button
                      className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg sm:rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-sm hover:shadow-lg text-xs sm:text-sm font-medium min-h-[36px] sm:min-h-[40px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Offer
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
