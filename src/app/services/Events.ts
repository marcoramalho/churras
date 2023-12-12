import { api } from "@/app/config"
import { Name, Guest, AddChurras } from "@/app/types/common";

export const EventDetail = async (id: number) => {
  try {
    const response = await api.get(`/events/${id}`)
    
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const AddNewEvent = async (data: AddChurras) => {
  try {
    const response = await api.post(
      `/events`,
      data
    )
    
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const HandleGuestStatus = async (id: number, name: string) => {
  const data: Name = { name }
  try {
    const response = await api.put(
      `/events/${id}`,
      data,
    )
    
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const AddNewGuest = async (data: Guest) => {
  try {
    const response = await api.put(
      `/events`,
      data,
    )
    
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
}