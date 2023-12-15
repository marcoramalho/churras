'use client'

import { useRouter } from 'next/navigation'
import moment from 'moment'
import { HiOutlineUsers } from "react-icons/hi2";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IChurras } from "../types/common"
import { getBudget } from "../utils/handleData"
import { useStore } from '../store';

interface EventProps {
  data: IChurras
}

export default function Event({ data }: EventProps) {
  const { setDetail } = useStore()

  const router = useRouter()

  const { id, date, title, guest } = data
  const budget: string = getBudget(guest)

  const newDate = new Date(date)
  const goToChurrasDatails = () => {
    setDetail(data)
    router.push(`/details/${id}`)
  }
  return (
    <button
      className="bg-white w-[240px] flex flex-col shadow-lg p-3"
      onClick={goToChurrasDatails}
    >
      <div className='text-xl font-bold'>{moment(newDate).format('DD/MM')}</div>
      <div className='text-lg font-medium my-1'>{title}</div>
      <div className="flex justify-between w-full mt-10">
        <span className='text-sm flex justify-start'>
          <HiOutlineUsers size={18} color='#FFD836' style={{ marginRight: '5px' }} />
          {guest.length}
        </span>
        <span className='text-sm flex justify-start'>
          <RiMoneyDollarCircleFill size={20} color='#FFD836' style={{ marginRight: '5px' }} />
          {budget}
        </span>
      </div>
    </button>
  )
}