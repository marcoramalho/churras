import { NextResponse } from 'next/server'
import { churras } from '@/mocks/churras'

export async function GET(request: Request, context: any) {
  const { params } = context

  const data = churras.filter(row => row.id === Number(params.id))[0]

  return NextResponse.json({ data }) 
}