import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { HeroHeader } from "@/components/layout/header";
import FooterSection from "@/components/layout/footer";
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
  description: "Turn expertise into income. Turn user insight into market wins.",
  metadataBase: new URL('https://trustedapp.com'),
  openGraph: {
    title: "TrustedApp - Turn expertise into income",
    description: "Turn expertise into income. Turn user insight into market wins.",
    url: 'https://trustedapp.com',
    siteName: 'TrustedApp',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TrustedApp - Turn expertise into income',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrustedApp - Turn expertise into income',
    description: 'Turn expertise into income. Turn user insight into market wins.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider>
          <HeroHeader />
          <div className="min-h-screen flex flex-col">
            <main className="flex-1 pt-[36px]">{children}</main>
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
