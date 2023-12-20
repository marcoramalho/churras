'use client'

import { useEffect, useState } from "react"
import { handleIntegerToDecimal } from "../utils/handleData"
import { Guest } from "../types/common"
import StatusPgto from "./StatusPgto"
import { useStore } from "../store"
import { FaTrashAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip"

interface GuestDataProps {
  data: Guest
}

export default function GuestData ({ data }: GuestDataProps) {
  const { setGuest, setRemoveGuest, details } = useStore()
  const { status, name, investment } = data

  const [statusPgto, setStatusPgto] = useState(false)
  const [deleteGuest, setDeleteGuest] = useState(false)

  const handleStatus = () =>  {
    setStatusPgto(!statusPgto)
    setGuest(name)
  }
  const handleDelete = (event: number, name: string) => setRemoveGuest(event, name)

  useEffect(() => {
    setStatusPgto(status ?? false)
  }, [])
  return (
    <div className="flex justify-between border-b-2 my-2 p-2 border-[#E5C231]" onMouseOver={() => setDeleteGuest(true)} onMouseOut={() => setDeleteGuest(false)}>
      <div className="flex">
        <span id="status"><StatusPgto status={statusPgto} handleStatus={handleStatus} /></span>
        <Tooltip
          anchorSelect="#status"
          content="Status Pagamento"
        />
        <span className="text-base font-medium pl-4">{name}</span>
      </div>
      <div className="text-base font-medium flex justify-between">
        {deleteGuest && (
          <>
            <span className="mr-5 cursor-pointer" id="delete-button" onClick={() => handleDelete(details.id, name)}><FaTrashAlt size={20} color="#E5C231" /></span>
            <Tooltip
              anchorSelect="#delete-button"
              content={`Excluir ${name}`}
            />
          </>
        )}
        <span>{`R$ ${handleIntegerToDecimal(Number(investment))}`}</span>
        </div>
    </div>
  )
}