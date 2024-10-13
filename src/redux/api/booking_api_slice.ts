import { IBooking } from 'src/types/common_type.ts';
import { apiSlice } from './api_slice.ts';

interface IBookingFormParams {
  pagination: {
    page?: number;
    limit?: number;
  };
  search?: string;
  sort?: string;
}

interface IGetBookingFormResponse {
  bookings: IBooking[];
  totalCount: number;
}

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBookings: builder.query<IGetBookingFormResponse, IBookingFormParams>({
      query: ({ pagination: { page = 1, limit = 20 }, search = '', sort = '' }) => {
        const params = new URLSearchParams();

        params.append('page', page.toString());
        params.append('limit', limit.toString());
        if (search) {
          params.append('search', search);
        }
        if (sort) {
          params.append('sortBy', sort);
        }

        return {
          url: `/bookings?${params.toString()}`,
          validateStatus: (response: any, result: any) =>
            // eslint-disable-next-line
            response.status === 200 && !result.isError,
        };
      },
      keepUnusedDataFor: 600,
      transformResponse: (response: { data: IGetBookingFormResponse }) => response?.data,
      providesTags: (result, _error, _arg) => {
        if (result) {
          return [
            ...result.bookings.map(({ id }) => ({ type: 'Booking' as const, id })),
            'Booking',
          ];
        }
        return ['Booking'];
      },
    }),

    deleteBookingById: builder.mutation<void, { bookingId: string }>({
      query: ({ bookingId }) => ({
        url: `/admins/bookings/forms/${bookingId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, { bookingId }) => [{ type: 'Booking', id: bookingId }],
    }),
    updateBookingById: builder.mutation<void, { bookingId: string }>({
      query: ({ bookingId }) => ({
        url: `/admins/bookings/forms/${bookingId}`,
        method: 'PATCH',
      }),
      invalidatesTags: (_result, _error, { bookingId }) => [{ type: 'Booking', id: bookingId }],
    }),
  }),
});

// eslint-disable-next-line
export const { useGetBookingsQuery, useDeleteBookingByIdMutation, useUpdateBookingByIdMutation } =
  bookingApiSlice;
