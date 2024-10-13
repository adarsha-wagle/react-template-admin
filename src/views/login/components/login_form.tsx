import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useRouter } from 'src/hooks/use-router.ts';
import { setCredentials } from 'src/redux/actions/auth_slice.ts';
import { throwErrorToast } from 'src/utils/throw_toast.tsx';
import { useLoginMutation } from 'src/redux/api/auth_api_slice.ts';
import ControlledInputField from 'src/components/ui/controlled_input_field.tsx';

import { ILogin, LoginSchema } from 'src/types/auth_type.ts';
import ButtonLoading from 'src/components/ui/button_loading.tsx';

type TLoginFormProps = {
  toggleForm: () => void;
};

export default function LoginForm({ toggleForm }: TLoginFormProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data: ILogin) => {
    try {
      const response = await login(data).unwrap();
      dispatch(setCredentials({ accessToken: response?.data?.accessToken }));
      router.push('/');
    } catch (err: any) {
      console.log('err', err);
      const errorMessage = err?.data?.message || 'Failed to login';
      console.log('error', errorMessage);
      throwErrorToast(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <ControlledInputField
          control={control}
          name="email"
          label="Email address"
          errors={errors}
          type="email"
        />
        <ControlledInputField
          control={control}
          name="password"
          label="Password"
          errors={errors}
          type="password"
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Button variant="text" sx={{ textTransform: 'none' }} onClick={toggleForm}>
          Forget Password?
        </Button>
      </Stack>
      <ButtonLoading
        type="submit"
        size="large"
        variant="contained"
        color="inherit"
        buttonText="Login"
        isLoading={isLoading}
        loadingText="Logging..."
        fullWidth
      />
    </form>
  );
}
