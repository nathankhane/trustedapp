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
  title: "TrustedApp - Turn expertise into income",
  description: "Turn expertise into income. Turn user insight into market wins.",
  metadataBase: new URL('https://trustedapp-demo.vercel.app'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  openGraph: {
    title: "TrustedApp - Turn expertise into income",
    description: "Turn expertise into income. Turn user insight into market wins.",
    url: 'https://trustedapp-demo.vercel.app',
    siteName: 'TrustedApp',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TrustedApp landing page showing "Turn expertise into income" with purple and green accents on dark background',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrustedApp - Turn expertise into income',
    description: 'Turn expertise into income. Turn user insight into market wins.',
    images: [
      {
        url: '/og-image.png',
        alt: 'TrustedApp landing page showing "Turn expertise into income" with purple and green accents on dark background',
      }
    ],
    creator: '@trustedapp',
    site: '@trustedapp',
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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TrustedApp',
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#7F5BFF',
    'msapplication-TileColor': '#7F5BFF',
    'msapplication-navbutton-color': '#7F5BFF',
    'apple-mobile-web-app-title': 'TrustedApp',
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
            <main className="flex-1 pt-[72px] sm:pt-16 lg:pt-14">{children}</main>
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
