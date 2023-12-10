'use client'

import { useRouter } from 'next/navigation'
import { IChurras } from "../types/common"
import { getBudget } from "../utils/handleData"

interface EventProps {
  data: IChurras
}

export default function Event({ data }: EventProps) {
  const router = useRouter()

  const { id, date, title, guest } = data
  const budget: string = getBudget(guest)

  const goToChurrasDatails = () => router.push(`/details/${id}`)
  return (
    <button
      className="bg-white w-[240px] flex flex-col shadow-lg p-3"
      onClick={goToChurrasDatails}
    >
      <div>{date}</div>
      <div>{title}</div>
      <div className="flex justify-between w-full">
        <span>{guest.length}</span>
        <span>{budget}</span>
      </div>
    </button>
  )
}