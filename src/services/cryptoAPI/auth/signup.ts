import { RegisterInput } from '@/utils/types'
import axios from 'axios'
import { UseFormSetError } from 'react-hook-form'

export async function signup(
  body: RegisterInput,
  setError: UseFormSetError<RegisterInput>
) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`

  const data = {
    firstName: body.firstName,
    lastName: body.lastName,
    age: 20,
    pseudo: body.pseudo,
    city: body.city,
    email: body.email,
    password: body.password,
    promoCode: body.promoCode,
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
      console.log('resultat', res)
      return res
    })
    .catch((e: any) => {
      // throw new Error(e)
      // console.log(e.response.data.message)
      setError('root', { type: 'manual', message: e.response.data.message })
    })
}
