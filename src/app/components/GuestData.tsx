'use client'

import { Guest } from "../types/common"
import { handleIntegerToDecimal } from "../utils/handleData"
import StatusPgto from "./StatusPgto"
import { useEffect, useState } from "react"
import { useStore } from "../store"

interface GuestDataProps {
  data: Guest
}

export default function GuestData ({ data }: GuestDataProps) {
  const { setGuest, event } = useStore()

  const { churrasId, status, name, investment } = data
  const [statusPgto, setStatusPgto] = useState(false)

  const getStatus = () => 
  console.log(event.guest.filter(row => row.name === name))

  const handleStatus = () => setGuest(name)
    const guest =  event.guest.filter(row => row.name === name)
    console.log(guest)
  //   setStatusPgto(guest.status)

  useEffect(() => {
    getStatus()
    setStatusPgto(status ?? false)
  }, [event])
  return (
    <div>
      <div className="flex justify-between border-b-2 my-2 p-2 border-[#E5C231]">
        <div className="flex">
          <span><StatusPgto status={statusPgto} handleStatus={handleStatus} /></span>
          <span className="text-base font-medium pl-4">{name}</span>
        </div>
        <div className="text-base font-medium">{`R$ ${handleIntegerToDecimal(Number(investment))}`}</div>
      </div>
    </div>
  )
}