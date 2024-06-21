import axios from 'axios'

export async function updateTrade(params: string, body: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}trade/update/${params}`
  const data = {
    id_giver: body.id_giver,
    id_receiver: body.id_receiver,
    id_crypto: body.id_crypto,
    amount_traded: body.amount_traded,
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
    .patch(url, data, axiosConfig)
    .then((res) => {
      return res
    })
    .catch((e) => {
      // throw new Error(e)
      console.log(e)
    })
}
