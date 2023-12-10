import { Guest } from "../types/common";

const handleIntegerToDecimal = (value: number) =>
  (Math.round(value * 100) / 100).toFixed(2).replace('.', ',')
  

export const getBudget = (data: Guest[]) => {
  if (data.length === 0) return `R$ 0`
  let budget = 0
  data.map(({ investment }) => budget += investment)
  return `R$ ${handleIntegerToDecimal(budget)}`
}