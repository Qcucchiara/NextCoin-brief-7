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
import { signup } from '@/services/cryptoAPI/auth/signup'
import { useRouter } from 'next/navigation'

export const Register = () => {
  const { push } = useRouter()
  const form = useForm<z.infer<typeof formRegister>>({
    mode: 'onChange',
    resolver: zodResolver(formRegister),
    defaultValues: {
      firstName: '',
      lastName: '',
      pseudo: '',
      city: '',
      email: '',
      password: '',
      confirmPassword: '',
      promoCode: '',
    },
  })
  function onSubmit(values: z.infer<typeof formRegister>) {
    console.log(values)
    signup(values).then((res: any) => {
      if (res && res.status === 201) {
        const userData = {
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
          email: res.data.user.email,
          pseudo: res.data.user.pseudo,
        }
        localStorage.setItem('token', res.data.access_token)
        // localStorage.setItem('userData', JSON.stringify(userData))
        localStorage.setItem(
          'userHasCrypto',
          JSON.stringify({
            values: res.data.user.UserHasCrypto,
            date: new Date(),
          })
        )
        push('/')
      } else {
        console.log({ error: res })
      }
    })
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
          <div className="flex float-end">
            <Button className="" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
