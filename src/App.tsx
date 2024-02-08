import React from 'react'
import { Router } from './navigation'
import { Theme } from './theme/theme'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'

const App = () => {
  return (
    <Theme>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </I18nextProvider>
    </Theme>
  )
}

export default App
