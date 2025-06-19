import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header Section */}
            <div className="pb-16 px-6 pt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-8">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Privacy Policy</span>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Your privacy powers our platform. Here&apos;s the short, clear version of what we collect, why, and how we protect it.
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Last Updated on 18 June 2025
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">

                        {/* New Privacy Policy Content */}
                        <div className="bg-card rounded-xl p-8 shadow-sm mb-8">
                            <div className="mb-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    TrustedApp (part of Only Founders, Inc) ("<strong>TrustedApp</strong>," "<strong>we</strong>," "<strong>our</strong>," or "<strong>us</strong>") respects your privacy.
                                </p>
                                <p className="text-card-foreground">
                                    This Policy explains what data we collect, why we collect it, how long we keep it, and the choices you have. It applies to trustedapp.co, trustedapp-demo.vercel.app, related sub-domains, and any service that links to it (collectively the "<strong>Services</strong>").
                                </p>
                            </div>
                        </div>

                        {/* Who We Are */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                1. Who We Are
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p className="mb-2"><strong>TrustedApp (part of Only Founders, Inc)</strong></p>
                                    <p className="mb-2">380 C Street, Hayward, CA 94541, USA</p>
                                    <p>Email: <a href="mailto:nate@trustedapp.co" className="text-primary hover:text-primary-foreground underline font-semibold">nate@trustedapp.co</a></p>
                                </div>
                            </div>
                        </section>

                        {/* Data We Collect */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                2. Data We Collect
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-muted">
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Category</th>
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Examples</th>
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Source</th>
                                                <th className="text-left py-3 text-primary font-semibold">Legal Basis*</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-card-foreground">
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Account</td>
                                                <td className="py-4 pr-6">Name, email, password hash, role (expert/provider)</td>
                                                <td className="py-4 pr-6">You</td>
                                                <td className="py-4">Contract</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Profile</td>
                                                <td className="py-4 pr-6">Job title, company, LinkedIn URL, bio, photo</td>
                                                <td className="py-4 pr-6">You / LinkedIn OAuth</td>
                                                <td className="py-4">Legitimate interest</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Transaction</td>
                                                <td className="py-4 pr-6">Bookings, payout amounts, last-4 card/bank, VAT ID</td>
                                                <td className="py-4 pr-6">You / Stripe</td>
                                                <td className="py-4">Contract / Legal obligation</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Usage</td>
                                                <td className="py-4 pr-6">Log files, device info, IP, timestamps</td>
                                                <td className="py-4 pr-6">Your browser</td>
                                                <td className="py-4">Legitimate interest</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Session Content</td>
                                                <td className="py-4 pr-6">Call recordings, surveys, transcripts</td>
                                                <td className="py-4 pr-6">You (opt-in)</td>
                                                <td className="py-4">Consent</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 pr-6 font-medium">Marketing</td>
                                                <td className="py-4 pr-6">Newsletter opens, UTM parameters</td>
                                                <td className="py-4 pr-6">Your device</td>
                                                <td className="py-4">Consent</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-muted-foreground text-sm mt-4 italic">
                                    *Shown for GDPR reference.
                                </p>
                            </div>
                        </section>

                        {/* How & Why We Use Your Data */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                3. How & Why We Use Your Data
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-muted">
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Purpose</th>
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Explanation</th>
                                                <th className="text-left py-3 text-primary font-semibold">Legal Basis</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-card-foreground">
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Provide the Services</td>
                                                <td className="py-4 pr-6">Create accounts, process payments, match experts & providers</td>
                                                <td className="py-4">Contract</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Improve & Secure</td>
                                                <td className="py-4 pr-6">Debug, prevent fraud, train models on anonymised data</td>
                                                <td className="py-4">Legitimate interest</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Automated Matching</td>
                                                <td className="py-4 pr-6">LLM scoring to pair briefs with best-fit users</td>
                                                <td className="py-4">Legitimate interest (opt-out available)</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Marketing</td>
                                                <td className="py-4 pr-6">Product updates with your consent; unsubscribe anytime</td>
                                                <td className="py-4">Consent</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 pr-6 font-medium">Compliance</td>
                                                <td className="py-4 pr-6">Invoices, tax, KYC/AML, lawful requests</td>
                                                <td className="py-4">Legal obligation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Automated Profiling & Matching */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                4. Automated Profiling & Matching
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed mb-4">
                                    We use a large-language-model (LLM) engine to rank experts for each provider brief. Inputs include brief keywords, tool stack, and reliability score; output is a relevance score surfaced to providers.
                                </p>
                                <p className="text-card-foreground leading-relaxed">
                                    <strong>No legally significant decision is made solely by the algorithm</strong>—providers make the final choice. Opt-out by emailing <a href="mailto:nate@trustedapp.co" className="text-primary hover:text-primary-foreground underline">nate@trustedapp.co</a> (manual review may slow matching).
                                </p>
                            </div>
                        </section>

                        {/* Retention */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                5. Retention
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-muted">
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Data</th>
                                                <th className="text-left py-3 text-primary font-semibold">Retention period / criteria</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-card-foreground">
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Account & profile</td>
                                                <td className="py-4">While account is active + 24 months of inactivity</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Financial records</td>
                                                <td className="py-4">7 years (tax & audit)</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Call recordings / transcripts</td>
                                                <td className="py-4">36 months, or deleted sooner on request</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Marketing lists</td>
                                                <td className="py-4">Until you unsubscribe or after 24 months of no engagement</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 pr-6 font-medium">Logs & backups</td>
                                                <td className="py-4">≤ 30 days, unless investigating abuse</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Sharing & International Transfers */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </div>
                                6. Sharing & International Transfers
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed mb-6">
                                    We share data only with:
                                </p>

                                <div className="grid gap-3 mb-6">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="font-medium text-foreground">Payment processors</span>
                                        <span className="text-muted-foreground">– Stripe, Inc.</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="font-medium text-foreground">Cloud hosting</span>
                                        <span className="text-muted-foreground">– Vercel (AWS us-east-1)</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="font-medium text-foreground">Analytics</span>
                                        <span className="text-muted-foreground">– Plausible (privacy-friendly) & Google Analytics (opt-in)</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="font-medium text-foreground">Communication</span>
                                        <span className="text-muted-foreground">– SendGrid, Postmark</span>
                                    </div>
                                </div>

                                <div className="text-card-foreground leading-relaxed">
                                    <p className="mb-4">All vendors sign Data Processing Agreements. International transfers rely on:</p>

                                    <ul className="space-y-2 mb-4">
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                            EU Standard Contractual Clauses (SCCs)
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                            EU-US Data Privacy Framework (where certified)
                                        </li>
                                    </ul>

                                    <p>A live sub-processor list lives at trustedapp.co/subprocessors.</p>
                                </div>
                            </div>
                        </section>

                        {/* Cookies & Similar Tech */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                7. Cookies & Similar Tech
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <ul className="space-y-3 text-card-foreground mb-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                        <span><strong>Essential cookies</strong> – authentication, payments.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                        <span><strong>Analytics cookies</strong> – first-party Plausible; Google Analytics only after consent.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                        <span><strong>Marketing pixels</strong> – none by default; load only if you opt in.</span>
                                    </li>
                                </ul>
                                <p className="text-card-foreground">
                                    Manage preferences anytime via "Cookie Settings" in the footer.
                                </p>
                            </div>
                        </section>

                        {/* Your Rights */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                8. Your Rights
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-muted">
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Region</th>
                                                <th className="text-left py-3 text-primary font-semibold">Rights & How to exercise</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-card-foreground">
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Worldwide</td>
                                                <td className="py-4">Access, correction, deletion, objection – email <a href="mailto:nate@trustedapp.co" className="text-primary hover:text-primary-foreground underline">nate@trustedapp.co</a></td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">EEA / UK / CH</td>
                                                <td className="py-4">Restrict processing, data portability, lodge a complaint with a DPA</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 pr-6 font-medium">California (CCPA/CPRA)</td>
                                                <td className="py-4">Know, delete, correct, opt-out of "sale/share" (we <strong>do not</strong> sell data), limit sensitive data. Click "Do Not Sell or Share" in footer.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-card-foreground mt-4">
                                    We respond within 30 days (extendable once by 30 days for complexity).
                                </p>
                            </div>
                        </section>

                        {/* Security */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                9. Security
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <ul className="space-y-3 text-card-foreground mb-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                        TLS 1.3 in transit; AES-256 at rest
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                        MFA & least-privilege IAM for admins
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                        Quarterly penetration tests & bug-bounty
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                        Continuous monitoring (Datadog & AWS GuardDuty)
                                    </li>
                                </ul>
                                <p className="text-muted-foreground text-sm italic">
                                    No system is 100% secure; use strong, unique passwords.
                                </p>
                            </div>
                        </section>

                        {/* Changes to This Policy */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                10. Changes to This Policy
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    Material updates are posted here and emailed to account holders 14 days before taking effect. Check this page for the latest version.
                                </p>
                            </div>
                        </section>

                        {/* Contact Us */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                11. Contact Us
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground leading-relaxed">
                                    <p className="mb-4">
                                        <strong>Email:</strong> <a href="mailto:nate@trustedapp.co" className="text-primary hover:text-primary-foreground underline">nate@trustedapp.co</a>
                                    </p>
                                    <p className="mb-4">
                                        <strong>Postal:</strong> TrustedApp (part of Only Founders, Inc), 380 C Street, Hayward, CA 94541, USA
                                    </p>
                                    <p>
                                        If you are in the EEA/UK and believe we haven't resolved a concern, you may lodge a complaint with your local data-protection authority.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <div className="text-center py-12 border-t border-border">
                            <p className="text-xl font-bold text-primary mb-2">
                                © 2025 TrustedApp (part of Only Founders, Inc). All rights reserved.
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Your insight earns you income; your privacy earns our vigilance.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
} 