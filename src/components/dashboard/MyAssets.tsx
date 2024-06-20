import { UserAssets } from '@/utils/types/cryptoTypes'
import React, { useEffect, useState } from 'react'
import { CryptoList } from '../crypto/CryptoList'
import { ScrollArea } from '../ui/scroll-area'

export const MyAssets = ({ myAssets }: { myAssets: UserAssets }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(0)
    setValue((prev) => prev + myAssets.dollarAvailables)
    myAssets.UserHasCrypto.map((element: any) => {
      setValue((prev) => element.Crypto.value * element.amount + prev)
    })
    setValue((prev) => Math.round(prev * 100) / 100)
  }, [])

  return (
    <div>
      <div>
        <p className=" font-bold text-xl">Estemeed assets: {value} $</p>
      </div>
      {/* <div className=" h-[200px] overflow-y-scroll"> */}
      <CryptoList myCryptos={myAssets.UserHasCrypto} offers={null} />
      {/* </div> */}
    </div>
  )
}
