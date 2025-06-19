import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
    return (
        <main className="mx-auto max-w-5xl px-4 lg:px-6 py-16 space-y-24 leading-relaxed">
            {/* HERO */}
            <section className="text-center space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    Instant product truth, powered by real users.
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                    7,500+ verified founders, PMs &amp; power-users · &lt; 48 h average match time
                </p>
            </section>

            {/* VALUE SWAP */}
            <section className="grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="font-semibold text-xl mb-3">For Experts</h2>
                    <ul className="space-y-3 list-disc list-inside">
                        <li><strong>Earn on repeat</strong> – cash out every call, review, or video.</li>
                        <li><strong>No prep</strong> – 15-min Zoom; we handle scheduling &amp; payout.</li>
                        <li><strong>Stay unbiased</strong> – no promo codes, shills, or sales pitches.</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold text-xl mb-3">For SaaS Teams</h2>
                    <ul className="space-y-3 list-disc list-inside">
                        <li><strong>On-demand panels</strong> – filter thousands by role, stack, or rival tag.</li>
                        <li><strong>Rapid discovery</strong> – schedule calls this week, not next quarter.</li>
                        <li><strong>Deal lift</strong> – convert competitor power-users while learning what to build next.</li>
                    </ul>
                </div>
            </section>

            {/* SOCIAL PROOF */}
            <section className="border-l-4 pl-6 border-primary/70">
                <p className="italic">
                    &ldquo;TrustedApp put 35 competitor power-users in front of our PMs in four days.
                    We closed six net-new logos for less than an agency retainer.&rdquo;
                </p>
                <p className="mt-2 font-medium">Maya Patel — Director of Product Marketing, Atlassian</p>
            </section>

            {/* ORIGIN STORY */}
            <section className="space-y-4 max-w-3xl">
                <h2 className="text-2xl font-semibold">Why we built TrustedApp</h2>
                <p>
                    We spent years as founders and product consultants chasing users on LinkedIn and Reddit
                    just to validate a feature. It was slow, biased, and unpaid. We created
                    TrustedApp so builders learn faster <em>and</em> the people who already love their
                    tools get fairly rewarded.
                </p>
            </section>

            {/* VALUES */}
            <section className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="font-semibold">Truth &gt; Vanity</h3>
                    <p className="text-sm text-muted-foreground">Honest feedback beats flattering soundbites.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Win-win economics</h3>
                    <p className="text-sm text-muted-foreground">Both sides profit, or we don&apos;t ship it.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Privacy by default</h3>
                    <p className="text-sm text-muted-foreground">PII is never resold; outreach is permission-based.</p>
                </div>
            </section>

            {/* CTA */}
            <section className="flex justify-center space-x-4">
                <Button size="lg">Join as Expert</Button>
                <Button variant="outline" size="lg">Book Experts</Button>
            </section>

            {/* FOOTER NOTE */}
            <footer className="text-center text-sm text-muted-foreground">
                TrustedApp (part of Only Founders, Inc) — 380 C Street, Hayward, CA&nbsp;94541 ·{' '}
                <Link href="/privacy-policy">Privacy Policy</Link> ·{' '}
                <Link href="/terms">Terms &amp; Conditions</Link>
            </footer>
        </main>
    )
} 