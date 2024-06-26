import axios from 'axios'

export async function updatePropoCode(params: string, body: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/update/${params}`
  const data = {
    name: body.name,
    value: body.value,
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
