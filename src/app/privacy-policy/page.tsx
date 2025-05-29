import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header Section */}
            <div className="pt-20 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-8">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm text-muted-foreground">Privacy Policy</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        TrustedApp Privacy Policy
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Your privacy powers our platform. Here's the short, clear version of what we collect, why, and how we protect it.
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Last Updated on May 27, 2025
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">

                        {/* Information We Collect */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Information We Collect
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-muted">
                                                <th className="text-left py-3 pr-6 text-primary font-semibold">Type</th>
                                                <th className="text-left py-3 text-primary font-semibold">Examples</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-card-foreground">
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Account</td>
                                                <td className="py-4">name, email, password hash, role (Expert / Provider)</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Profile</td>
                                                <td className="py-4">job title, company, payout details</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Transactions</td>
                                                <td className="py-4">Stripe IDs, invoices, payout history</td>
                                            </tr>
                                            <tr className="border-b border-muted">
                                                <td className="py-4 pr-6 font-medium">Content</td>
                                                <td className="py-4">survey answers, call recordings (with consent), messages</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 pr-6 font-medium">Usage</td>
                                                <td className="py-4">IP, device/browser, clicks, cookies</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-muted-foreground text-sm mt-4 italic">
                                    We don't knowingly collect data from anyone under 16.
                                </p>
                            </div>
                        </section>

                        {/* How We Use It */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                How We Use It
                            </h2>

                            <div className="grid gap-4">
                                <div className="bg-card rounded-lg p-5 shadow-sm flex items-start gap-4">
                                    <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Run the service</h3>
                                        <p className="text-muted-foreground">match Experts & Providers, process payments.</p>
                                    </div>
                                </div>
                                <div className="bg-card rounded-lg p-5 shadow-sm flex items-start gap-4">
                                    <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Improve & secure</h3>
                                        <p className="text-muted-foreground">debug, fight fraud, measure usage.</p>
                                    </div>
                                </div>
                                <div className="bg-card rounded-lg p-5 shadow-sm flex items-start gap-4">
                                    <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Keep you informed</h3>
                                        <p className="text-muted-foreground">receipts, product updates, opt-in marketing.</p>
                                    </div>
                                </div>
                                <div className="bg-card rounded-lg p-5 shadow-sm flex items-start gap-4">
                                    <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Legal & compliance</h3>
                                        <p className="text-muted-foreground">taxes, audits, law-enforcement requests.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Data Security */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                Data Security
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <ul className="space-y-3 text-card-foreground">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        TLS in transit, AES-256 at rest
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        MFA & least-privilege access
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        Annual penetration tests
                                    </li>
                                </ul>
                                <p className="text-muted-foreground text-sm mt-4 italic">
                                    No internet system is 100% secure, but we sweat the details.
                                </p>
                            </div>
                        </section>

                        {/* Sharing & Transfers */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </div>
                                Sharing & Transfers
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <div className="mb-6">
                                    <p className="text-foreground text-lg font-semibold mb-3">
                                        We <span className="text-destructive italic">never</span> sell your data.
                                    </p>
                                    <p className="text-card-foreground mb-4">We share it only with:</p>
                                </div>

                                <div className="grid gap-3">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="font-medium text-foreground">Stripe</span>
                                        <span className="text-muted-foreground">(payments)</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="font-medium text-foreground">Cloud / analytics providers</span>
                                        <span className="text-muted-foreground">(hosting, metrics)</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="font-medium text-foreground">Professional advisers</span>
                                        <span className="text-muted-foreground">(legal, accounting)</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="font-medium text-foreground">Authorities</span>
                                        <span className="text-muted-foreground">when the law requires it</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm mt-6">
                                    All vendors sign confidentiality & data-processing agreements. Data may move outside your country; standard contractual clauses keep it protected.
                                </p>
                            </div>
                        </section>

                        {/* Cookies */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                Cookies
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    We use first-party cookies for log-ins and third-party cookies (e.g., Google Analytics) for product insights. You can block cookies, but some features may break.
                                </p>
                            </div>
                        </section>

                        {/* Your Choices */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                Your Choices
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <ul className="space-y-3 text-card-foreground">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        Access or export your data
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        Correct or delete info
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        Opt-out of marketing
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        Object to certain processing
                                    </li>
                                </ul>
                                <p className="text-card-foreground mt-4">
                                    Email <a href="mailto:privacy@trustedapp.co" className="text-primary hover:text-primary-foreground underline">privacy@trustedapp.co</a> or use in-app settings—response in ≤30 days.
                                </p>
                            </div>
                        </section>

                        {/* Changes */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                Changes
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    We'll post updates here and, if the change is big, give you 14 days' notice via email or in-app.
                                </p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                Contact
                            </h2>

                            <div className="bg-card rounded-xl p-6 shadow-sm">
                                <p className="text-card-foreground leading-relaxed">
                                    If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at{" "}
                                    <a href="mailto:contact@trustedapp.co" className="text-primary hover:text-primary-foreground underline">
                                        contact@trustedapp.co
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Footer Quote */}
                        <div className="text-center py-12 border-t border-border">
                            <p className="text-xl font-bold text-primary">
                                Your insight earns you income; your privacy earns our vigilance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 