import React, { useContext, useEffect, useState } from 'react'
import { TableCell, TableRow } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { CryptoData, MyCryptoData } from '@/utils/types/cryptoTypes'
import { contextSetGraphCrypto } from '@/contexts/Contexts'

export const MyCryptoListElement = ({ element }: { element: MyCryptoData }) => {
  const [createNewOffer, setCreateNewOffer] = useState<boolean>(false)
  const { setCryyptoIdToDisplay } = useContext(contextSetGraphCrypto)
  // useEffect(() => {
  //   createOffer({ id_crypto: element.Crypto.id, amount: amountForOffer }).then(
  //     (res) => {
  //       console.log(res)
  //     }
  //   )
  // }, [createNewOffer])
  return (
    <TableRow
      onClick={() => {
        setCryyptoIdToDisplay(element.Crypto.id)
      }}
    >
      <TableCell className="font-medium flex items-center max-[650px]:ml-6">
        <Avatar className=" mr-2">
          <AvatarImage src={element.Crypto.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span> {element.Crypto.name}</span>
      </TableCell>
      <TableCell>$ {Math.round(element.Crypto.value * 100) / 100}</TableCell>
      <TableCell>{element.amount}</TableCell>
      <TableCell className="text-right ">
        <div id="desktop_list_buttons" className=" min-[650px]:hidden">
          {element.Crypto.quantity !== 0 && (
            <Button asChild className="mr-6 w-24">
              <Link href={''}>
                <span>Buy</span>
              </Link>
            </Button>
          )}
          <Button asChild className=" mr-6 w-22">
            <Link href={`/crypto/${element.Crypto.name}`}>
              <span>Sell</span>
            </Link>
          </Button>
          <Button
            asChild
            className="w-22"
            onClick={() => {
              // setCreateNewOffer(true).then(()=>{
              // })
            }}
          >
            <Link href={`/crypto/${element.Crypto.name}`}>
              <span>Create offer</span>
            </Link>
          </Button>
        </div>
        <div className=" max-[650px]:hidden">
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
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={''}>Buy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={''}>sell</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={''}>Create offer</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  )
}
