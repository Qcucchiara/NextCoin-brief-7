'use client'
import { SectionAboutOurServices } from '@/components/sections/SectionAboutOurServices'
import { SectionAboutUs } from '@/components/sections/SectionAboutUs'
import { SectionCryptos } from '@/components/sections/SectionCryptos'
import { SectionFonctions } from '@/components/sections/SectionFonctions'
import { SectionJoinNow } from '@/components/sections/SectionJoinNow'
import { SectionLanding } from '@/components/sections/SectionLanding'
import { Header } from '@/components/sections/nav/Header'
import { getCryptos } from '@/services/cryptoAPI/crypto/getCryptos'
import { sortListHigh } from '@/utils/functions/sortList'
import { CryptoData } from '@/utils/types/cryptoTypes'
import { useEffect, useState } from 'react'

export default function Home() {
  const [cryptoList, setCryptoList] = useState<CryptoData[]>([])
  useEffect(() => {
    getCryptos().then((res: any) => {
      res &&
        sortListHigh(res?.data).then((res) => {
          setCryptoList(res)
        })
    })
  }, [])
  return (
    <>
      <Header />
      <main>
        <SectionLanding />
        {cryptoList && <SectionCryptos cryptoList={cryptoList} />}
        <SectionFonctions />
        <SectionAboutUs />
        <SectionAboutOurServices />
        <SectionJoinNow />
      </main>
    </>
  )
}
