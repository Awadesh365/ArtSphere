export const metadata = {
  title: 'artsphere',
  description: 'showcase Your Dedication and Projects Here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
