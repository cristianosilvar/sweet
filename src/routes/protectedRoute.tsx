import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuthenticaded = true

  return isAuthenticaded ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute
