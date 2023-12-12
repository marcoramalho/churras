import { NextResponse } from 'next/server'
import { AddChurras, Guest, IChurras } from '@/app/types/common'
import { churras } from '@/mocks/churras'


export async function POST(request: Request) {
  const data: AddChurras = await request.json()

  const hasChurras = churras.find(({ date, title }) => data.date === date && data.title === title)
  const getChurrasId = churras.length ? churras.slice(-1)[0].id + 1 : 1
  const newChurras: IChurras = {
    id: getChurrasId,
    guest: [],
    ...data
  }
  
  if (!hasChurras) {
    churras.push(newChurras)
    return NextResponse.json({ data: churras })
  } else {
    return NextResponse.json({ data: hasChurras })
  } 
}


export async function PUT(request: Request) {
  const data: Guest = await request.json()

  const event = churras.filter(row => row.id === Number(data?.churrasId))[0]
  const verName = event.guest.find(row => row.name === data?.name)
  
  if (!verName?.name) {
    event?.guest?.push(data)
    return NextResponse.json({ data: event.guest })
  } else {
    return NextResponse.json({ data: [] })
  }
}