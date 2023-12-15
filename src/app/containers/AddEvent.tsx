'use client'

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "@/app/components/form/Button";
import { useStore } from "@/app/store";
import { validationMessages } from "@/mocks/messages";

type EventForm = {
  date: string
  title: string
}

interface AddEventProps {
  onClose: (value: boolean) => void
}

const schema = Yup.object().shape({
  date: Yup.string()
    .required(validationMessages.required),
  title: Yup.string()
    .required(validationMessages.required)
})

export default function AddEvent ({ onClose }: AddEventProps) {
  const { setNewEvent } = useStore()

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors }
  } = useForm<EventForm>({ resolver: yupResolver(schema) });

  const handleFormData = () => {
    const data = getValues()

    setNewEvent(data)
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
          <div className="font-bold mb-2">Data</div>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="dd/mm/aaaa"
              className="p-2"
              {...register("date")}
            />
          </div>
          {errors.date && <div className='text-red-500'>{validationMessages.required}</div>}
        </div>
        <div className="mb-5">
          <div className="font-bold mb-2">Título</div>
          <div>
            <input
              type="text"
              placeholder="título"
              className="p-2"
              {...register("title")}
            />
          </div>
          {errors.title && <div className='text-red-500'>{validationMessages.required}</div>}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="mr-4"><Button type="button" name="close" onClick={handleClose}>Fechar</Button></div>
        <div><Button type="submit" name="add">Incluir</Button></div>
      </div>
    </form>
  )
}