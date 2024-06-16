export type RegisterInput = {
  firstName: string
  lastName: string
  pseudo: string
  city: string
  email: string
  password: string
  confirmPassword: string
  promoCode: string
  age?: number
}

export type LoginInput = {
  email: string
  password: string
}

export type RoleInput = {
  name: string
}

export type PromoCodeInput = {
  name: string
  value: number
}

export type TradeInput = {
  id_offer: string
}

export type OfferInput = {
  id_crypto: string
  amount: number
}
