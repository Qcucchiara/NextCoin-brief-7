'use client'
import { CryptoList } from '@/components/crypto/CryptoList'
import { SectionJoinNow } from '@/components/sections/SectionJoinNow'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { getOffers } from '@/services/cryptoAPI/offer/getOffers'
import { Offer } from '@/utils/types/cryptoTypes'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [token, setToken] = useState<string | null>('')
  const [offers, setOffers] = useState<Offer[]>()
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])
  useEffect(() => {
    getOffers().then((res) => {
      setOffers(res?.data)
    })
  }, [])
  return (
    <div className=" h-screen">
      {!token ? (
        <SectionJoinNow />
      ) : (
        <ResizablePanelGroup direction={'vertical'}>
          <>
            <h3 className=" font-bold text-center w-full text-lg">
              List Cryptos
            </h3>
            <ResizablePanel defaultSize={50}>
              <CryptoList myCryptos={null} offers={null} />
            </ResizablePanel>
          </>
          <ResizableHandle className=" z-50" withHandle={true} />
          <>
            <h3 className=" font-bold text-center w-full text-lg">
              List offers
            </h3>
            <ResizablePanel defaultSize={50}>
              {offers && <CryptoList myCryptos={null} offers={offers} />}
            </ResizablePanel>
          </>
        </ResizablePanelGroup>
      )}
    </div>
  )
}

export default page
