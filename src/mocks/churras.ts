import { IChurras } from "@/app/types/common";

export const churras: IChurras[] = [
  {
    id: 1,
    date: '07/12/2023',
    title: 'Niver da Laurinha',
    guest: [
      {
        status: true,
        name: 'Francisca',
        investment: 200.15
      },
      {
        status: true,
        name: 'Pedrinho',
        investment: 220
      },
      {
        status: true,
        name: 'João',
        investment: 150
      },
      {
        status: true,
        name: 'Maria',
        investment: 250
      },
      {
        status: false,
        name: 'Sandra',
        investment: 225
      },
      {
        status: true,
        name: 'Antonio',
        investment: 200
      },
    ]
  },
  {
    id: 2,
    date: '10/12/2023',
    title: 'HH da Maria',
    guest: [
      {
        status: false,
        name: 'Francisca',
        investment: 100
      },
      {
        status: false,
        name: 'Pedrinho',
        investment: 100
      },
      {
        status: false,
        name: 'João',
        investment: 100
      },
      {
        status: false,
        name: 'Laurinha',
        investment: 100
      },
      {
        status: false,
        name: 'Sandra',
        investment: 100
      },
      {
        status: false,
        name: 'Antonio',
        investment: 100
      },
    ]
  },
  {
    id: 3,
    date: '18/12/2023',
    title: 'HH da Firma',
    guest: [
      {
        status: true,
        name: 'Francisca',
        investment: 100
      },
      {
        status: false,
        name: 'Pedrinho',
        investment: 100
      },
      {
        status: false,
        name: 'João',
        investment: 100
      },
      {
        status: false,
        name: 'Laurinha',
        investment: 100
      },
      {
        status: false,
        name: 'Sandra',
        investment: 100
      },
      {
        status: false,
        name: 'Antonio',
        investment: 100
      },
      {
        status: false,
        name: 'Maria',
        investment: 100
      },
    ]
  },
]