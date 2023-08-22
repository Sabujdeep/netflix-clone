import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'

const Navbar = () => {
  const navigate = useNavigate()
  const {user, logOut} = UserAuth()

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <nav className='text-white flex justify-between p-4 z-[100] absolute w-full'>
      <Link to={'/'}>
        <h1 className= 'text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
      </Link>

        {user?.email ? (
          <div>
          <Link to={'/account'}>
          <button className='pr-4'>Account</button>
          
          </Link>
          <Link to={'/logout'}>

          <button onClick={handleLogOut} className='bg-red-600 px-6 rounded py-2 cursor-pointer'>Log Out</button>
          </Link>
      </div>
        ): (
          <div>
            <Link to={'/login'}>
            <button className='pr-4'>Sign In</button>
            
            </Link>
            <Link to={'/signup'}>

            <button className='bg-red-600 px-6 rounded py-2 cursor-pointer'>Sign Up</button>
            </Link>
        </div>
        )}

    </nav>
  )
}

export default Navbar
