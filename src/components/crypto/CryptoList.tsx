'use client'
import React, { useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getCryptos } from '@/services/cryptoAPI/crypto/getCrypros'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { AspectRatio } from '../ui/aspect-ratio'

export const CryptoList = () => {
  const [crypto, setCrypto] = useState([])
  useEffect(() => {
    getCryptos().then((res: any) => {
      console.log(res.data)
      setCrypto(res.data)
      console.log(crypto)
    })
  }, [])
  return (
    <div className=" w-[500px]">
      <Table>
        <TableCaption>List of my cryptos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Currency</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crypto &&
            crypto.map((element: any) => {
              return (
                <TableRow>
                  <TableCell className="font-medium flex items-center">
                    <Avatar className=" mr-2">
                      <AvatarImage src={element.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span> {element.name}</span>
                  </TableCell>
                  <TableCell>
                    $ {Math.round(element.value * 100) / 100}
                  </TableCell>
                  <TableCell>{element.quantity}</TableCell>
                  <TableCell className="text-right">
                    <Link href={''}>
                      <Button />
                    </Link>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </div>
  )
}
