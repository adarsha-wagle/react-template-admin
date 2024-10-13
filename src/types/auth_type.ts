import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
});

export interface ILogin extends yup.InferType<typeof LoginSchema> {}
