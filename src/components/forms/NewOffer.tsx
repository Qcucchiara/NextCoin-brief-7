'use client'
import React, { useEffect, useState } from 'react'

import { createOffer } from '@/services/cryptoAPI/offer/createOffer'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'

export const NewOffer = ({ id_crypto }: { id_crypto: string }) => {
  const [value, setValue] = useState(0)
  const [send, setSend] = useState(false)

  useEffect(() => {
    value &&
      createOffer({ id_crypto: id_crypto, amount: value }).then((res: any) => {
        if (res && res.status === 201) {
          toast.success(res.statusText)
        }
        if (res && res.response?.status === 418) {
          toast.error(`I'm a Teapot`)
        }
      })
    setSend(false)
  }, [send])

  return (
    <div className=" m-2 w-[600px] mb-20">
      <div className=" w-full flex gap-4 items-center space-y-8">
        <h4 className="font-bold text-l">Amount: </h4>
        <Input
          className=" w-24"
          type="number"
          onChange={(e) => {
            setValue(e.target.valueAsNumber)
          }}
        />
        <div className=" flex items-center justify-between">
          {/* <FormLabel>amount</FormLabel> */}
        </div>

        <Button
          onClick={() => {
            setSend(true)
          }}
        >
          New offer
        </Button>
      </div>
    </div>
  )
}
