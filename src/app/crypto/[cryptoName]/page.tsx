'use client'
import {
  DynamicList,
  DynamicListElement,
} from '@/components/crypto/Lists/DynamicList'
import { searchCrypto } from '@/services/cryptoAPI/crypto/searchCrypto'
import { offersOfCrypto } from '@/services/cryptoAPI/offer/offersOfCrypto'
import { CryptoData } from '@/utils/types/cryptoTypes'
import React, { useEffect, useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import Image from 'next/image'
import { HistoryCrypto } from '@/components/crypto/HistoryCrypto'
import { Header } from '@/components/sections/nav/Header'

const page = ({ params }: { params: { cryptoName: string } }) => {
  const [data, setData] = useState<CryptoData | undefined>()
  const [formatedList, setFormatedList] = useState<any[]>([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    if (!data) {
      searchCrypto(params.cryptoName).then((res) => {
        if (res?.data) {
          setData(res.data.length ? res.data[0] : res.data)
        }
      })
    }

    if (data) {
      offersOfCrypto(data.id).then((res) => {
        if (res?.data) {
          const updatedFormatedList = res.data.map((element: any) => ({
            // name: element.Crypto.name,
            // value: element.Crypto.value,
            quantity: element.amount,
            seller: element.User.pseudo,
            date: new Date(element.created_at).toLocaleDateString(),
          }))
          setFormatedList(updatedFormatedList)
        }
      })
    }

    setRefresh(false)
  }, [params.cryptoName, data, refresh])

  return (
    <>
      <Header />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={50}>
          {data && (
            <div className=" flex flex-col">
              <Image
                className=" rounded-full"
                width={200}
                height={200}
                src={data.image}
                alt={'image of ' + data.name}
              />
              <div className="flex h-full items-center justify-center">
                <span className="font-semibold">
                  <HistoryCrypto cryptoId={data.id} />
                </span>
              </div>
            </div>
          )}
        </ResizablePanel>

        {
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={35} minSize={25}>
              <DynamicList
                tableTitle={'Offers of Crypto'}
                columns={[
                  // { title: 'name' },
                  // { title: 'value' },
                  { title: 'quantity' },
                  { title: 'seller' },
                  { title: 'date' },
                ]}
                dataList={formatedList}
              >
                <DynamicListElement dataList={formatedList} />
              </DynamicList>
            </ResizablePanel>
          </>
        }
      </ResizablePanelGroup>

      <div>{params.cryptoName}</div>
    </>
  )
}

export default page
