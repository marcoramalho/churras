import { AddChurras, IChurras, Guest } from "./common"

export type EventsSlice = {
  loading: boolean
  events: IChurras[]
  details: IChurras
  // setEvents: (data: IChurras) => void
  setNewEvent: (data: AddChurras) => void
  setDetail: (data: IChurras) => void
  setGuest: (name: string) => void
  setNewGuest: (data: Guest) => void
  // getEvent: (id: number) => void
  // setNewGuest: (data: Guest) => void
  // setStatusGuest: (id: number) => void
}