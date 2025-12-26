import type { Metadata } from "next";
import { Oswald, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/ui/navbar/Navbar'
import Footer from './components/ui/Footer'
import SidebarNav from './components/sections/services/SidebarNav'

export const metadata: Metadata = {
  title: 'Legato Sounds and Lights',
  description: 'Professional Sounds and Lights Provider',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scrollbar-zinc-sky-700 scrollbar-zinc-sky-300'>
      <body
        className={`${poppins.className} ${oswald.variable} antialiased relative scrollbar-modern`}
      >
        <div className='hidden lg:block sticky top-0 z-50'>
          <Navbar />
        </div>
        <div>
          <div className='lg:hidden'>
            <SidebarNav />
          </div>
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
