'use client'
import React, { useEffect, useRef, useState } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { getCryptos } from '@/services/cryptoAPI/crypto/getCryptos'
import { AllCryptoListElement } from './AllCryptoListElement'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { CryptoData, MyCryptoData, Offer } from '@/utils/types/cryptoTypes'
import {
  sortListAtoZ,
  sortListHigh,
  sortListLow,
  sortListZtoA,
} from '@/utils/functions/sortList'
import { Input } from '../ui/input'
import { MyCryptoListElement } from './MyCryptoListElement'
import { ResponseFailed, ResponseSuccess } from '@/utils/types/apiTypes'
import { AxiosResponse } from 'axios'
import { ScrollArea } from '../ui/scroll-area'
import { OfferElement } from './OfferElement'

export const CryptoList = ({
  myCryptos,
  offers,
}: {
  myCryptos: MyCryptoData[] | null
  offers: Offer[] | null
}) => {
  const [crypto, setCrypto] = useState<CryptoData[]>([])
  const [myListCrypto, setMyListCrypto] = useState<MyCryptoData[]>([])
  const [listOffers, setListOffers] = useState<Offer[]>([])

  // const sortHigh = useRef()
  // const sortLow = useRef()
  useEffect(() => {
    !myCryptos &&
      !offers &&
      getCryptos().then((res: AxiosResponse | void) => {
        setCrypto(res?.data)
      })
    offers && setListOffers(offers)
    myCryptos && setMyListCrypto(myCryptos)
  }, [])

  return (
    <>
      <Table className=" relative">
        <ScrollArea className=" w-auto h-[500px]">
          <TableCaption>
            {myCryptos ? 'My Crypto' : offers ? 'All offers' : 'All crypto'}
          </TableCaption>
          <TableHeader className=" sticky top-0 bg-white z-40">
            <TableRow>
              <TableHead>
                <DropdownMenu>
                  <DropdownMenuTrigger className=" flex justify-center">
                    Currency
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => {
                        crypto &&
                          sortListAtoZ(crypto).then((res) => {
                            setCrypto(res)
                          })
                      }}
                    >
                      <span>A =&gt; Z</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        sortListZtoA(crypto).then((res) => {
                          setCrypto(res)
                        })
                      }}
                    >
                      <span>Z =&gt; A</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableHead>
              <TableHead>
                <DropdownMenu>
                  <DropdownMenuTrigger>Value</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Sort by value</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        sortListHigh(crypto).then((res) => {
                          setCrypto(res)
                        })
                      }}
                    >
                      <span>Higher</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        sortListLow(crypto).then((res) => {
                          setCrypto(res)
                        })
                      }}
                    >
                      <div>Lower</div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className=" pr-10 text-end">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {crypto && myCryptos
              ? myCryptos.map((element: MyCryptoData) => {
                  return (
                    <MyCryptoListElement key={element.id} element={element} />
                  )
                })
              : !offers &&
                crypto.map((element: CryptoData) => {
                  return (
                    <AllCryptoListElement key={element.id} element={element} />
                  )
                })}
            {offers &&
              offers.map((element: Offer) => {
                return <OfferElement key={element.id} element={element} />
              })}
          </TableBody>
        </ScrollArea>
      </Table>
    </>
  )
}
