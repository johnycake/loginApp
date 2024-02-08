import { createSearchParams, To, useNavigate } from 'react-router-dom'
import { PageParams } from '../types'

export const useNavigateTo = () => {
  const navigate = useNavigate()

  const routeAssembly = (page: string[]) => {
    let path = ''
    page.forEach((p) => {
      path = path + '/' + p
    })
    return path
  }

  const page = (...pagePath: string[]) => {
    navigate(routeAssembly(pagePath) as To)
  }

  const withQuery = (pageParams?: PageParams, ...pagePath: string[]) => {
    navigate({
      pathname: routeAssembly(pagePath).toString(),
      search: createSearchParams({ ...pageParams }).toString()
    })
  }

  const withState = (pageParams?: PageParams, ...pagePath: string[]) => {
    navigate(routeAssembly(pagePath).toString(), { state: { ...pageParams } })
  }

  return { withQuery, withState, page }
}
