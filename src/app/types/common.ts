export type SignIn = {
  username: string
  password: string
}

export type AddChurras = {
  date: string
  title: string
}

export type IChurras = {
  id: number
  date: string
  title: string
  guest: Guest[]
}

export type Guest = {
  churrasId?: number
  status: boolean
  name: string
  investment: number | string
}

export type Name = {
  name: string
}