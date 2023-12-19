'use client'

import GuestData from "@/app/components/GuestData"
import { EventDetail } from "@/app/services/Events"
import { Guest, IChurras } from "@/app/types/common"
import { getBudget } from "@/app/utils/handleData"
import moment from "moment"
import { useEffect, useState } from "react"
import { HiOutlineUsers } from "react-icons/hi2"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { FaCirclePlus } from "react-icons/fa6";
import Dialog from "@/app/components/Dialog"
import AddGuest from "@/app/containers/AddGuest"
import Link from "next/link"
import { useStore } from "@/app/store"
import GuestList from "@/app/containers/GuestList"

interface DetailProps {
  params: {
    id: number
  }
}

export default function Detail({ params }: DetailProps) {
  const { details, loadingEvents } = useStore()

  const { id } = params
  const [newGuest, setNewGuest] = useState(false)
  const [budget, setBudget] = useState('0,00')
  const [list, setList] = useState<Guest[]>([])

  useEffect(() => {
    setList(details?.guest)
    setBudget(getBudget(details?.guest))
  }, [loadingEvents])
  return (
    <>
      <Dialog title="Adicionar Convidado" open={newGuest}>
        <AddGuest onClose={setNewGuest} id={id} />
      </Dialog>
      <div className="bg-white flex flex-col mt-[-20px] p-3">
        <div className="flex justify-between">
          <div className="text-xl font-bold">{moment(details?.date).format('DD/MM')}</div>
          <div className="text-base flex justify-start">
            <span className="mr-2"><button onClick={() => setNewGuest(true)}><FaCirclePlus size={24} color='#FED21D' /></button></span>
            <HiOutlineUsers size={18} color='#FFD836' style={{ marginRight: '5px' }} />
            {details?.guest.length}
          </div>
        </div>
        <div className="flex justify-between my-3">
          <div className="text-2xl font-semibold">{details?.title}</div>
          <div className="text-base flex justify-start">
            <RiMoneyDollarCircleFill size={20} color='#FFD836' style={{ marginRight: '5px' }} />
            {budget}
          </div>
        </div>
        <div>
          <GuestList eventId={id} data={list} />
        </div>
        <div className="flex justify-end my-4"><Link href="/events">Voltar</Link></div>
      </div>
    </>
  )
}