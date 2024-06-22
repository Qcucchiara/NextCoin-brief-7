import { Login } from '@/components/forms/authForm/Login'
import { Header } from '@/components/sections/nav/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <div className="flex h-full justify-center my-40">
        <Login />
      </div>
    </>
  )
}

export default page
