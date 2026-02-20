import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsappButton from "@/components/whatsapp-button"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://manhartotalsolution.com"),
  title: "Manhar Total Solution - Documentation & Insurance Services",
  description:
    "Fast paperwork and reliable insurance, all in one place. Government documentation services and insurance solutions.",
  keywords: "documentation, insurance, government services, aadhaar, pan card, gst, motor insurance, life insurance",
  authors: [{ name: "Manhar Total Solution" }],
  openGraph: {
    title: "Manhar Total Solution - Documentation & Insurance Services",
    description: "Fast paperwork and reliable insurance, all in one place.",
    url: "https://manhartotalsolution.com",
    siteName: "Manhar Total Solution",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Manhar Total Solution Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manhar Total Solution - Documentation & Insurance Services",
    description: "Fast paperwork and reliable insurance, all in one place.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsappButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
