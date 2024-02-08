import { useLocation } from 'react-router-dom'
import { PageParams } from '../types'

export const useLocationState = () => {
  const location = useLocation()
  const locationState = location.state ? (location.state as PageParams) : null

  return locationState
}
