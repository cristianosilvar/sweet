import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<ProtectedRoute />} />
          <Route path="video/:id" element={<ProtectedRoute />} />
          <Route path="category/:id" element={<ProtectedRoute />} />
        </Route>
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
