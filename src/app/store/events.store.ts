import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { EventsSlice } from '@/app/types/events';
import listEvents from '@/mocks/events.json'
import { IChurras } from '../types/common';
import { ToastHelper } from '@/app/helper/toastsHelper';

const toast = ToastHelper();

export const churrasStorePersist = create(
  persist<EventsSlice>((set, get) => ({
    loading: false,
    events: listEvents,
    event: {
      id: 0,
      date: '',
      guest: [],
      title: ''
    },
    setNewEvent: (data) => {
      const { events } = get()
      const id = events.length ? events.slice(-1)[0].id + 1 : 1
      const newEvent: IChurras = {
        id,
        guest: [],
        ...data
      }

      if (!events.find(({ date, title }) => data.date === date && data.title === title)) {
        set({
          events: [...events, newEvent],
        })
      }
    },
    getEvent: (id) => {
      const { events } = get()
      set({
        event: events.filter(row => row.id === id)[0]
      })
    },
    setGuest: (name) => {
      const { event, events } = get()
      const indexEv = events.length && events.map(event => event.id).indexOf(event.id)
      const indexGs = event.guest && event.guest.map(guest => guest.name).indexOf(name)
      const eventsList = {...events}

      console.log(eventsList[indexEv].guest[indexGs].status)

      eventsList[indexEv].guest[indexGs].status = !eventsList[indexEv].guest[indexGs].status

      set({ event: eventsList[indexEv] ,events: eventsList })
    },
    setNewGuest: (data) => {
      const { event, events } = get()
      const indexEv = events.map(event => event.id).indexOf(event.id)
      const verName = event.guest.find(row => row.name === data.name)
      const guest = [...event.guest, data]
      const eventUp = {...event, guest}
      const eventsList = [...events, eventUp]
      
      delete eventsList[indexEv]
      
      if (!!!verName) {
        set({ event: eventUp, events: eventsList.flat() })
      }
    }
  }),
  {
    name: 'Events'
  }
))
