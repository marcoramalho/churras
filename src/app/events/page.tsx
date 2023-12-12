'use client'

import { churras } from "@/mocks/churras";
import Event from "@/app/components/Event";
import AddEventButton from "@/app/components/AddEventButton";
import Dialog from "../components/Dialog";
import { useEffect, useState } from "react";
import AddEvent from "../containers/AddEvent";
import { IChurras } from "../types/common";
import { useStore } from "../store";

export default function Dashboard() {
  const { events } = useStore()

  const [newEvent, setNewEvent] = useState(false)
  return (
    <>
      <Dialog title="Adicionar Churras" open={newEvent}>
        <AddEvent onClose={setNewEvent} />
      </Dialog>
      <div className="flex flex-wrap gap-2 mt-[-20px]">
        { events?.map(churras => (
          <Event data={churras} key={churras.id} />
        ))}
        <AddEventButton onClick={setNewEvent} />
      </div>
    </>
  )
}