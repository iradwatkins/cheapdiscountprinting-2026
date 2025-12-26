import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cheap Discount Printing - Affordable Commercial Printing',
  description: 'High quality printing at the lowest prices. Flyers, brochures, business cards, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
