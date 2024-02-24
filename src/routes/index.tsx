import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/home'
import Video from '../pages/video'
import Category from '../pages/category'

import ProtectedRoute from './protectedRoute'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="video/:id" element={<Video />} />
          <Route path="category/:id" element={<Category />} />
        </Route>
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
