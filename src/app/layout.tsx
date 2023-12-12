import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

interface SignInLayout {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Churras Trinca',
}

export default function RootLayout({ children }: SignInLayout) {
  return (
    <html lang="pt-br">
      <body className='bg-yellow-300 bkg-header'>
        <div className='flex h-screen flex-col items-center pt-[250px]'>
          <h3 className='font-extrabold text-3xl'>Agenda de Churras</h3>
          <div className='mt-20 w-full h-full flex justify-center'>{children}</div>
        </div>
      </body>
    </html>
  )
}
