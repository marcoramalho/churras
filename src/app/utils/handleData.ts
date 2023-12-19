import { Guest } from "../types/common";

export const handleIntegerToDecimal = (value: number) =>
  (Math.round(value * 100) / 100).toFixed(2).replace('.', ',')
  

export const getBudget = (data: Guest[]) => {
  if (data?.length === 0) return `R$ 0`
  let budget = 0
  data?.map(({ investment }) => budget += Number(investment))
  return `R$ ${handleIntegerToDecimal(budget)}`
}

export const getArrIndex = (ref: any, arr: any[]) => 
  typeof ref === 'string'
    ? arr.map(row => row.name).indexOf(ref)
    : arr.map(row => row.id).indexOf(ref)