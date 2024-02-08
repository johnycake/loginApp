import React from 'react'

import { SwitchThemeButton } from '../../theme/SwitchThemeButton'
import { Login } from '../../containers'
import { Column } from '../../components/Column/Column'

export const Home = () => {
  // React.useEffect(() => {
  //   i18n.changeLanguage("sk");
  // }, [i18n]);

  return (
    <Column fullHeight>
      <SwitchThemeButton />
      <Login onMockLogin={(credentials) => console.log({ credentials })} />
    </Column>
  )
}
