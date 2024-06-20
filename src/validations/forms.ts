import * as z from 'zod'

export const formRegister = z
  .object({
    firstName: z.string().min(3, {
      message: 'First name must be at least 3 characters.',
    }),
    lastName: z.string().min(3, {
      message: 'Last name must be at least 3 characters.',
    }),
    pseudo: z.string().min(3, {
      message: 'Username must be at least 3 characters.',
    }),
    city: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character'
      ),
    confirmPassword: z.string(),
    promoCode: z.string(),
    // promoCode: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

export const formLogin = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const formRole = z.object({
  name: z.string(),
})

export const formPromoCode = z.object({
  name: z.string(),
  value: z.number().min(1),
})

export const formTrade = z.object({
  id_offer: z.string(),
})

export const formOffer = z.object({
  id_crypto: z.string(),
  amount: z.string(),
})
