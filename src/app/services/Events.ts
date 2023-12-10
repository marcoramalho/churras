import { api } from "@/app/config"

export const EventDetail = async (id: number) => {
  try {
    const response = await api.get(`/events/${id}`)
    
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
}