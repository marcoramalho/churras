import { ReactNode } from 'react'

interface SignInLayout {
  children: ReactNode
}

export default function AuthLayout({ children }: SignInLayout) {
  return (
      <div>{children}</div>
  )
}