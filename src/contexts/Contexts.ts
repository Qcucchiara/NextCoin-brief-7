import { createContext } from 'react'

export const contextSetGraphCrypto = createContext<any>({
  cryptoIdToDisplay: '',
  setCryyptoIdToDisplay: () => {},
})

export const contextRefresh = createContext<any>({
  refresh: false,
  setRefresh: () => {},
})
