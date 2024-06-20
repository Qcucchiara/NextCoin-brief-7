import { OfferInput } from '@/utils/types/formTypes'
import axios, { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

export async function createOffer(body: OfferInput) {
  console.log(body)
  const url = `${process.env.NEXT_PUBLIC_API_URL}offer/create`
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
    .post(url, data, axiosConfig)
    .then((res: any) => {
      res?.response && toast.error(res.response.data.message)
      return res
    })
    .catch((e) => {
      // throw new Error(e)        res?.response && toast.error(res.response.data.message)

      console.log(e)
    })
}
