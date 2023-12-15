import ReactLoading from 'react-loading';
import { LoadingTypes } from "../types/common"

interface LoadingProps {
  type?: LoadingTypes
  color?: string
  open: boolean
}

export default function Loading ({ type = 'spin', color = '#FFFFFF', open }: LoadingProps) {
  return (
    <div
      data-open={open}
      className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 data-[open=false]:hidden"
    >
      <ReactLoading type={type} color={color} />
    </div>
  )
}