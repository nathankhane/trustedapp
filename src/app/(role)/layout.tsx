import React from "react";

export interface RoleLayoutProps {
    children: React.ReactNode;
    hero?: React.ReactNode;
    steps?: React.ReactNode;
    calculator?: React.ReactNode;
    testimonials?: React.ReactNode;
    faq?: React.ReactNode;
    cta?: React.ReactNode;
}

export default function RoleLayout({
    children,
    hero,
    steps,
    calculator,
    testimonials,
    faq,
    cta,
}: RoleLayoutProps) {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            {hero && (
                <section className="relative">
                    {hero}
                </section>
            )}

            {/* Main Content */}
            <main className="relative">
                {children}

                {/* Steps Section */}
                {steps && (
                    <section className="py-16 lg:py-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            {steps}
                        </div>
                    </section>
                )}

                {/* Calculator Section */}
                {calculator && (
                    <section className="py-16 lg:py-24 bg-muted/20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            {calculator}
                        </div>
                    </section>
                )}

                {/* Testimonials Section */}
                {testimonials && (
                    <section className="py-16 lg:py-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            {testimonials}
                        </div>
                    </section>
                )}

                {/* FAQ Section */}
                {faq && (
                    <section className="py-16 lg:py-24 bg-muted/20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            {faq}
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                {cta && (
                    <section className="py-16 lg:py-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            {cta}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
} 