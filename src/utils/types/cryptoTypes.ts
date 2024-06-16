export enum RoleName {
  user = 'user',
  admin = 'admin',
}

export type Role = {
  id: string
  name: RoleName
  created_at?: string
  updated_at?: string
}

export type PromoCode = {
  id: string
  name: string
  value: number
}

export type CryptoHistory = {
  id: string
  id_crypto: string
  value: number
  created_at: string
  updated_at: string
}

export interface Offer {
  id: string
  User: {
    pseudo: string
  }
  amount: number
  created_at: string
  id_user: string
  Crypto: Crypto
}

export interface UserAssets {
  firstName: string
  lastName: string
  dollarAvailables: number
  pseudo: string
  age: number
  UserHasCrypto: Crypto[] | Crypto
}

export interface Signin {
  access_token: string
  user: UserExtended
  Role: Role
}

export interface Crypto {
  id: string
  name: string
  value: number
  image: string
  quantity: number
  created_at: string
  updated_at: string
}

export interface Trade {
  Giver: User
  Receiver: User
  Crypto: Crypto
  id: string
}

export interface User {
  firstName: string
  lastName: string
  pseudo: string
  dollarAvailables: number
}
interface UserHasCrypto {
  id: string
  id_user: string
  id_crypto: string
  amount: number
  createdAt: string
  updated_at: string
  Crypto: Crypto
}
export interface UserExtended extends User {
  id: string
  hash: string
  email: string
  roleId: string
  isActive: boolean
  city: string
  age: number
  created_at: string
  updated_at: string
  UserHasCrypto?: UserHasCrypto
}

export interface MyTrade {
  id: string
  id_giver: string
  id_receiver: string
  id_crypto: string
  amount_traded: number
  created_at: string
  updated_at: string
  Crypto: Crypto
  Giver: UserExtended
  Receiver: UserExtended
}
