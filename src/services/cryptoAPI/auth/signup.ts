import { ResponseFailed, ResponseSuccess } from '@/utils/types/apiTypes'
import { RegisterInput } from '@/utils/types/formTypes'
import axios, { AxiosResponse } from 'axios'
import { UseFormSetError } from 'react-hook-form'

export async function signup(body: RegisterInput) {
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
    .then((res: AxiosResponse) => {
      const data = res.data
      console.log('resultat', res)
      return res
    })
    .catch((e: ResponseFailed) => {
      // throw new Error(e)
      console.log(e)
    })
}
