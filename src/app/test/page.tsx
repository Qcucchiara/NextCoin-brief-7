'use client'

import {
  DynamicList,
  DynamicListElement,
} from '@/components/crypto/Lists/DynamicList'
import { Header } from '@/components/sections/nav/Header'
import { getCryptos } from '@/services/cryptoAPI/crypto/getCryptos'
import { CryptoData } from '@/utils/types/cryptoTypes'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [cryptoList, setCryptoList] = useState<CryptoData[]>([])
  useEffect(() => {
    getCryptos().then((res: any) => {
      if (res?.data) {
        const updatedFormatedList = res.data.map((element: any) => ({
          name: element.name,
          value: `${Math.round(element.value * 100) / 100} $`,
          quantity: element.quantity,
          //  seller: element.User.pseudo,
          //  date: new Date(element.created_at).toLocaleDateString(),
        }))
        setCryptoList(updatedFormatedList)
      }
    })
  }, [])
  return (
    <>
      <Header />
      <DynamicList
        tableTitle={'Mes produits'}
        columns={[
          { title: 'name', className: ' text-black font-bold' },
          { title: 'value' },
          { title: 'quantity', className: ' text-black' },
        ]}
        dataList={cryptoList}
        pagination={10}
      />
    </>
  )
}

// const tableau = [
//   {
//     description: 'Produit électronique',
//     prix: 299.99,
//     enStock: true,
//   },
//   {
//     description: 'Service de nettoyage',
//     prix: 89.5,
//     enStock: false,
//   },
//   {
//     description: 'Billet de concert',
//     prix: 75.0,
//     enStock: true,
//   },
//   {
//     description: 'Livre de science-fiction',
//     prix: 15.99,
//     enStock: true,
//   },
//   {
//     description: 'Cours de yoga',
//     prix: 30.0,
//     enStock: false,
//   },
//   {
//     description: 'Accès à une application',
//     prix: 9.99,
//     enStock: true,
//   },
//   {
//     description: 'Abonnement à une revue',
//     prix: 50.0,
//     enStock: false,
//   },
//   {
//     description: 'Cours en ligne',
//     prix: 199.99,
//     enStock: true,
//   },
//   {
//     description: 'Produit électronique',
//     prix: 299.99,
//     enStock: true,
//   },
//   {
//     description: 'Service de nettoyage',
//     prix: 89.5,
//     enStock: false,
//   },
//   {
//     description: 'Billet de concert',
//     prix: 75.0,
//     enStock: true,
//   },
//   {
//     description: 'Livre de science-fiction',
//     prix: 15.99,
//     enStock: true,
//   },
//   {
//     description: 'Cours de yoga',
//     prix: 30.0,
//     enStock: false,
//   },
//   {
//     description: 'Accès à une application',
//     prix: 9.99,
//     enStock: true,
//   },
//   {
//     description: 'Abonnement à une revue',
//     prix: 50.0,
//     enStock: false,
//   },
//   {
//     description: 'Cours en ligne',
//     prix: 199.99,
//     enStock: true,
//   },
//   {
//     description: 'Produit électronique',
//     prix: 299.99,
//     enStock: true,
//   },
//   {
//     description: 'Service de nettoyage',
//     prix: 89.5,
//     enStock: false,
//   },
//   {
//     description: 'Billet de concert',
//     prix: 75.0,
//     enStock: true,
//   },
//   {
//     description: 'Livre de science-fiction',
//     prix: 15.99,
//     enStock: true,
//   },
//   {
//     description: 'Cours de yoga',
//     prix: 30.0,
//     enStock: false,
//   },
//   {
//     description: 'Accès à une application',
//     prix: 9.99,
//     enStock: true,
//   },
//   {
//     description: 'Abonnement à une revue',
//     prix: 50.0,
//     enStock: false,
//   },
//   {
//     description: 'Cours en ligne',
//     prix: 199.99,
//     enStock: true,
//   },
//   {
//     description: 'Produit électronique',
//     prix: 299.99,
//     enStock: true,
//   },
//   {
//     description: 'Service de nettoyage',
//     prix: 89.5,
//     enStock: false,
//   },
//   {
//     description: 'Billet de concert',
//     prix: 75.0,
//     enStock: true,
//   },
//   {
//     description: 'Livre de science-fiction',
//     prix: 15.99,
//     enStock: true,
//   },
//   {
//     description: 'Cours de yoga',
//     prix: 30.0,
//     enStock: false,
//   },
//   {
//     description: 'Accès à une application',
//     prix: 9.99,
//     enStock: true,
//   },
//   {
//     description: 'Abonnement à une revue',
//     prix: 50.0,
//     enStock: false,
//   },
//   {
//     description: 'Cours en ligne',
//     prix: 199.99,
//     enStock: true,
//   },
//   {
//     description: 'Produit électronique',
//     prix: 299.99,
//     enStock: true,
//   },
//   {
//     description: 'Service de nettoyage',
//     prix: 89.5,
//     enStock: false,
//   },
//   {
//     description: 'Billet de concert',
//     prix: 75.0,
//     enStock: true,
//   },
//   {
//     description: 'Livre de science-fiction',
//     prix: 15.99,
//     enStock: true,
//   },
//   {
//     description: 'Cours de yoga',
//     prix: 30.0,
//     enStock: false,
//   },
//   {
//     description: 'Accès à une application',
//     prix: 9.99,
//     enStock: true,
//   },
//   {
//     description: 'Abonnement à une revue',
//     prix: 50.0,
//     enStock: false,
//   },
//   {
//     description: 'Cours en ligne',
//     prix: 199.99,
//     enStock: true,
//   },
//   {
//     description: 'Produit électronique',
//     prix: 299.99,
//     enStock: true,
//   },
//   {
//     description: 'Service de nettoyage',
//     prix: 89.5,
//     enStock: false,
//   },
//   {
//     description: 'Billet de concert',
//     prix: 75.0,
//     enStock: true,
//   },
//   {
//     description: 'Livre de science-fiction',
//     prix: 15.99,
//     enStock: true,
//   },
//   {
//     description: 'Cours de yoga',
//     prix: 30.0,
//     enStock: false,
//   },
//   {
//     description: 'Accès à une application',
//     prix: 9.99,
//     enStock: true,
//   },
//   {
//     description: 'Abonnement à une revue',
//     prix: 50.0,
//     enStock: false,
//   },
//   {
//     description: 'Cours en ligne',
//     prix: 199.99,
//     enStock: true,
//   },
// ]
export default page
