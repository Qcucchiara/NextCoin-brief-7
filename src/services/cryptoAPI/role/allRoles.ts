import axios from 'axios'

export async function allRoles() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}role/all`
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
    .then((res) => {
      return res
    })
    .catch((e) => {
      // throw new Error(e)
      console.log(e)
    })
}
