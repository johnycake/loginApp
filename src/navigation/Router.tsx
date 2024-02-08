import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../Pages'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { RouteNames } from './RouteNames'
import { Logged } from '../Pages/Logged/Logged'

export const Router = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route index element={<Home />} />
        <Route path={RouteNames.LOGGED} element={<Logged />} />
      </Routes>
    </ErrorBoundary>
  )
}
