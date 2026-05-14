import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import ScrollProgress from "@/components/ScrollProgress"
import LoadingScreen from "@/components/LoadingScreen"
import { LanguageProvider } from "@/context/LanguageContext"
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Jimmy Gonçalves | Web Developer",
  description:
    "Personal portfolio focused on modern web development and clean design.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={`${playfairDisplay.variable} bg-[#fcfcfc] text-[#1a1a1a] antialiased`}
      >
        <LanguageProvider>
          <LoadingScreen />
          {children}
          <ScrollProgress />
        </LanguageProvider>
      </body>
    </html>
  )
}
