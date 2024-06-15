import { NewCryptoType } from '@/utils/types'
import axios from 'axios'

export async function createCrypto(body: NewCryptoType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`
  const data = {
    name: body.name,
    value: body.value,
    quantity: body.quantity,
    image: body.image,
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
    .post(url, data, axiosConfig)
    .then((res) => {
      return res
    })
    .catch((e) => {
      // throw new Error(e)
      console.log(e)
    })
}
