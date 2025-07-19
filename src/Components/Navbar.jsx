import React from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto">
      <div className="">User</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={`${userIcon}`} alt="" />
        {/* <button className="btn btn-primary px-10 ">LogOut</button> */}
        <Link to="/auth/login" className="btn btn-primary px-10 ">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
