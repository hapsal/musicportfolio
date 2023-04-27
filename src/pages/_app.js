import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} font-sans bg-neutral-200`}>
      <NavBar />
    <main className={`bg-neutral-200 container mx-auto`}>
      <Component {...pageProps} />
      <Footer />
      </main>
    </div>
  )
}
