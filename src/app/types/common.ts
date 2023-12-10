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
  name: string
  investment: number
}
