import React from 'react'
import { format } from "date-fns";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <div>
        <img className='w-[400px]' src={logo} alt="" />
      </div>
      <p className='text-accent '>Journalism Without Fear or Favour</p>
      <p className='text-accent font-bold'> {format(new Date(), "EEEE, MMMM d, yyyy")} </p>
    </div>
  );
}

export default Header