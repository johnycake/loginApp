import axios, { AxiosRequestHeaders } from 'axios'
import { useState } from 'react'
import { ApiMethodTypes } from '../types/Api'
import { BASE_PATH } from '../api/generated'

type UseApiProps<RES> = {
  onSuccess?: (data: RES) => unknown
  onError?: () => unknown
}

export const useApi = <REQ = unknown, RES = unknown>({ onSuccess, onError }: UseApiProps<RES>) => {
  type ApiProps = {
    url: string
    method: ApiMethodTypes
    reqData: REQ
    headers?: AxiosRequestHeaders
  }
  const [apiResponse, setApiResponse] = useState<RES>()
  const [apiError, setApiError] = useState<Error | undefined>(undefined)
  const [apiLoading, setApiLoading] = useState(false)

  axios.defaults.baseURL = 'http://localhost' //BASE_PATH
  const defaultHeaders = {
    accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const fetchData = async ({ url, method, reqData: data, headers }: ApiProps) => {
    try {
      const res = await axios.request<RES>({
        method,
        url,
        headers: headers ?? defaultHeaders,
        data
      })
      onSuccess?.(res.data)
      setApiResponse(res.data)
    } catch (err) {
      onError?.()
      setApiError(err as Error)
    } finally {
      setApiLoading(false)
    }
  }

  const callApi = ({ url, method, reqData: data }: ApiProps) => {
    setApiLoading(true)
    fetchData({ url, method, reqData: data })
  }

  return { callApi, apiResponse, apiError, apiLoading }
}
