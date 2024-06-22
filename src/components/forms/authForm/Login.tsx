'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { formLogin } from '@/validations/forms'
import { signin } from '@/services/cryptoAPI/auth/signin'
import { AuthData } from '@/utils/types/cryptoTypes'
import { useRouter } from 'next/navigation'

export const Login = () => {
  const { push } = useRouter()
  const form = useForm<z.infer<typeof formLogin>>({
    resolver: zodResolver(formLogin),
    defaultValues: {
      email: `${
        process.env.NEXT_PUBLIC_LOGIN_EMAIL
          ? process.env.NEXT_PUBLIC_LOGIN_EMAIL
          : ''
      }`,
      password: `${
        process.env.NEXT_PUBLIC_LOGIN_PASSWORD
          ? process.env.NEXT_PUBLIC_LOGIN_PASSWORD
          : ''
      }`,
    },
  })
  function onSubmit(values: z.infer<typeof formLogin>) {
    signin(values).then((res: { data: AuthData; status: number } | void) => {
      console.log(res)
      if (res && res.status === 200) {
        const userData = {
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
          email: res.data.user.email,
          roleName: res.data.user.Role.name,
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
        push('/dashboard')
      } else {
        console.log({ error: res })
      }
    })
  }
  return (
    <div className=" m-2 w-[600px] mb-20">
      <h2 className=" font-bold text-xl text-center">Login</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    autoComplete="email"
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
          <Button className=" float-end" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
