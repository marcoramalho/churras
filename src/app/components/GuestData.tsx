'use client'

import { Guest } from "../types/common"
import { handleIntegerToDecimal } from "../utils/handleData"

interface GuestDataProps {
  data: Guest
}

export default function GuestData ({ data }: GuestDataProps) {
  const { churrasId, name, investment } = data
  return (
    <div>
      <div className="flex justify-between border-b-2 my-2 p-2" style={{ borderColor: '#E5C231' }}>
        <div>
          <span></span>
          <span>{name}</span>
        </div>
        <div>{`R$ ${handleIntegerToDecimal(investment)}`}</div>
      </div>
    </div>
  )
}