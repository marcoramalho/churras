'use client'

import { ReactNode } from 'react'
import { Raleway } from 'next/font/google'
import './globals.css'
import { Toaster, toast } from 'sonner'

interface SignInLayout {
  children: ReactNode
}

// const raleway = Raleway({ weight: "300", subsets: ["latin"] })

export default function RootLayout({ children }: SignInLayout) {
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
