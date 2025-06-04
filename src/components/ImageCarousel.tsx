"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface CarouselImage {
    src: string;
    alt: string;
    caption?: string;
}

export interface ImageCarouselProps {
    images: CarouselImage[];
    className?: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
    images,
    className,
    autoPlay = false,
    autoPlayInterval = 5000,
}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [dragConstraints, setDragConstraints] = React.useState({ left: 0, right: 0 });
    const carouselRef = React.useRef<HTMLDivElement>(null);

    // Calculate drag constraints based on container and content width
    React.useEffect(() => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.offsetWidth;
            const contentWidth = images.length * containerWidth;
            setDragConstraints({
                left: -(contentWidth - containerWidth),
                right: 0,
            });
        }
    }, [images.length]);

    // Auto-play functionality
    React.useEffect(() => {
        if (!autoPlay || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, images.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)));
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handleDragEnd = (_: any, { offset, velocity }: any) => {
        const swipeThreshold = 50;
        const swipeVelocityThreshold = 500;

        if (offset.x > swipeThreshold || velocity.x > swipeVelocityThreshold) {
            goToPrevious();
        } else if (offset.x < -swipeThreshold || velocity.x < -swipeVelocityThreshold) {
            goToNext();
        }
    };

    if (!images.length) return null;

    return (
        <section className={cn("relative overflow-hidden rounded-2xl", className)}>
            {/* Main Carousel Container */}
            <div
                ref={carouselRef}
                className="relative aspect-video bg-muted overflow-hidden rounded-2xl shadow-xl"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        whileDrag={{ cursor: "grabbing" }}
                    >
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            fill
                            className="object-cover object-center"
                            priority={currentIndex === 0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        />

                        {/* Overlay for drag hint */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 hover:scale-110 transition-all duration-200"
                            onClick={goToPrevious}
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 hover:scale-110 transition-all duration-200"
                            onClick={goToNext}
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </>
                )}
            </div>

            {/* Caption */}
            {images[currentIndex].caption && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-4 text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        {images[currentIndex].caption}
                    </p>
                </motion.div>
            )}

            {/* Dots Navigation */}
            {images.length > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300 hover:scale-125",
                                index === currentIndex
                                    ? "bg-primary shadow-lg"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-pressed={index === currentIndex}
                        />
                    ))}
                </div>
            )}

            {/* Progress Indicator (for auto-play) */}
            {autoPlay && images.length > 1 && (
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-full h-1 bg-background/30 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                                duration: autoPlayInterval / 1000,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}; 