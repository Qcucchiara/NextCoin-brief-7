'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { formOffer } from '@/validations/forms'
import { createOffer } from '@/services/cryptoAPI/offer/createOffer'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { send } from 'process'
import toast from 'react-hot-toast'
import { AxiosResponse } from 'axios'

export const NewOffer = ({ id_crypto }: { id_crypto: string }) => {
  const [value, setValue] = useState(0)
  const [send, setSend] = useState(false)

  useEffect(() => {
    createOffer({ id_crypto: id_crypto, amount: value }).then((res: any) => {
      console.log({ id_crypto: id_crypto, amount: value })
      console.log(res)
      if (res && res.status === 201) {
        console.log(res)
        toast.success(res.statusText)
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
