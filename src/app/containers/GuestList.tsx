import { Guest } from "@/app/types/common"
import GuestData from "@/app/components/GuestData"

interface GuestListProps {
  eventId: number
  data: Guest[]
}

export default function GuestList ({ eventId, data }: GuestListProps) {
  return (
    <div>
      { data.map((row, i) => <GuestData data={{...row, churrasId: eventId}} key={i} /> )}
    </div>
  )
}