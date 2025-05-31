import { Logo } from "@/components/logo";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-12 mt-0">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <Logo className="h-8 w-auto mb-6" />
        <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-muted-foreground">
          <Link href="/contactus" className="hover:text-foreground transition-colors">
            Contact Us
          </Link>
          <Link href="/solution" className="hover:text-foreground transition-colors">
            Solution
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Customers
          </Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/#faqs" className="hover:text-foreground transition-colors">
            Help
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
        <div className="flex gap-6 mb-6">
          <Link
            href="https://x.com/trustedappco"
            aria-label="X/Twitter"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/company/trusted-app-co"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.tiktok.com/@trustedapp.co"
            aria-label="TikTok"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
            </svg>
          </Link>
        </div>
        <div className="mb-4">
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <span className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} TrustedApp, All rights reserved
        </span>
      </div>
    </footer>
  );
}
