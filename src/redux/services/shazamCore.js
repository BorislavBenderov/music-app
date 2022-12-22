import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ShazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/charts',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'e600bf7b18msh6c7b7333fc86a64p1d23a9jsn8878ac500f59')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/track'})
    })
});

export const {
    useGetTopChartsQuery
} = ShazamCoreApi;