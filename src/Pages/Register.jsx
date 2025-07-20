import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleNameBlur = (e) => {
    const name = e.target.value;
    if (name.length < 3) {
      setNameError("Name must be at least 3 characters long");
      return;
    } else {
      setNameError("");
    }
  };
  const handlePhotoBlur = (e) => {
    const photo = e.target.value;
    if (photo.length < 3) {
      setPhotoError("Photo URL must be at least 3 characters long");
      return;
    } else {
      setPhotoError("");
    }
  };
  const handleEmailBlur = (e) => {
    const email = e.target.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }
  };
  const handlePasswordBlur = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else {
      setPasswordError("");
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          toast.success("User created successfully");
          navigate("/auth/login");
        });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
              onBlur={handleNameBlur}
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}
            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
              onBlur={handlePhotoBlur}
            />
            {photoError && <p className="text-xs text-error">{photoError}</p>}
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
              onBlur={handleEmailBlur}
            />
            {emailError && <p className="text-xs text-error">{emailError}</p>}
            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
              onBlur={handlePasswordBlur}
            />
            {passwordError && (
              <p className="text-xs text-error">{passwordError}</p>
            )}
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Allready Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
