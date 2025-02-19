import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Compose101 - Comming Soon',
  description: "Streamline your Android development with our comprehensive Jetpack Compose Boilerplate. From UI to architecture, we've got you covered.",
  generator: 'meticha.com',
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
