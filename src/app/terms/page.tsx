import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header Section */}
            <div className="pb-16 px-6 pt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-8">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Terms of Service</span>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Clear, fair terms that protect both experts and SaaS teams using our platform.
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

                        {/* Acceptance of Terms */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                1. Acceptance of These Terms
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    By creating an account, clicking &ldquo;I agree,&rdquo; or using any part of TrustedApp (the &ldquo;<strong>Services</strong>&rdquo;), you agree to be bound by these Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) and our <Link href="/privacy-policy" className="text-primary hover:text-primary-foreground underline">Privacy Policy</Link>.
                                </p>
                            </div>
                        </section>

                        {/* Who We Are */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                2. Who We Are
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="text-card-foreground">
                                    <p className="mb-2"><strong>TrustedApp (part of Only Founders, Inc)</strong></p>
                                    <p className="mb-2">380 C Street, Hayward, CA 94541, USA</p>
                                    <p>Email: <a href="mailto:nate@trustedapp.co" className="text-primary hover:text-primary-foreground underline font-semibold">nate@trustedapp.co</a></p>
                                </div>
                            </div>
                        </section>

                        {/* Eligible Users */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                3. Eligible Users
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    You must be at least 18 years old and legally able to contract. Registration and payment info must be accurate and kept up to date.
                                </p>
                            </div>
                        </section>

                        {/* Account Security */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                4. Account Security
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    Keep credentials confidential. You are liable for account activity unless caused by TrustedApp&apos;s security failure.
                                </p>
                            </div>
                        </section>

                        {/* The Services */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                    </svg>
                                </div>
                                5. The Services
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    TrustedApp is a two-sided marketplace enabling <strong>Providers</strong> (SaaS companies) to purchase user-insight services from <strong>Experts</strong> (founders, operators, power-users). TrustedApp provides matchmaking, Stripe-escrow payments, session tooling, and royalties on re-used content.
                                </p>
                            </div>
                        </section>

                        {/* Data Privacy & Intellectual Property */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                6. Data Privacy & Intellectual Property
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <ul className="space-y-3 text-card-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Data practices follow the Privacy Policy.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Experts retain ownership of their original know-how but grant Providers a licence defined at checkout (standard or royalty-based).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Providers own derivative deliverables once payment clears.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>TrustedApp may anonymise and aggregate metadata to improve the Services.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><strong>Feedback Licence (NEW).</strong> Suggestions you send may be used by TrustedApp royalty-free, forever.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><strong>Export Controls (NEW).</strong> You confirm you&apos;re not on U.S. sanctions lists and won&apos;t use the Services in embargoed regions.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Fees, Taxes & Payment Controls */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                7. Fees, Taxes & Payment Controls
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <ol className="space-y-4 text-card-foreground">
                                    <li className="flex items-start gap-3">
                                        <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                                        <div>
                                            <strong>Escrow.</strong> Provider funds are held in escrow until completion or cancellation (see §9).
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                                        <div>
                                            <strong>Platform Fee.</strong> 10% paid by Providers; Experts receive payout net of Stripe fees.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                                        <div>
                                            <strong>Taxes.</strong> Each party handles its own taxes; TrustedApp may withhold when required.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                                        <div>
                                            <strong>Risk Controls (NEW).</strong> TrustedApp may delay, decline, or reverse payments that violate law or risk policies.
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </section>

                        {/* Non-Circumvention */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                8. Non-Circumvention (&ldquo;No Back-Door Deals&rdquo;)
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm space-y-6">
                                <p className="text-card-foreground leading-relaxed">
                                    For <strong>24 months</strong> after first contact on TrustedApp you may not solicit, accept, or make any payment outside TrustedApp for substantially similar services (&ldquo;<strong>Direct Deal</strong>&rdquo;) without written waiver.
                                </p>

                                <div>
                                    <h3 className="font-semibold text-foreground mb-3">Consequences of Breach</h3>
                                    <ul className="space-y-3 text-card-foreground">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span><strong>Liquidated Damages.</strong> Pay the greater of <strong>20%</strong> of all off-platform amounts <strong>or USD 5,000</strong> per Provider–Expert pair.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span><strong>Account Action.</strong> Suspension and forfeiture of unpaid or escrowed funds.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span><strong>Injunctive Relief.</strong> TrustedApp may seek court injunctions without bond.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span><strong>Collection Costs.</strong> You pay reasonable attorneys&apos; fees and costs to enforce this clause.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Cancellations & Refunds */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                9. Cancellations & Refunds
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <ul className="space-y-3 text-card-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Provider cancels ≤ 24 h: 50% fee forfeited.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Expert no-show: full refund to Provider; payout forfeited.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Disputes must be filed within 7 days; TrustedApp&apos;s decision is final.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Prohibited Conduct */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                                    </svg>
                                </div>
                                10. Prohibited Conduct
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <ul className="space-y-3 text-card-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Illegal activity, harassment, discrimination.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Scraping, crawling, or automated harvesting of data.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Reverse-engineering or security testing without written consent.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Uploading personal data without proper consent.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Confidentiality */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                11. Confidentiality
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    All information marked &ldquo;Confidential,&rdquo; or reasonably understood as such, must be protected for five years. Session recordings are confidential by default.
                                </p>
                            </div>
                        </section>

                        {/* Disclaimers */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                12. Disclaimers
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    Services are provided &ldquo;as-is.&rdquo; We disclaim all warranties except those that cannot be disclaimed under applicable law.
                                </p>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                13. Limitation of Liability
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    TrustedApp&apos;s total liability is limited to the greater of <strong>USD 100</strong> or the amounts you paid or earned via the Services in the 12 months preceding the claim. This cap does not apply to: (i) failure to remit cleared escrow funds; (ii) your indemnity obligations.
                                </p>
                            </div>
                        </section>

                        {/* Indemnity */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                14. Indemnity
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    You will indemnify and hold TrustedApp harmless from claims arising from your use or breach. TrustedApp&apos;s aggregate indemnity obligation to you is capped at <strong>USD 50,000</strong>.
                                </p>
                            </div>
                        </section>

                        {/* Force Majeure */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                </div>
                                15. Force Majeure
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    Neither party is liable for delays caused by events beyond reasonable control (e.g., internet outages, strikes, pandemics).
                                </p>
                            </div>
                        </section>

                        {/* Termination */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-stone-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                16. Termination
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    Either party may terminate at any time. Sections 6, 8, 11–16, 18 survive termination.
                                </p>
                            </div>
                        </section>

                        {/* Governing Law & Dispute Resolution */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9" />
                                    </svg>
                                </div>
                                17. Governing Law & Dispute Resolution
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    California law governs. Unresolved disputes are settled by binding arbitration under JAMS Streamlined Rules in San Francisco County. Either party may seek injunctive relief in a competent court.
                                </p>
                            </div>
                        </section>

                        {/* Additional Legal Terms */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                18. Additional Legal Terms
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm space-y-4">
                                <p className="text-card-foreground">
                                    <strong>Severability.</strong> If a term is unenforceable, the remainder stays effective.
                                </p>
                                <p className="text-card-foreground">
                                    <strong>No Waiver.</strong> Failure to enforce is not a waiver.
                                </p>
                                <p className="text-card-foreground">
                                    <strong>Entire Agreement.</strong> These Terms plus referenced policies are the entire agreement between you and TrustedApp.
                                </p>
                            </div>
                        </section>

                        {/* Changes to Terms */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-lime-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                19. Changes to Terms
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    Material changes will be posted here and emailed 14 days before they take effect. Continued use after that date constitutes acceptance.
                                </p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                20. Contact
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    Email <a href="mailto:nate@trustedapp.co" className="text-primary hover:text-primary-foreground underline font-semibold">nate@trustedapp.co</a> or write to TrustedApp (part of Only Founders, Inc), 380 C Street, Hayward, CA 94541, USA.
                                </p>
                            </div>
                        </section>

                        {/* Footer */}
                        <div className="text-center py-12 border-t border-border">
                            <p className="text-xl font-bold text-primary mb-2">
                                © 2025 TrustedApp (part of Only Founders, Inc). All rights reserved.
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Clear terms. Fair marketplace. Trusted outcomes.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
} 