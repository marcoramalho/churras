'use client'

import { ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import 'react-tooltip/dist/react-tooltip.css'
import './globals.css'

interface SignInLayout {
  children: ReactNode
}

export default function RootLayout({ children }: SignInLayout) {
  const pathname = usePathname()
  const router = useRouter()
  
  if (pathname !== '/') {
    if (!localStorage.getItem('signIn')) {
      localStorage.clear()
      return router.push('/')
    }
  }
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className='bg-yellow-300 bkg-header'>
        <div className='flex h-screen flex-col items-center pt-[250px]'>
          <h3 className='font-extrabold text-3xl'>Agenda de Churras</h3>
          <div className='mt-20 w-full h-full flex justify-center'>
            {children}
          </div>
          <Toaster richColors position='top-right' expand={false} />
        </div>
      </body>
    </html>
  )
}
