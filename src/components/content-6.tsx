"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Patrick Collison",
    company: "Stripe (W10)",
    image: "/images/founders/patrick-collison.jpg",
  },
  {
    name: "Drew Houston",
    company: "Dropbox (S07)",
    image: "/images/founders/drew-houston.jpg",
  },
  {
    name: "Tony Xu",
    company: "DoorDash (S13)",
    image: "/images/founders/tony-xu.jpg",
  },
  {
    name: "Kyle Vogt",
    company: "Cruise (S14)",
    image: "/images/founders/kylevogt.webp",
  },
  {
    name: "Emmett Shear",
    company: "Twitch (S05)",
    image: "/images/founders/emmett-shear.jpg",
  },
  {
    name: "Henrique Dubugras",
    company: "Brex (W17)",
    image: "/images/founders/henrique-dubugras.jpg",
  },
  {
    name: "Sid Sijbrandij",
    company: "GitLab (S15)",
    image: "/images/founders/sid-sijbrandij.jpg",
  },
  {
    name: "Jason Kelly",
    company: "Ginkgo Bioworks (S14)",
    image: "/images/founders/jason-kelly.jpg",
  },
  {
    name: "Parker Conrad",
    company: "Rippling (W17)",
    image: "/images/founders/parker-conrad.jpg",
  },
  {
    name: "Wade Foster",
    company: "Zapier (S12)",
    image: "/images/founders/wade-foster.jpg",
  },
];

export default function CommunitySection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Community</h2>
        <p className="text-xl mb-8">
          Join a network of successful founders and innovators.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
                className="rounded-full overflow-hidden mb-4 w-24 h-24 shadow-lg transition"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <h3 className="font-bold">{founder.name}</h3>
              <p className="text-sm text-muted-foreground">{founder.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
