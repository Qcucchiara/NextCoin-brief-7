'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { formRegister } from '@/validations/forms'

export const Register = () => {
  const form = useForm<z.infer<typeof formRegister>>({
    mode: 'onChange',
    resolver: zodResolver(formRegister),
    defaultValues: {
      firstName: 'Quentin',
      lastName: 'Cucchiara',
      pseudo: 'Kenkucch',
      city: 'Chambé',
      email: 'qcucchiara@gmail.com',
      password: 'aA12345@',
      confirmPassword: 'aA12345@',
      promoCode: 'azerty',
    },
  })
  function onSubmit(values: z.infer<typeof formRegister>) {
    console.log(values)
  }
  return (
    <div className=" m-2 w-[600px] mb-20">
      <h2 className=" font-bold text-xl text-center">Register</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className=" h-10">
                <div className=" flex items-center justify-between">
                  <FormLabel>First name</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className=" h-10">
                <div className=" flex items-center justify-between">
                  <FormLabel>Last name</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pseudo"
            render={({ field }) => (
              <FormItem className=" h-10">
                <div className=" flex items-center justify-between">
                  <FormLabel>Username</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="This will be your public name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className=" h-10">
                <div className=" flex items-center justify-between">
                  <FormLabel>City</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" h-10">
                <div className=" flex items-center justify-between">
                  <FormLabel>Email</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="placeholder@**.**"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className=" h-10">
                <div className=" flex items-center justify-between">
                  <FormLabel>password</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input type="password" placeholder="shadcn" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className=" h-10">
                <div className=" flex items-center justify-between">
                  <FormLabel>Confirm your password</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input type="password" placeholder="shadcn" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="promoCode"
            render={({ field }) => (
              <FormItem className=" h-10">
                <div className=" flex items-center justify-between">
                  <FormLabel>Promo code</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input type="text" placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Facultative field</FormDescription>
              </FormItem>
            )}
          />
          <Button className=" float-end" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
