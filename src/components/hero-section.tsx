"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { TextEffect } from "./ui/text-effect";
import { AnimatedGroup } from "./ui/animated-group";

const founders = [
  {
    name: "Brian Armstrong",
    title: "Co-Founder, Coinbase",
    image: "/images/brian-armstrong.jpg",
  },
  {
    name: "Brian Chesky",
    title: "Co-Founder, Airbnb",
    image: "/images/brian-chesky.jpg",
  },
  {
    name: "Stanley Tang",
    title: "Co-Founder, DoorDash",
    image: "/images/stanley-tang.jpg",
  },
  {
    name: "Patrick Collison",
    title: "Co-Founder, Stripe",
    image: "/images/founders/patrick-collison.jpg",
  },
  {
    name: "Drew Houston",
    title: "Co-Founder, Dropbox",
    image: "/images/founders/drew-houston.jpg",
  },
  {
    name: "Tony Xu",
    title: "Co-Founder, DoorDash",
    image: "/images/founders/tony-xu.jpg",
  },
  {
    name: "Kyle Vogt",
    title: "Co-Founder, Cruise",
    image: "/images/founders/kylevogt.webp",
  },
  {
    name: "Emmett Shear",
    title: "Co-Founder, Twitch",
    image: "/images/founders/emmett-shear.jpg",
  },
  {
    name: "Henrique Dubugras",
    title: "Co-Founder, Brex",
    image: "/images/founders/henrique-dubugras.jpg",
  },
  {
    name: "Sid Sijbrandij",
    title: "Co-Founder, GitLab",
    image: "/images/founders/sid-sijbrandij.jpg",
  },
  {
    name: "Jason Kelly",
    title: "Co-Founder, Ginkgo Bioworks",
    image: "/images/founders/jason-kelly.jpg",
  },
  {
    name: "Parker Conrad",
    title: "Co-Founder, Rippling",
    image: "/images/founders/parker-conrad.jpg",
  },
  {
    name: "Wade Foster",
    title: "Co-Founder, Zapier",
    image: "/images/founders/wade-foster.jpg",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
        <AnimatedGroup className="w-full text-center">
          <h1
            className="
              mx-auto text-center font-bold leading-[1.2] tracking-tight
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              text-transparent bg-clip-text
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              mb-8 sm:mb-10 lg:mb-12
              max-w-5xl px-4
            "
          >
            Turn expertise into recurring revenue.<br className="hidden sm:block" />
            Turn insight into market wins.
          </h1>
          <TextEffect
            as="p"
            className="text-center text-xl sm:text-2xl md:text-2xl text-muted-foreground mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto px-4 leading-relaxed"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.2}
          >
            Start trusting the software that you use before you buy it
          </TextEffect>
        </AnimatedGroup>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 sm:mb-24 lg:mb-28 w-full px-4 sm:px-0">
          <Link href="/experts" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto rounded-full bg-background text-foreground px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold shadow-lg border border-border transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-105">
              For Experts &rarr;
            </button>
          </Link>
          <Link href="/providers" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto rounded-full bg-background text-foreground px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold shadow-lg border border-border transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 hover:scale-105">
              For Providers &rarr;
            </button>
          </Link>
        </div>

        {/* Founder Carousel */}
        <div className="w-full flex justify-center px-4 sm:px-0">
          <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-lg w-full">
            <Swiper
              slidesPerView={1}
              loop
              autoplay={{ delay: 5000 }}
              modules={[Autoplay, EffectCoverflow]}
              className="rounded-2xl shadow-2xl"
            >
              {founders.map((founder, idx) => (
                <SwiperSlide className="px-2" key={idx}>
                  <div className="bg-card/80 backdrop-blur-lg rounded-2xl h-44 sm:h-48 max-w-lg p-6 sm:p-9 flex flex-col items-center justify-center transition-all hover:scale-105 shadow-lg">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover mb-3 sm:mb-4 ring-2 ring-blue-500"
                    />
                    <p className="text-center font-medium text-base sm:text-lg text-card-foreground">
                      {founder.name}
                    </p>
                    <p className="mt-1 text-center text-xs sm:text-sm text-muted-foreground">
                      {founder.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
