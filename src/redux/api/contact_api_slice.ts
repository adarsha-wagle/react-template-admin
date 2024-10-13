import { IContactForm } from 'src/types/common_type.ts';
import { apiSlice } from './api_slice.ts';

interface IContactFormParams {
  pagination: {
    page?: number;
    limit?: number;
  };
  search?: string;
  sort?: string;
}

interface IGetContactFormResponse {
  contactForms: IContactForm[];
  totalCount: number;
}

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query<IGetContactFormResponse, IContactFormParams>({
      query: ({ pagination: { page = 1, limit = 20 }, search = '', sort = '' }) => {
        const params = new URLSearchParams();

        // params.append('page', page.toString());
        // params.append('limit', limit.toString());
        console.log(page, limit);
        if (search) {
          params.append('search', search);
        }
        if (sort) {
          params.append('sortBy', sort);
        }

        return {
          url: `/contacts?${params.toString()}`,
          validateStatus: (response: any, result: any) =>
            // eslint-disable-next-line
            response.status === 200 && !result.isError,
        };
      },
      keepUnusedDataFor: 600,
      transformResponse: (response: { data: IGetContactFormResponse }) => response?.data,
      providesTags: (result, _error, _arg) => {
        if (result) {
          return [
            ...result.contactForms.map(({ id }) => ({ type: 'Contact' as const, id })),
            'Contact',
          ];
        }
        return ['Contact'];
      },
    }),
    changeContactFormStatus: builder.mutation<void, { contactFormId: string; status: string }>({
      query: ({ contactFormId, status }) => ({
        url: `/admins/contacts/forms/${contactFormId}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: (_result, _error, { contactFormId }) => [
        { type: 'Contact', id: contactFormId },
      ],
    }),
    deleteContactById: builder.mutation<void, { contactId: string }>({
      query: ({ contactId }) => ({
        url: `/admins/contacts/forms/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, { contactId }) => [{ type: 'Contact', id: contactId }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useChangeContactFormStatusMutation,
  useDeleteContactByIdMutation,
} = contactApiSlice;
