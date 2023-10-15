import './globals.css'

export const metadata = {
  title: 'SuperCleanme-IN',
  description: 'A sub branch of superCleanME, a cleaning service in the Dubai, UAE.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
