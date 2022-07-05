import * as yup from 'yup'

const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required()

export default loginSchema
