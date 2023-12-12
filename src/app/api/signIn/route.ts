import { NextResponse } from 'next/server'
import auth from '@/mocks/dataAuth.json'
import { SignIn } from '@/app/types/common'

export async function POST(request: Request) {
  const data: SignIn = await request.json()

  const getUser = (data: SignIn) => {
    const { username: postUsername, password: postPassword } = data
    const user = auth.filter(
      ({ username, password }) =>
        username === postUsername && password === postPassword,
    )
    return user
  }

  return NextResponse.json(getUser(data))
}
