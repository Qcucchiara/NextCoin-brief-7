import axios from 'axios'
import toast from 'react-hot-toast'

export async function createTrade(body: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}trade/create`
  const data = {
    id_offer: body.id_offer,
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
      e.response.status === 418
        ? toast.error(`I'm a Teapot`)
        : toast.error('unexpected error')
      console.log(e)
    })
}
