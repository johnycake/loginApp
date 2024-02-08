import { CssBaseline, PaletteMode } from '@mui/material'
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import React, { ReactNode } from 'react'
import { ColorContext } from './ColorContext'
import { darkTheme } from './dark'
import { lightTheme } from './light'

type ThemeProps = {
  children: ReactNode
}

export const Theme = ({ children }: ThemeProps) => {
  const [mode, setMode] = React.useState<PaletteMode>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = React.useMemo(() => createTheme(mode === 'light' ? lightTheme : darkTheme), [mode])

  return (
    <ColorContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ColorContext.Provider>
  )
}
