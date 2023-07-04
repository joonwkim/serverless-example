import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css' 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container'>{children}</body>
    </html>
  )
}
