import { ILogin } from 'src/types/auth_type.ts';

import { setCredentials, logOut } from '../actions/auth_slice.ts';
import { apiSlice } from './api_slice.ts';

interface ILoginResponse {
  statusCode: number;
  data: {
    accessToken: string;
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    roleId: string;
  };
  message: string;
  success: boolean;
  isError: boolean;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILogin>({
      query: (data) => ({
        url: '/users/login',
        method: 'POST',
        body: { ...data },
      }),
      transformResponse: (response: { data: { data: ILoginResponse } }) => response?.data?.data,
    }),
    sendOtpForgetPassword: builder.mutation({
      query: (email) => ({
        url: `users/forget-password?email=${email}`,
        method: 'POST',
        body: {},
      }),
    }),
    addNewPassword: builder.mutation({
      query: (data) => ({
        url: 'users/reset-password',
        method: 'POST',
        body: { ...data },
      }),
    }),

    sendLogout: builder.mutation<void, void>({
      query: () => ({
        url: '/admins/logout',
        method: 'POST',
        body: {},
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(logOut());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    refreshToken: builder.mutation({
      query: (_) => ({
        url: '/users/refresh-token',
        method: 'PATCH',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('refre query started', data);
          const { accessToken } = data.data;

          dispatch(setCredentials({ accessToken }));
        } catch (err) {
          console.log('error', err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRefreshTokenMutation,
  useAddNewPasswordMutation,
  useSendOtpForgetPasswordMutation,
  useSendLogoutMutation,
} = authApiSlice;
