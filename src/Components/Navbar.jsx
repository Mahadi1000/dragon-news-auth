import React, { use } from "react";
import { Link, Navigate, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("user trying to LogOut");
    logOut()
      .then(() => {
        toast.success("You Logged Out successfully");
        localStorage.removeItem("user");
        Navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("You Logged Out failed");
      });
  };
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-12 rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
