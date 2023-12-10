import { ReactNode } from 'react'

interface SignInLayout {
  children: ReactNode
}

export default function ChurrasLayout({ children }: SignInLayout) {
  return (
    <div className='bg-white w-full flex justify-center'>
      <div className='w-[500px]'>{children}</div>
    </div>
  )
}