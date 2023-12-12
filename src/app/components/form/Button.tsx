import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<'button'>

export default function Button(props: ButtonProps) {
  return (
    <div className="mt-5">
      <button className="bg-black rounded-lg py-2 px-10 text-white w-full hover:bg-gray-900" {...props} />
    </div>
  )
}