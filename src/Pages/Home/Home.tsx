import React from 'react'

import { SwitchThemeButton } from '../../theme/SwitchThemeButton'
import { Login } from '../../containers'
import { Column } from '../../components/Column/Column'
import { useNavigateTo } from '../../hooks'
import { RouteNames } from '../../navigation'

export const Home = () => {
  const navigateTo = useNavigateTo()
  // React.useEffect(() => {
  //   i18n.changeLanguage("sk");
  // }, [i18n]);

  return (
    <Column fullHeight>
      <SwitchThemeButton />
      <Login
        onMockLogin={(credentials) => {
          navigateTo.withState(
            { login: credentials.email ?? '', password: credentials.password ?? '' },
            RouteNames.LOGGED
          )
        }}
      />
    </Column>
  )
}
