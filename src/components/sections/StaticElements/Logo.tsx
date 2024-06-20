import Image from 'next/image'
import React from 'react'

export const Logo = ({ className }: { className: string }) => {
  return (
    <div className={`${className}`}>
      <a href="https://flowbite.com" className="flex items-center">
        <Image src={'/NextCoin_logo.png'} alt={''} width={50} height={50} />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          NextCoin
        </span>
      </a>
    </div>
  )
}
