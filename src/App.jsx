import { useState } from 'react'

import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Navigations from './components/Navigations'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import RegistrationForm from './components/Register'
import Login from './components/Login'
import { useSelector } from 'react-redux';
import Profile from './components/ProfilePage'

function App() {
  const token = useSelector(state => state.token);

  return (
    <>

      <Navigations />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </>
  )
}

export default App
