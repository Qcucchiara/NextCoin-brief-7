'use client'
import { SectionAboutOurServices } from '@/components/sections/SectionAboutOurServices'
import { SectionAboutUs } from '@/components/sections/SectionAboutUs'
import { SectionCryptos } from '@/components/sections/SectionCryptos'
import { SectionFonctions } from '@/components/sections/SectionFonctions'
import { SectionJoinNow } from '@/components/sections/SectionJoinNow'
import { SectionLanding } from '@/components/sections/SectionLanding'
import { getCryptos } from '@/services/cryptoAPI/crypto/getCryptos'
import { sortListHigh } from '@/utils/functions/sortList'
import { ResponseSuccess } from '@/utils/types/apiTypes'
import { CryptoData } from '@/utils/types/cryptoTypes'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [cryptoList, setCryptoList] = useState<CryptoData[]>([])
  useEffect(() => {
    getCryptos().then((res: AxiosResponse | void) => {
      sortListHigh(res?.data).then((res) => {
        setCryptoList(res)
      })
    })
  }, [])
  return (
    <main>
      <SectionLanding />
      <SectionCryptos cryptoList={cryptoList} />
      <SectionFonctions />
      <SectionAboutUs />
      <SectionAboutOurServices />
      <SectionJoinNow />
    </main>
  )
}
