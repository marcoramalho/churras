import { api } from "@/app/config"
import { SignIn as TypeSignIn } from '@/app/types/common'

export const SignIn = async (data: TypeSignIn) => {
  try {
    const response = await api.post(
      "/signIn",
      data
    )
    
    response?.data?.length && localStorage.setItem('signIn', response?.data[0]?.username)
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
}