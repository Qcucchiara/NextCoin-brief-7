import { Role, UserHasCrypto } from '@/utils/types/cryptoTypes'

export interface ResponseSuccess<T> {
  data: T
  status: number
  statusText: string
}

export interface ResponseFailed {
  code: string
  message: string
  name: string
  response: {
    data: {
      error: string
      message: string
      statusCode: number
    }
    status: number
    statusText: string
  }
}
