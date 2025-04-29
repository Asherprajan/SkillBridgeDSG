import type React from "react"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

// Using Poppins Bold as a replacement for Gilroy Bold
const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-gilroy", // Using the same variable name for simplicity
  weight: ["700"],
  display: "swap"
})

export const metadata = {
  title: "SkillBridge DSG - Healthcare Placement",
  description: "Connecting Indian nursing professionals with careers in Germany",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
