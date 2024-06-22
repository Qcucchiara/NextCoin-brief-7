import { Login } from '@/components/forms/authForm/Login'
import { Register } from '@/components/forms/authForm/Register'
import { Header } from '@/components/sections/nav/Header'
import React, { useState } from 'react'

const page = () => {
  return (
    <>
      <Header />
      <div className=" flex items-center justify-center">
        <Register />
      </div>
    </>
  )
}

export default page
