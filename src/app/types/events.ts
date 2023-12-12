import { AddChurras, IChurras, Guest } from "./common"

export type EventsSlice = {
  loading: boolean
  events: IChurras[]
  event: IChurras
  // setEvents: (data: IChurras) => void
  setNewEvent: (data: AddChurras) => void
  getEvent: (id: number) => void
  setGuest: (name: string) => void
  setNewGuest: (data: Guest) => void
  // getEvent: (id: number) => void
  // setNewGuest: (data: Guest) => void
  // setStatusGuest: (id: number) => void
}