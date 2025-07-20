import React from 'react'
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='w-full'>
      <nav className="flex justify-center items-center">
        <Navbar />
      </nav>
      <main className='w-11/12 mx-auto py-10'>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout