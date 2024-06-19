import LoginPage from 'pages/login-page/login-page'
import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BASE_PAGE_URL } from '../constants'

const AuthRoutes:React.FC = () => {
  return (
    <Routes>
        <Route path={`${BASE_PAGE_URL}/auth`}>
            <Route index element={<Navigate to={`${BASE_PAGE_URL}/auth/login`} replace />} />
            <Route path="login" element={
                <Suspense fallback={<></>}>
                    <LoginPage/>
                </Suspense>
            }/>
            <Route
                path="*"
                element={<Navigate to="login" replace />}
            />
        </Route>
        <Route
            path="*"
            element={<Navigate to={`${BASE_PAGE_URL}/auth/login`} replace />}
        />

    </Routes>
  )
}

export default AuthRoutes
