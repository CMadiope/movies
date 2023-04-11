import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='text-white/90'>
        <h1 className=' text-center py-5'>
          You are signed in as {session.user.email}
        </h1>
        <div className='flex justify-center'>
          <button
            onClick={() => signOut()}
            className=' my-3 bg-red-500 py-2 rounded-lg px-12'
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='text-white/90 text-xl py-8 text-center'>
        <p>You are not signed in</p>
        <div className='flex justify-center'>
          <button
            className='my-3 cursor-pointer bg-gray-400 py-2 px-12 rounded-xl'
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
};

export default Profile;
