import React from 'react'
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
import { BuyCryptoModal } from './Modals/CryptoModals'
import { buyCrypto } from '@/services/cryptoAPI/crypto/buyCrypto'
import toast from 'react-hot-toast'

export const AllCryptoListElement = ({ element }: { element: any }) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium flex items-center">
          <Avatar className=" mr-2">
            <AvatarImage src={element.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span> {element.name}</span>
        </TableCell>
        <TableCell>$ {Math.round(element.value * 100) / 100}</TableCell>
        <TableCell>{element.quantity}</TableCell>
        <TableCell className="text-right ">
          <div
            id="desktop_list_buttons"
            className="flex justify-end max-[650px]:hidden"
          >
            {element.quantity !== 0 && (
              <Button
                asChild
                className="mr-6 w-24"
                onClick={() => {
                  buyCrypto({ id_crypto: element.id, amount: 1 }).then(
                    (res) => {
                      res?.status === 201
                        ? toast.success('Token bought')
                        : toast.error('could not buy')
                    }
                  )
                }}
              >
                <span>Buy one</span>
              </Button>
            )}
            {element.quantity !== 0 && <BuyCryptoModal cryptoId={element.id} />}
            <Button asChild className="w-22 mr-6">
              <Link href={`/crypto/${element.name}`}>
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
                  <Link href={''}>Buy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}
