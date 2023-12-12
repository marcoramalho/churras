import { ReactNode } from "react"

interface DialogProps {
  title: string
  children: ReactNode
  open: boolean
}

export default function Dialog ({ title, children, open }: DialogProps) {
  return (
    <div
      data-open={open}
      className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 data-[open=false]:hidden"
    >
      <div className="bg-[#FFD836] rounded shadow-lg w-1/3">
        <div className="border-b rounded-t px-4 py-2 font-bold">{title}</div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  )
}