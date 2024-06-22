'use client'

import {
  DynamicList,
  DynamicListElement,
} from '@/components/crypto/Lists/DynamicList'
import { Header } from '@/components/sections/nav/Header'
import React from 'react'
const tableau = [
  {
    description: 'Produit électronique',
    prix: 299.99,
    enStock: true,
  },
  {
    description: 'Service de nettoyage',
    prix: 89.5,
    enStock: false,
  },
  {
    description: 'Billet de concert',
    prix: 75.0,
    enStock: true,
  },
  {
    description: 'Livre de science-fiction',
    prix: 15.99,
    enStock: true,
  },
  {
    description: 'Cours de yoga',
    prix: 30.0,
    enStock: false,
  },
  {
    description: 'Accès à une application',
    prix: 9.99,
    enStock: true,
  },
  {
    description: 'Abonnement à une revue',
    prix: 50.0,
    enStock: false,
  },
  {
    description: 'Cours en ligne',
    prix: 199.99,
    enStock: true,
  },
  {
    description: 'Produit électronique',
    prix: 299.99,
    enStock: true,
  },
  {
    description: 'Service de nettoyage',
    prix: 89.5,
    enStock: false,
  },
  {
    description: 'Billet de concert',
    prix: 75.0,
    enStock: true,
  },
  {
    description: 'Livre de science-fiction',
    prix: 15.99,
    enStock: true,
  },
  {
    description: 'Cours de yoga',
    prix: 30.0,
    enStock: false,
  },
  {
    description: 'Accès à une application',
    prix: 9.99,
    enStock: true,
  },
  {
    description: 'Abonnement à une revue',
    prix: 50.0,
    enStock: false,
  },
  {
    description: 'Cours en ligne',
    prix: 199.99,
    enStock: true,
  },
  {
    description: 'Produit électronique',
    prix: 299.99,
    enStock: true,
  },
  {
    description: 'Service de nettoyage',
    prix: 89.5,
    enStock: false,
  },
  {
    description: 'Billet de concert',
    prix: 75.0,
    enStock: true,
  },
  {
    description: 'Livre de science-fiction',
    prix: 15.99,
    enStock: true,
  },
  {
    description: 'Cours de yoga',
    prix: 30.0,
    enStock: false,
  },
  {
    description: 'Accès à une application',
    prix: 9.99,
    enStock: true,
  },
  {
    description: 'Abonnement à une revue',
    prix: 50.0,
    enStock: false,
  },
  {
    description: 'Cours en ligne',
    prix: 199.99,
    enStock: true,
  },
  {
    description: 'Produit électronique',
    prix: 299.99,
    enStock: true,
  },
  {
    description: 'Service de nettoyage',
    prix: 89.5,
    enStock: false,
  },
  {
    description: 'Billet de concert',
    prix: 75.0,
    enStock: true,
  },
  {
    description: 'Livre de science-fiction',
    prix: 15.99,
    enStock: true,
  },
  {
    description: 'Cours de yoga',
    prix: 30.0,
    enStock: false,
  },
  {
    description: 'Accès à une application',
    prix: 9.99,
    enStock: true,
  },
  {
    description: 'Abonnement à une revue',
    prix: 50.0,
    enStock: false,
  },
  {
    description: 'Cours en ligne',
    prix: 199.99,
    enStock: true,
  },
  {
    description: 'Produit électronique',
    prix: 299.99,
    enStock: true,
  },
  {
    description: 'Service de nettoyage',
    prix: 89.5,
    enStock: false,
  },
  {
    description: 'Billet de concert',
    prix: 75.0,
    enStock: true,
  },
  {
    description: 'Livre de science-fiction',
    prix: 15.99,
    enStock: true,
  },
  {
    description: 'Cours de yoga',
    prix: 30.0,
    enStock: false,
  },
  {
    description: 'Accès à une application',
    prix: 9.99,
    enStock: true,
  },
  {
    description: 'Abonnement à une revue',
    prix: 50.0,
    enStock: false,
  },
  {
    description: 'Cours en ligne',
    prix: 199.99,
    enStock: true,
  },
  {
    description: 'Produit électronique',
    prix: 299.99,
    enStock: true,
  },
  {
    description: 'Service de nettoyage',
    prix: 89.5,
    enStock: false,
  },
  {
    description: 'Billet de concert',
    prix: 75.0,
    enStock: true,
  },
  {
    description: 'Livre de science-fiction',
    prix: 15.99,
    enStock: true,
  },
  {
    description: 'Cours de yoga',
    prix: 30.0,
    enStock: false,
  },
  {
    description: 'Accès à une application',
    prix: 9.99,
    enStock: true,
  },
  {
    description: 'Abonnement à une revue',
    prix: 50.0,
    enStock: false,
  },
  {
    description: 'Cours en ligne',
    prix: 199.99,
    enStock: true,
  },
]

const page = () => {
  return (
    <>
      <Header />
      <DynamicList
        tableTitle={'Mes produits'}
        columns={[
          { title: 'description', className: ' text-black font-bold' },
          { title: 'prix' },
          { title: 'en stock' },
        ]}
        dataList={tableau}
        pagination={3}
      />
    </>
  )
}

export default page
