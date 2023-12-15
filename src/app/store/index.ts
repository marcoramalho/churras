import { churrasStorePersist } from "./events.store";

export const useStore = () => {
  const storeEvents = {
    loadingEvents: churrasStorePersist(state => state.loading),
    events: churrasStorePersist(state => state.events),
    details: churrasStorePersist(state => state.details),
    setNewEvent: churrasStorePersist(state => state.setNewEvent),
    setDetail: churrasStorePersist(state => state.setDetail),
    setGuest: churrasStorePersist(state => state.setGuest),
    setNewGuest: churrasStorePersist(state => state.setNewGuest)
  }

  return storeEvents
}