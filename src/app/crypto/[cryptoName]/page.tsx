'use client'
import { CryptoList } from '@/components/crypto/CryptoList'
import {
  DynamicList,
  DynamicListElement,
} from '@/components/crypto/Lists/DynamicList'
import { SectionJoinNow } from '@/components/sections/SectionJoinNow'
import { Button } from '@/components/ui/button'
import { searchCrypto } from '@/services/cryptoAPI/crypto/searchCrypto'
import { offersOfCrypto } from '@/services/cryptoAPI/offer/offersOfCrypto'
import { CryptoData } from '@/utils/types/cryptoTypes'
import React, { useEffect, useState } from 'react'

const page = ({ params }: { params: { cryptoName: string } }) => {
  const [data, setData] = useState<CryptoData>()
  const [offers, setOffers] = useState([])
  const [formatedList, setFormatedList] = useState<any>([])

  useEffect(() => {
    !data &&
      searchCrypto(params.cryptoName).then((res) => {
        if (res?.data) {
          res.data.length ? setData(res.data[0]) : setData(res.data)
        }
      })
    data &&
      offersOfCrypto(data.id).then((res) => {
        if (res?.data) {
          res.data.map((element: any) => {
            const formatedListElement = {
              name: element.Crypto.name,
              value: element.Crypto.value,
              quantity: element.quantity,
              seller: element.User.pseudo,
            }
            setFormatedList([formatedListElement, ...formatedList])
          })
        }
      })
  }, [params.cryptoName, data, offers])
  return (
    <>
      <Button
        onClick={() => {
          console.log(offers)
        }}
      >
        console.log
      </Button>
      <div>{params.cryptoName}</div>
      {offers && (
        <DynamicList
          tableTitle={'Offers of Crypto'}
          columns={[
            { title: 'name' },
            { title: 'value' },
            { title: 'quantity' },
            { title: 'seller' },
          ]}
          dataList={formatedList}
        >
          <DynamicListElement dataList={formatedList} />
        </DynamicList>
      )}
    </>
  )
}

export default page
