import { churrasStorePersist } from "./events.store";

export const useStore = () => {
  const storeEvents = {
    loadingEvents: churrasStorePersist(state => state.loading),
    events: churrasStorePersist(state => state.events),
    event: churrasStorePersist(state => state.event),
    // setStoreEvents: churrasStorePersist(state => state.setEvents),
    setNewEvent: churrasStorePersist(state => state.setNewEvent),
    getEvent: churrasStorePersist(state => state.getEvent),
    setGuest: churrasStorePersist(state => state.setGuest),
    setNewGuest: churrasStorePersist(state => state.setNewGuest)
  }

  return storeEvents
}