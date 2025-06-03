"use client";
import React from "react";
import { useState } from "react";
import { Sparkles, Filter, MapPin, Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/layout/Hero";
import RevenueCalculator from "@/components/RevenueCalculator";

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ExpertsPage() {
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

  const filteredProviders = mockProviders.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || provider.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <main className="flex-1">
        <Hero
          title="Monetize the Stack You Already Use"
          subtitle="Browse live offers from SaaS teams, drop your feedback, collect Stripe payouts—no outreach required."
        />

        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative group">
              <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary transition-colors animate-pulse" />
              <input
                type="text"
                placeholder="Search partners..."
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-card/90 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all duration-200 shadow-sm text-foreground placeholder:text-muted-foreground border border-border/20 focus:border-primary/30 text-sm sm:text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative group min-w-fit">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <select
                className="w-full sm:w-auto pl-12 pr-8 py-3 sm:py-4 bg-card/90 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all duration-200 shadow-sm appearance-none text-foreground border border-border/20 focus:border-primary/30 text-sm sm:text-base"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Providers Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProviders.map((provider, index) => (
              <motion.div
                key={provider.id}
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
                onMouseEnter={() => setHoveredCard(provider.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                    <motion.div
                      className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-sm group-hover:shadow-md transition-shadow duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        fill
                        className="object-contain p-2 sm:p-3"
                      />
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm group-hover:shadow-md transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {provider.rating}
                      </span>
                    </motion.div>
                  </div>

                  <motion.h3
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 tracking-tight group-hover:text-primary/80 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    {provider.name}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 lg:mb-8 line-clamp-2 leading-relaxed group-hover:text-foreground/70 transition-colors duration-200 text-sm sm:text-base">
                    {provider.description}
                  </p>

                  <div className="flex flex-col space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <motion.div
                        className="flex items-center text-xs sm:text-sm text-muted-foreground bg-background/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
                        <span className="truncate">{provider.location}</span>
                      </motion.div>
                      <motion.button
                        className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg sm:rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-sm hover:shadow-lg text-xs sm:text-sm font-medium min-h-[36px] sm:min-h-[40px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Offer
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                      </motion.button>
                    </div>
                    <motion.div
                      className="flex items-center justify-center space-x-2 rounded-lg sm:rounded-xl hover:bg-muted/50 backdrop-blur-sm transition-all duration-300 cursor-pointer p-2 min-h-[36px]"
                      onClick={() =>
                        provider.website && window.open(provider.website, "_blank")
                      }
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        Visit Website
                      </span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue Calculator Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Estimate Your Revenue</h2>
            <p className="text-base sm:text-lg text-muted-foreground">See what your expertise could earn on TrustedApp.</p>
          </div>
          <RevenueCalculator />
        </div>
      </main>
    </div>
  );
}
