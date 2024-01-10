import { Inter } from 'next/font/google'
import './globals.css'
import MouseHover from './components/common/mouseHover'
import Nav from './components/common/navbar/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neoh',
  description: 'An Nft website created by simplinedu with next js',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Nav/>
        <MouseHover/>
      </body>
    </html>
  )
}
