import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  // console.log(session);

  if (session) {
    return (
      <div className='text-white/90 text-xl py-8 text-center'>
        <h1>Welcome, {session.user.name}</h1>
        <button
          className='my-5 cursor-pointer bg-gray-400 py-2 px-4 rounded-xl'
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <div className='text-white/90 text-xl py-8 text-center'>
        <p>You are not signed in</p>
        <button
          className='my-5 cursor-pointer bg-gray-400 py-2 px-4 rounded-xl'
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    );
  }
};

export default Login;
