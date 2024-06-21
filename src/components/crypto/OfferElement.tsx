import React, { useState } from 'react'
import { TableCell, TableRow } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { CryptoData, Offer } from '@/utils/types/cryptoTypes'
import { BuyCryptoModal } from './Modals/CryptoModals'
import { createTrade } from '@/services/cryptoAPI/trade/createTrade'
import toast from 'react-hot-toast'

export const OfferElement = ({ element }: { element: Offer }) => {
  return (
    <TableRow>
      <TableCell className="font-medium flex items-center max-[650px]:ml-6">
        <Avatar className=" mr-2">
          <AvatarImage src={element.Crypto.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span> {element.Crypto.name}</span>
      </TableCell>
      <TableCell>$ {Math.round(element.Crypto.value * 100) / 100}</TableCell>
      <TableCell>{element.amount}</TableCell>
      <TableCell className="text-right relative">
        <div
          id="desktop_list_buttons"
          className="flex justify-end max-[650px]:hidden"
        >
          <Button
            onClick={() => {
              createTrade({ id_offer: element.id }).then((res: any) => {
                res?.status === 201 && toast.success('Trade successfull')
              })
            }}
            asChild
            className="mr-6 w-24"
          >
            <span>Trade</span>
          </Button>
          <Button asChild className="w-22 mr-6">
            <Link href={`/crypto/${element.Crypto.name}`}>
              <span>See more</span>
            </Link>
          </Button>
        </div>
        <div className=" min-[650px]:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={'link'} asChild>
                <span className="  font-bold text-xl">...</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={''}>See more</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={''}>Trade</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  )
}
