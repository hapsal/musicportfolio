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
    <div className={`${inter.variable} font-sans w-full h-screen bg-zinc-800 justify-between`}>
      <NavBar />
    <main className={`w-full h-screen bg-zinc-800 justify-between`}>
      <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
