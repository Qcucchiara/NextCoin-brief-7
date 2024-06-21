'use client'
import {
  BuyCryptoModal,
  SellCryptoModal,
} from '@/components/crypto/Modals/CryptoModals'
import { HistoryCrypto } from '@/components/crypto/HistoryCrypto'
import { MyAssets } from '@/components/dashboard/MyAssets'
import { Button } from '@/components/ui/button'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { contextSetGraphCrypto } from '@/contexts/Contexts'
import { buyCrypto } from '@/services/cryptoAPI/crypto/buyCrypto'
import { getMyAssets } from '@/services/cryptoAPI/user/getMyAssets'
import { ResponseSuccess } from '@/utils/types/apiTypes'
import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Blocks, Grid } from 'react-loader-spinner'
import { InfoOnCrypto } from '@/components/crypto/InfoOnCrypto'
import { NewOffer } from '@/components/forms/NewOffer'
import { dividerClasses } from '@mui/material'

const page = () => {
  const [myAssets, setMyAssets] = useState<any>()
  const [cryptoIdToDisplay, setCryyptoIdToDisplay] = useState<string>('')

  useEffect(() => {
    getMyAssets().then((res: AxiosResponse | void) => {
      res && setMyAssets(res.data)
    })
  }, [])
  return (
    <>
      <div>
        <h2>Welcome</h2>
      </div>
      <contextSetGraphCrypto.Provider
        value={{ cryptoIdToDisplay, setCryyptoIdToDisplay }}
      >
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-auto overflow-scroll rounded-lg border"
        >
          <ResizablePanel defaultSize={40} minSize={30}>
            <div className=" items-center justify-center p-6">
              {myAssets ? (
                <MyAssets myAssets={myAssets} />
              ) : (
                <div className="flex h-[300px] items-center justify-center p-6">
                  <Blocks
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                  />
                </div>
              )}
              {/* <span className="font-semibold">One</span> */}
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            {cryptoIdToDisplay ? (
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel minSize={45} maxSize={45}>
                  <div className="flex h-full items-center justify-center">
                    <span className="font-semibold">
                      <HistoryCrypto cryptoId={cryptoIdToDisplay} />
                    </span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={60}>
                  <div className="flex justify-end my-4 mx-10">
                    <BuyCryptoModal cryptoId={cryptoIdToDisplay} />
                    <SellCryptoModal cryptoId={cryptoIdToDisplay} />
                  </div>
                  <div className=" items-center justify-center p-6">
                    <NewOffer id_crypto={cryptoIdToDisplay} />
                    <InfoOnCrypto />
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            ) : (
              <p className=" font-bold justify-self-center">select a crypto</p>
            )}
          </ResizablePanel>
        </ResizablePanelGroup>
      </contextSetGraphCrypto.Provider>
    </>
  )
}

export default page
