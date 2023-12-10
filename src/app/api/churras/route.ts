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
    return NextResponse.json(churras)
  } else {
    return NextResponse.json(hasChurras)
  } 
}


export async function PUT(request: Request) {
  const data = await request.json()

  // const getChurrasById = churras.find(({ id }) => data.churrasId === id)
 
  return NextResponse.json(data)
}