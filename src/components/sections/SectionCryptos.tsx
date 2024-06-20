'use client'
import { CryptoData } from '@/utils/types/cryptoTypes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import Image from 'next/image'

export const SectionCryptos = ({
  cryptoList,
}: {
  cryptoList: CryptoData[]
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Most traded cryptos
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {cryptoList.length > 0 &&
            cryptoList.slice(0, 6).map((element: CryptoData) => {
              return (
                <Link
                  className="flex flex-col justify-center items-center"
                  key={element.id}
                  href={`/crypto/${element.name}`}
                >
                  <div className=" flex justify-center items-center h-28 w-28 contain-content rounded-full">
                    <Image fill src={element.image} alt="@shadcn" />
                  </div>
                  <p>{element.name}</p>
                </Link>
              )
            })}
        </div>
      </div>
    </section>
  )
}
