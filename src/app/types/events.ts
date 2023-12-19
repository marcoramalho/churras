import { AddChurras, IChurras, Guest } from "./common"

export type EventsSlice = {
  loading: boolean
  events: IChurras[]
  details: IChurras
  setNewEvent: (data: AddChurras) => void
  setEvents: (data: IChurras[]) => void
  setDetail: (data: IChurras) => void
  setGuest: (name: string) => void
  setNewGuest: (data: Guest) => void
  setRemoveGuest: (id: number, name: string) => void
}