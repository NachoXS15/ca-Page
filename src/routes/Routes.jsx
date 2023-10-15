import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BabyTips from '../pages/BabyTips/BabyTips'
import Home from '../pages/Home'
import Products from '../pages/Products'
export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/babytips' element={<BabyTips />} />
    </Routes>
  )
}
