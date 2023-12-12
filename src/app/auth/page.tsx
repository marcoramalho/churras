'use client'

import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Button from "@/app/components/form/Button"
import { validationMessages } from "@/mocks/messages";
import { SignIn as ApiSignIn } from "@/app/services/SignIn";
import { SignIn as TypeSignIn } from "@/app/types/common";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  username: Yup.string()
    .required(validationMessages.required),
  password: Yup.string()
    .required(validationMessages.required)
})

export default function SignIn() {

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
      .then(res => res.length && router.push('/events'))
  };
  return (
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
          {errors.username && <div className='text-red-500'>{validationMessages.required}</div>}
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
          {errors.password && <div className='text-red-500'>{validationMessages.required}</div>}
        </div>
        {/* TODO: CORRIGIR COMPONENTE */}
        <Button type="submit" name="login">Entrar</Button>
      </form>
    </div>
  )
}
