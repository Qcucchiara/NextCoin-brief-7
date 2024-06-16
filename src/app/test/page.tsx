import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CryptoList } from '@/components/crypto/CryptoList'
import { Login } from '@/components/forms/authForm/Login'
import { Register } from '@/components/forms/authForm/Register'

const page = () => {
  return (
    <>
      {/* <CryptoList /> */}
      <Login />
      <Register />
      <hr />
      <hr />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default page
