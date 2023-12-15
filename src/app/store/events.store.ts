import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { EventsSlice } from '@/app/types/events';
import listEvents from '@/mocks/events.json'
import { IChurras } from '../types/common';

export const churrasStorePersist = create(
  persist<EventsSlice>((set, get) => ({
    loading: false,
    events: listEvents,
    details: {
      id: 0,
      date: '',
      guest: [],
      title: ''
    },
    setNewEvent: (data) => {
      set({
        loading: true,
      })
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
          loading: false,
        })
      }
    },
    setDetail: (data) => {
      set({
        details: data
      })
    },
    setGuest: (name) => {
      set({
        loading: true,
      })
      const { details, events } = get()
      const indexEv = events.length && events.map(event => event.id).indexOf(details.id)
      const indexGs = details.guest && details.guest.map(guest => guest.name).indexOf(name)
      const eventsList = [...events]

      eventsList[indexEv].guest[indexGs].status = !eventsList[indexEv].guest[indexGs].status

      set({
        details: eventsList[indexEv],
        events: eventsList,
        loading: false
      })
    },
    setNewGuest: (data) => {
      set({
        loading: true,
      })
      const { details, events } = get()
      const indexEv = events.map(event => event.id).indexOf(details.id)
      const verName = details.guest.find(row => row.name === data.name)
      const guest = [...details.guest, data]
      const eventUp = {...details, guest}
      const eventsList = [...events, eventUp]
      
      delete eventsList[indexEv]
      
      if (!!!verName) {
        set({
          details: eventUp, events: eventsList.flat(),
          loading: false,
        })
      }
    }
  }),
  {
    name: 'Events'
  }
))
