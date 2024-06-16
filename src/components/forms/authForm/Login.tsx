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
import { formLogin } from '@/validations/forms'

export const Login = () => {
  const form = useForm<z.infer<typeof formLogin>>({
    resolver: zodResolver(formLogin),
    defaultValues: {
      email: 'quentin.admin@crypto.to',
      password: 'password',
    },
  })
  function onSubmit(values: z.infer<typeof formLogin>) {
    console.log(values)
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
