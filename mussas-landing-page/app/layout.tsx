import type { Metadata, Viewport } from 'next'
import { Mitr, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const mitr = Mitr({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mitr"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'MUSSAS Estilistas | Tu cabello, en su versión más natural y elegante',
  description: 'Salón de belleza especializado en técnicas personalizadas y tratamientos naturales que realzan tu brillo real. Corte, coloración, mechas, tratamientos con barros naturales y más.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#41342C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-[#FFF9F4]">
      <body className={`${mitr.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
