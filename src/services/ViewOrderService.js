import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:8080/'

export const viewOrderApi = createApi({
    reducerPath: 'viewOrderApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getTradeList: builder.query({
        query: ({period, status, fromDate, toDate}) => ({
          url: "/dummyTradeList?",
          params: {
            period, status, fromDate, toDate
          },
          method: "get"
        })
      }),
    }),
  })


  export const { useGetTradeListQuery } = viewOrderApi