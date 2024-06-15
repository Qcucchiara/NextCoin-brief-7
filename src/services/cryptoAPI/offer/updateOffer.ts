import { SearchCryptoType } from '@/utils/types'
import axios from 'axios'

export async function updateOffer(params: string, body: SearchCryptoType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}offer/update${params}`
  const data = {
    id_crypto: body.id_crypto,
    amount: body.amount,
  }
  const axiosConfig = {
    headers: {
      'content-type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .patch(url, data, axiosConfig)
    .then((res) => {
      return res
    })
    .catch((e) => {
      // throw new Error(e)
      console.log(e)
    })
}
