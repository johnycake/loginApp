import React from 'react'
import { Inline } from '../../components/Inline/Inline'
import { Column } from '../../components/Column/Column'
import { FieldValues, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'
import { Box, TextField } from '@mui/material'
import { Label } from '../../components/Label/Label'
import { useApi } from '../../hooks'
import { LoginApiRequest } from '../../api/generated/models/LoginApiRequest'
import { LoginApiResponse } from '../../api/generated/models/LoginApiResponse'
import { ApiMethodTypes } from '../../types/Api'
import { LoadingButton } from '@mui/lab'

export type LoginType = {
  email?: string
  password?: string
}

const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^$/

export const validationSchema = (t: TFunction): Yup.ObjectSchema<LoginType> => {
  return Yup.object()
    .shape({
      email: Yup.string()
        .required(t('validation.required'))
        .matches(EmailRegex, t('validation.emailFormat')),
      password: Yup.string().required(t('validation.required'))
    })
    .defined()
}

interface ILogin {
  onMockLogin?: (loginCredentials: LoginType) => void
}

export const Login: React.FC<ILogin> = ({ onMockLogin }) => {
  const { t } = useTranslation()

  const onSuccessResponse = (apiResponse: LoginApiResponse) => {
    if (apiResponse?.errorCode != null) {
      return
    }
    if (apiResponse.loggedIn) {
      // DO After login operations
    }
  }

  const { callApi, apiLoading, apiError } = useApi<LoginApiRequest, LoginApiResponse>({
    onSuccess: onSuccessResponse
  })
  const { register, handleSubmit, formState } = useForm<LoginType>({
    resolver: yupResolver(validationSchema(t))
  })

  const onFormSubmit = (formData: FieldValues) => {
    const mappedFormData: LoginApiRequest = {
      email: formData.email,
      password: formData.password
    }
    callApi({
      url: '/login',
      method: ApiMethodTypes.POST,
      reqData: mappedFormData
    })
    onMockLogin?.(mappedFormData)
    return
  }

  return (
    <Column center>
      <Box
        border="thin"
        sx={{
          width: '40%',
          border: 1,
          borderColor: 'grey',
          borderRadius: '14px',
          padding: '40px'
        }}>
        <Label text={'Login'} />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Inline stretch>
            <Column fullWidth>
              <TextField
                label={t('loginForm.email')}
                placeholder={t('general.placeholder')}
                {...register(`email`)}
                id={`email`}
                error={!!formState.errors?.email?.message}
                helperText={formState.errors?.email?.message}
              />
              <TextField
                type="password"
                label={t('loginForm.password')}
                placeholder={t('general.placeholder')}
                {...register(`password`)}
                id={`password`}
                error={!!formState.errors?.password?.message}
                helperText={formState.errors?.password?.message}
              />
              <LoadingButton type="submit" variant="contained" loading={apiLoading}>
                {t('loginForm.submit')}
              </LoadingButton>
              {!!apiError && <Label text={t('loginForm.loginError')} />}
            </Column>
          </Inline>
        </form>
      </Box>
    </Column>
  )
}
