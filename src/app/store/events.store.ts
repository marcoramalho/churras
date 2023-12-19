import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { EventsSlice } from '@/app/types/events';
import listEvents from '@/mocks/events.json'
import { IChurras } from '../types/common';
import { getArrIndex } from '../utils/handleData';

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
        })
      }

      setTimeout(() =>
        set({
          loading: false,
        })
      , 1500)
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
      set({
        loading: true,
      })

      const { details, events, setDetail, setEvents } = get()
      const eventsIndx = events.length && getArrIndex(details.id, events)
      const guestIndx = details.guest && getArrIndex(name, details.guest)
      const eventsList = [...events]

      eventsList[eventsIndx].guest[guestIndx].status = !eventsList[eventsIndx].guest[guestIndx].status

      setDetail(eventsList[eventsIndx])
      setEvents([...eventsList])

      setTimeout(() =>
        set({
          loading: false,
        })
      , 1500)
    },
    setNewGuest: (data) => {
      set({
        loading: true,
      })

      const { details, events, setDetail, setEvents } = get()
      const eventsIndx = getArrIndex(details.id, events)
      const hasName = details.guest.find(row => row.name === data.name)

      const guest = [...details.guest, data]
      const eventUp = {...details, guest}
      const eventsList = [...events, eventUp]
      
      delete eventsList[eventsIndx]
      
      if (!!!hasName) {
        setDetail(eventUp)
        setEvents(eventsList.flat())
      }

      setTimeout(() =>
        set({
          loading: false,
        })
      , 1500)
    },
    setRemoveGuest: (eventId, name) => {
      set({
        loading: true,
      })

      const { events } = get()

      const getItemToRemove = events.filter(({ id }) => id === eventId).pop()?.guest.find(row => row.name === name)

      console.log('remove guest', getItemToRemove)

      setTimeout(() =>
        set({
          loading: false,
        })
      , 1500)
    }
  }),
  {
    name: 'Events'
  }
))
