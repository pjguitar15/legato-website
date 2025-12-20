import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/ui/navbar/Navbar'
import Footer from './components/ui/Footer'
import SidebarNav from './components/sections/services/SidebarNav'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Legato Sounds and Lights',
  description: 'Professional Sounds and Lights Provider',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scrollbar-zinc-sky-700 scrollbar-zinc-sky-300'>
      <body className={`${poppins.className} antialiased`}>
        {/* <Navbar /> */}
        <div className='flex'>
          <div className='sm:w-1/2 xl:w-2/6'>
            <SidebarNav />
          </div>
          <div className='sm:w-1/2 xl:w-4/6'>{children}</div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
