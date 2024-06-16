import { Footer } from '@/components/Footer'
import { Header } from '@/components/nav/Header'
import { SectionAboutOurServices } from '@/components/sections/SectionAboutOurServices'
import { SectionAboutUs } from '@/components/sections/SectionAboutUs'
import { SectionCryptos } from '@/components/sections/SectionCryptos'
import { SectionFonctions } from '@/components/sections/SectionFonctions'
import { SectionJoinNow } from '@/components/sections/SectionJoinNow'
import { SectionLanding } from '@/components/sections/SectionLanding'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionLanding />
        <SectionCryptos />
        <SectionFonctions />
        <SectionAboutUs />
        <SectionAboutOurServices />
        <SectionJoinNow />
      </main>
      <Footer />
    </>
  )
}
