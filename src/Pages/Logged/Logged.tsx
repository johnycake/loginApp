import React from 'react'

import { SwitchThemeButton } from '../../theme/SwitchThemeButton'
import { Column } from '../../components/Column/Column'
import { Label } from '../../components/Label/Label'
import { useLocationState } from '../../hooks'

export const Logged = () => {
  const locationParams = useLocationState()

  return (
    <Column fullHeight>
      <SwitchThemeButton />
      <Label text={`login:  ${locationParams?.login}`} />
      <Label text={`password:  ${locationParams?.password}`} />
    </Column>
  )
}
