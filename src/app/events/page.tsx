'use client'

import { useState } from "react";
import Event from "@/app/components/Event";
import Dialog from "@/app/components/Dialog";
import AddEventButton from "@/app/components/AddEventButton";
import AddEvent from "@/app/containers/AddEvent";
import { useStore } from "@/app/store";
import Loading from "@/app/components/Loading"; 

export default function EventList() {
  const { events, loadingEvents } = useStore()
  const [newEvent, setNewEvent] = useState(false)
  return (
    <>
      <Dialog title="Adicionar Churras" open={newEvent}>
        <AddEvent onClose={setNewEvent} />
      </Dialog>
      <div className="flex flex-wrap gap-2 mt-[-20px]">
        { events?.length && events?.map(details => (
          <Event data={details} key={details.id} />
          ))}
        <AddEventButton onClick={setNewEvent} />
      </div>
      <Loading open={loadingEvents} type="balls" />
    </>
  )
}