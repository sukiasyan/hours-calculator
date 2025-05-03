// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Hours Calculator',
  description: 'Calculate your working hours',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto p-4">
          <div className="flex gap-4">
            <Link href="/" className="text-blue-600">Monthly View</Link>
            <a href="/quick-calc" className="text-blue-600">Quick Calculator</a>
          </div>
        </div>
      </nav>
      {children}
      </body>
      </html>
  )
}