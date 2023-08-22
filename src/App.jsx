import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hompage from './components/pages/Hompage'
import { AuthContextProvider } from './context/authContext'
import SignUp from './components/pages/SignUp'
import ProtectedRoute from './components/ProtectedRoutes'
import Login from './components/pages/Login'
import Account from './components/pages/Account'

function App() {

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/account' element={<ProtectedRoute>
            <Account/>
          </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>

    </>
  )
}

export default App
