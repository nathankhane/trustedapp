import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SimpleToggle } from "@/components/ui/mode-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrustedApp",
  description: "Monetize the Stack You Already Use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider>
          <HeroHeader />
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <FooterSection />
          </div>
          {/* Theme toggle positioned as floating button */}
          <div className="fixed bottom-6 right-6 z-50">
            <SimpleToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
