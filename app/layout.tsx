import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CP Eletrônica',
  description: 'CP Eletrônica',
  generator: 'CP Eletrônica',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
