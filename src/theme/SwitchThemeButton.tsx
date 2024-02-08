import { Box, IconButton, styled, useTheme } from '@mui/material'
import DarkIcon from '@mui/icons-material/Brightness4'
import LightIcon from '@mui/icons-material/Brightness7'
import React from 'react'
import { ColorContext } from './ColorContext'

const ThemeButtonContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end'
})

export const SwitchThemeButton = () => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorContext)
  return (
    <ThemeButtonContainer>
      {theme.palette.mode} mode
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </ThemeButtonContainer>
  )
}
