import './globals.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'SuperCleanMe-IN',
  description: 'A sub branch of SuperCleanME, a cleaning service in the Dubai, UAE.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  )
}
