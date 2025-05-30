import ContentSection from "@/components/content-two";

export default function AboutPage() {
    return (
        <section>
            <div className="bg-background py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="mb-10">
                        <span className="font-bold text-blue-700 text-lg block mb-2">About TrustedApp</span>
                        <h2 className="text-foreground mt-2 text-4xl font-semibold">Get paid for product insight. SaaS teams get truth on demand.</h2>
                        <p className="text-muted-foreground mb-12 mt-6 text-lg">
                            <strong>What we do:</strong><br />
                            TrustedApp instantly matches seasoned software users (&ldquo;Experts&rdquo;) with SaaS companies (&ldquo;Providers&rdquo;) for paid calls, surveys, and reviews. Experts turn hard-won know-how into recurring income. Providers skip the recruiting grind and get actionable user intel + warm conversions in days, not weeks.
                        </p>
                    </div>

                    <div className="border-border/20 space-y-10 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
                        <div className="grid sm:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-foreground text-xl font-semibold mb-2">Why Experts join:</h3>
                                <ul className="list-disc ml-6 text-muted-foreground text-lg space-y-2">
                                    <li><strong>Earn on repeat</strong> – Stripe-paid cuts every time your take drives a deal</li>
                                    <li><strong>Zero prep</strong> – Record or hop on a 15-min call; we handle the rest</li>
                                    <li><strong>Stay unbiased</strong> – Share honest feedback, no promo codes or shills</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-foreground text-xl font-semibold mb-2">Why Providers choose us:</h3>
                                <ul className="list-disc ml-6 text-muted-foreground text-lg space-y-2">
                                    <li><strong>On-demand panels</strong> – Filter 5 000 + verified founders by role, stack, or competitor tag</li>
                                    <li><strong>Rapid discovery</strong> – Book discovery calls this week, not next quarter</li>
                                    <li><strong>Deal lift</strong> – Convert power users of rival tools while learning what to build next</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-12">
                            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6 mb-4">
                                &ldquo;One TrustedApp campaign put 35 competitor power users in front of my PMs this week. We shaved two sprints of guess-work and closed six net-new accounts for less than an agency retainer.&rdquo;<br />
                                <span className="font-semibold text-primary">Maya Patel – Director of Product Marketing, Atlassian</span>
                            </blockquote>
                            <p className="text-foreground text-lg font-semibold mt-8">
                                Turn expertise into income. Turn user insight into market wins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 