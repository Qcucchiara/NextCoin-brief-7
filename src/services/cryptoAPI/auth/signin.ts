import { ResponseFailed, ResponseSuccess } from '@/utils/types/apiTypes'
import { LoginInput } from '@/utils/types/formTypes'
import axios from 'axios'
import { UseFormSetError } from 'react-hook-form'

export async function signin(body: LoginInput) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`

  const data = {
    email: body.email,
    password: body.password,
  }

  const axiosConfig = {
    headers: {
      'content-type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }

  return axios
    .post(url, data, axiosConfig)
    .then((res: ResponseSuccess) => {
      localStorage.setItem('token', res.data.access_token)
      return res
    })
    .catch((e: ResponseFailed) => {
      // throw new Error(e)
      console.log(e)
    })
}
