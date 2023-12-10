'use client'

import { churras } from "@/mocks/churras";
import Event from "../components/Event";
import AddEvent from "../components/AddEvent";

export default function Dashboard() {
  return (
    <div className="flex flex-wrap gap-2 mt-[-20px]">
      { churras?.map(churras => (
        <Event data={churras} key={churras.id} />
      ))}
      <AddEvent />
    </div>
  )
}