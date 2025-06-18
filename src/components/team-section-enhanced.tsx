"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const members = [
  {
    src: "/Founder Pictures/IMG_1525.JPG",
    name: "Nathan Morales",
    role: "Co-Founder & CEO",
    bio: "Nathan leads the strategic vision and operations at TrustedApp, bringing over a decade of expertise in SaaS development and product management.",
    linkedIn: "https://www.linkedin.com/in/nathan-khane-morales/",
  },
  {
    src: "/images/founders/Dipesh advisor photo.png",
    name: "Dipesh Desai",
    role: "Co-founder and CTO",
    bio: "Dipesh oversees the technical architecture and innovation at TrustedApp, with extensive experience building scalable enterprise solutions.",
    linkedIn: "https://www.linkedin.com/in/startupking1/",
  },
];

export default function TeamSectionEnhanced() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our leadership team brings deep expertise and passion to every
              project.
              <br />
              Together, we build the future of trusted SaaS.
            </p>
          </motion.div>
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2 xl:gap-10">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-xl bg-card text-card-foreground p-8 shadow-lg transition-all hover:shadow-xl ${activeIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-6 h-36 w-36 overflow-hidden rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1"
                  >
                    <Avatar className="h-full w-full">
                      <AvatarImage
                        src={member.src}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                      <AvatarFallback className="text-2xl">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">{member.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {member.role}
                  </p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-sm text-foreground/80"
                  >
                    <p>{member.bio}</p>
                    <div className="mt-4 flex justify-center">
                      <Link
                        href={member.linkedIn}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Connect
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
