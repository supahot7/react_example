import './globals.css'
import type { Metadata } from 'next'
import Header from '@/component/header/page'
import Footer from '@/component/footer/page'
export const metadata: Metadata = {
  description: 'Aplicacion ejemplo para los compañeros de programacion3.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className=' min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1 p-6'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
