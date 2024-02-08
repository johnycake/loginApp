import { Typography } from '@mui/material'
import React from 'react'

type LabelProps = {
  text: string | undefined
}
export const Label = ({ text }: LabelProps) => {
  return <Typography variant="h6">{text ?? ''}</Typography>
}
