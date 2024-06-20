import { createContext } from 'react'

export const contextSetGraphCrypto = createContext<any>({
  cryptoIdToDisplay: '',
  setCryyptoIdToDisplay: () => {},
})

export const ContexteDynamicListContent = createContext<any>(null)
