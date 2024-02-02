import {DetailType, ProductType} from "../types";
import { createApi} from '@reduxjs/toolkit/query/react';
import { baseQueryApi } from './baseQueryApi';

type GetCatalogType = {
    content: ProductType[]
}
type GetDetailType = {
    content: DetailType
}

export const items = createApi({
  reducerPath: 'items',
  baseQuery: baseQueryApi,
  endpoints: (builder) => ({
    getItemsCatalog: builder.query<GetCatalogType, void>({
      query: () => '/item',
    }),
    getItemDetail: builder.query<GetDetailType, string>({
      query: (id) => `/item/${id}`,
    }),
  }),
});

export const { useGetItemsCatalogQuery, useGetItemDetailQuery } = items;





