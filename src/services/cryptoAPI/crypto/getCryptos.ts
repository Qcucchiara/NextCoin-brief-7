import axios, { AxiosResponse } from 'axios'

export async function getCryptos() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`
  const axiosConfig = {
    headers: {
      'content-type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .get(url, axiosConfig)
    .then((res: AxiosResponse) => {
      return res
    })
    .catch((e) => {
      // throw new Error(e)
      console.log(e)
    })
}
