'use client'

import Image from 'next/image'

interface AddEventButtonProps {
  onClick: (value: boolean) => void
}

export default function AddEventButton({ onClick }: AddEventButtonProps) {
  const addChurras = () => onClick(true)
  return (
    <button className="bg-neutral-100 w-[240px] shadow-lg p-3 flex justify-center flex-col items-center h-[148px]" onClick={addChurras}>
      <div className="w-12 rounded-3xl p-3" style={{backgroundColor: '#FFD836'}}>
        <Image
          src="/icon_bbq.svg"
          alt="Criar novo churras"
          width={30}
          height={30}
          priority
        />
      </div>
      <div>Adicionar Churras</div>
    </button>
  )
}