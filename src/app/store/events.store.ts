import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { EventsSlice } from '@/app/types/events';
import listEvents from '@/mocks/events.json'
import { IChurras } from '../types/common';

const getIndex = (ref: any, arr: any[]) => 
  isNaN(ref)
    ? arr.map(row => row.name).indexOf(ref)
    : arr.map(row => row.id).indexOf(ref)

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
    setEvents: (data) => {
      set({
        events: [...data]
      })
    },
    setDetail: (data) => {
      set({
        details: data
      })
    },
    setGuest: (name) => {
      const { details, events, setDetail, setEvents } = get()
      const eventsIndx = events.length && getIndex(details.id, events)
      const guestIndx = details.guest && getIndex(name, details.guest)
      const eventsList = [...events]

      eventsList[eventsIndx].guest[guestIndx].status = !eventsList[eventsIndx].guest[guestIndx].status

      setDetail(eventsList[eventsIndx])
      setEvents([...eventsList])
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
