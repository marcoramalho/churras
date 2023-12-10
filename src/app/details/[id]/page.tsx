'use client'

import GuestData from "@/app/components/GuestData"
import { EventDetail } from "@/app/services/Events"
import { IChurras } from "@/app/types/common"
import { getBudget } from "@/app/utils/handleData"
import { useEffect, useState } from "react"

interface DetailProps {
  params: {
    id: number
  }
}

export default function Detail({ params }: DetailProps) {
  const { id } = params
  const [event, setEvent] = useState<IChurras>()
  
  const getEventDetail = (id: number) => 
    EventDetail(id).then(res => setEvent(res.data))

  useEffect(() => {
    getEventDetail(id)
  }, [])
  useEffect(() => {
    console.log(event)
  }, [event])
  return (
    <div className="bg-white flex flex-col mt-[-20px] p-3">
      <div className="flex justify-between">
        <div>{event?.date}</div>
        <div>{event?.guest.length}</div>
      </div>
      <div className="flex justify-between">
        <div>{event?.title}</div>
        <div>{event?.guest ? getBudget(event?.guest) : 0}</div>
      </div>
      <div>
        { event?.guest.map(row => (
          <GuestData data={row} />
        ))}
      </div>
    </div>
  )
}