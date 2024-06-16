import { LoginInput } from '@/utils/types/formTypes'
import axios from 'axios'
import { UseFormSetError } from 'react-hook-form'

export async function signin(
  body: LoginInput,
  setError: UseFormSetError<LoginInput>
) {
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
    .then((res) => {
      localStorage.setItem('token', res.data.access_token)
      return res
    })
    .catch((e) => {
      // throw new Error(e)
      console.log(e)
      setError('root', {
        type: 'manual',
        message: e.response.data.message,
      })
    })
}
