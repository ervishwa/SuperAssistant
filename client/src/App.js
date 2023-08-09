import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/home/Home'
import { Signup } from './pages/signup/Signup'
import { Login } from './pages/login/Login'
import { Question } from './pages/questions/Question'

export function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/question' element={<Question/>}></Route>
      
    </Routes>

    </>
  )
}

