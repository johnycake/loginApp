import React from 'react'
import { Home } from '@mui/icons-material'
import { Button } from '@mui/material'
import { RouteNames } from '../../navigation'
import { useNavigateTo } from '../../hooks'

export const HomeButton = () => {
  const navigateTo = useNavigateTo()

  return (
    <Button
      onClick={() => {
        navigateTo.page(RouteNames.ROOT)
      }}>
      <Home />
    </Button>
  )
}
