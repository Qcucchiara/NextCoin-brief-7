import axios from 'axios'

export async function getPromoCodes() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/all`
  const axiosConfig = {
    headers: {
      'content-type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios.get(url, axiosConfig)
}
