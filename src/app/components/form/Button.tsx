interface ButtonProps {
  value: string;
  name?: string;
  type: 'submit' | 'button' | 'reset';
}

export default function Button({ value, name, type }: ButtonProps) {
  return (
    <div className="mt-5">
      <button type={type} name={name} className="bg-black rounded-lg py-2 px-10 text-white w-full">{value}</button>
    </div>
  )
}