import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const SocialLogin = () => {
  const { googleSignIn, redirectGoogleSignIn, saveUser } = use(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      // const user = result.user;
      // saveUser(user, result.credential.accessToken);
    
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })

  }
  const handleRedirectGoogleSignIn = () => {
    redirectGoogleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
  }
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={()=> handleGoogleSignIn()} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
