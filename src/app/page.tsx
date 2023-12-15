'use client'

import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Button from "@/app/components/form/Button"
import { validationMessages } from "@/mocks/messages";
import { SignIn as ApiSignIn } from "@/app/services/SignIn";
import { SignIn as TypeSignIn } from "@/app/types/common";
import { yupResolver } from '@hookform/resolvers/yup';
import { Toaster, toast } from 'sonner'

const schema = Yup.object().shape({
  username: Yup.string()
    .required(validationMessages.required),
  password: Yup.string()
    .required(validationMessages.required)
})

export default function Home() {
  const router = useRouter()
  
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors }
  } = useForm<TypeSignIn>({ resolver: yupResolver(schema) });

  
  const handleFormData = () => {
    const { username, password } = getValues()

    ApiSignIn({username, password})
      .then(res => {
        if (res.length) {
          return router.push('/events')
        } else {
          return toast.error('Usuário ou senha incorretos')
        }
      })
  };
  return (
    <div>
      <div className="flex flex-col justify-center">
        <form onSubmit={handleSubmit(handleFormData)}>
          {/* TODO: CORRIGIR COMPONENTE */}
          <div className="mb-5">
            <div className="font-bold mb-2">Login</div>
            <div>
              <input
                type="text"
                placeholder="login"
                className="p-2"
                {...register("username")}
              />
            </div>
            {errors.username && <div className='mt-1 text-sm text-red-500 font-semibold'>{validationMessages.required}</div>}
          </div>
          <div className="mb-5">
            <div className="font-bold mb-2">Password</div>
            <div>
              <input
                type="password"
                placeholder="password"
                className="p-2"
                {...register("password")}
              />
            </div>
            {errors.password && <div className='mt-1 text-sm text-red-500 font-semibold'>{validationMessages.required}</div>}
          </div>
          {/* TODO: CORRIGIR COMPONENTE */}
          <Button type="submit" name="login">Entrar</Button>
        </form>
      </div>
    </div>
  )
}
