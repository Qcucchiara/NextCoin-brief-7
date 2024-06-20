import { CryptoData } from '../types/cryptoTypes'

export async function sortListHigh(list: CryptoData[]) {
  const sortedList = []
  list.sort((a, b) => b.value - a.value)
  sortedList.push(...list)
  return sortedList
}

export async function sortListLow(list: CryptoData[]) {
  const sortedList = []
  list.sort((a, b) => a.value - b.value)
  sortedList.push(...list)
  return sortedList
}

export async function sortListAtoZ(list: CryptoData[]) {
  const sortedList = []
  list.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
  sortedList.push(...list)
  return sortedList
}

export async function sortListZtoA(list: CryptoData[]) {
  const sortedList = []
  list.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) return 1
    if (nameA > nameB) return -1
    return 0
  })
  sortedList.push(...list)
  return sortedList
}
