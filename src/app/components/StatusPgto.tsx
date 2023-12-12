'use client'

interface StatusPgtoProps {
  status: boolean
  handleStatus: () => void
}

export default function StatusPgto ({ status, handleStatus }: StatusPgtoProps) {
  const showStatus = !status 
    ? "rounded-2xl w-5 h-5 border-2 border-[#E5C231]"
    : "rounded-2xl w-5 h-5 border-2 border-[#E5C231] bg-[#E5C231]"

  
  return (
    <button className={showStatus} onClick={handleStatus} />
  )
}