'use client'
import React, { useEffect, useState } from 'react'
import { Logo } from '../StaticElements/Logo'
import Link from 'next/link'
import { Button } from '../../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const Header = () => {
  const [refresh, setRefresh] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (!isLoggedIn && localStorage.getItem('token')) {
      setIsLoggedIn(true)
    }
    if (!isAdmin && localStorage.getItem('userData')) {
      setIsAdmin(true)
    }
    setRefresh(false)
  }, [refresh])
  return (
    <header className=" sticky top-0 bg-white z-50">
      <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Logo className="" />
          <div className="flex gap-4 items-center md:order-2">
            {!isLoggedIn ? (
              <div className="flex gap-4">
                <Button
                  variant={'outline'}
                  asChild
                  onClick={() => {
                    setRefresh(true)
                  }}
                >
                  <Link href="/login">Log in</Link>
                </Button>
                <Button
                  asChild
                  onClick={() => {
                    setRefresh(true)
                  }}
                >
                  <Link href={'/register'}>Get started</Link>
                </Button>
              </div>
            ) : (
              <Button
                asChild
                onClick={() => {
                  localStorage.removeItem('token')
                  setRefresh(true)
                }}
              >
                <Link href={'/'}>Log out</Link>
              </Button>
            )}

            <div className=" md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      className="hidden w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-52">
                  <Link href={'/'} className=" font-bold">
                    <DropdownMenuItem>Home</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <Link href={'/dashboard'}>
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                  <Link href={'/marketplace'}>
                    <DropdownMenuItem>Marketplace</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
