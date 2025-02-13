import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ilyosbek - Portfolio",
  description: "Interactive portfolio website of Ilyosbek",
  openGraph: {
    title: "Ilyosbek - Portfolio",
    description: "Explore my interactive portfolio showcasing my projects and skills.",
    images: [
      {
        url: "https://yourwebsite.com/your-image.jpg", // Rasmingiz URL manzili
        width: 1200,
        height: 630,
        alt: "Ilyosbek Portfolio Preview",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-black to-gray-900 text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

