import { NextResponse } from 'next/server'
import { churras } from '@/mocks/churras'
import { Name } from '@/app/types/common'


export async function GET(request: Request, context: any) {
  const { params } = context
  const data = churras.filter(row => row.id === Number(params.id))[0]

  return NextResponse.json({ data })
}


export async function PUT(request: Request, context: any) {
  const { params } = context
  const event = churras.filter(row => row.id === Number(params.id))[0]
  const indexEvent = churras.map(event => event.id).indexOf(Number(params.id))

  const name: Name = await request.json()

  const guest = event.guest.filter(row => row.name === name.name)
  const indexGuest = event.guest.map(guest => guest.name).indexOf(name.name)
  
  churras[indexEvent].guest[indexGuest].status = !guest[0].status

  return NextResponse.json({ data: guest[0] })
}