import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { setErrorMessage } from '../components/Error/error-reducer'


const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3006' })
export const baseQueryApi: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error) {
    api.dispatch(setErrorMessage('Network Error'))
  }
  return result
}