'use client'

import { validationMessages } from "@/mocks/messages";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "@/app/components/form/Button";
import { useStore } from "@/app/store";

type GuestForm = {
  name: string
  investment: string
}

interface AddGuestProps {
  id: number
  onClose: (value: boolean) => void
}

const schema = Yup.object().shape({
  name: Yup.string()
    .required(validationMessages.required),
  investment: Yup.string()
    .required(validationMessages.required)
})

export default function AddGuest ({ id, onClose }: AddGuestProps) {
  const { setNewGuest } = useStore()

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors }
  } = useForm<GuestForm>({ resolver: yupResolver(schema) });

  const handleFormData = () => {
    const { name, investment } = getValues()

    setNewGuest({ 
      status: false,
      name,
      investment: Number(investment)
     })
     handleClose()
  };

  const handleClose = () => {
    onClose(false)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleFormData)}>
      <div className="flex justify-between">
        <div className="mb-5">
          <div className="font-bold mb-2">Nome</div>
          <div>
            <input
              type="text"
              placeholder="nome"
              className="p-2"
              {...register("name")}
            />
          </div>
          {errors.name && <div className='text-red-500'>{validationMessages.required}</div>}
        </div>
        <div className="mb-5">
          <div className="font-bold mb-2">Investimento</div>
          <div>
            <input
              type="number"
              placeholder="0,00"
              className="p-2"
              {...register("investment")}
            />
          </div>
          {errors.investment && <div className='text-red-500'>{validationMessages.required}</div>}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="mr-4"><Button type="button" name="close" onClick={handleClose}>Fechar</Button></div>
        <div><Button type="submit" name="add">Incluir</Button></div>
      </div>
    </form>
  )
}