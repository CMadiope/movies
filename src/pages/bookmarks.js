import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleItem from "@/components/SingleItem";
import { RxCross2 } from "react-icons/rx";
import { removeBookmark } from "@/store/bookmarkSlice";
import { useSession, signOut, signIn } from "next-auth/react";
import {toast} from 'react-toastify'

const Bookmarks = () => {
  const dispatch = useDispatch();
  const bookmarkItems = useSelector((state) => state.bookmark.bookmarkList);
  const { data: session } = useSession();

  

  // console.log(bookmarkItems);
  if (bookmarkItems.length < 1) {
    return (
      <h1 className='text-white text-center text-2xl py-8'>
        Your watchlist is empty...
      </h1>
    );
  }
  if (session) {
    return (
      <div className='text-white p-10'>
        <div className='flex text-center'>
          <h1 className='text-base py-4'>
            Welcome, {session.user.name} these are your bookmarks
          </h1>
        </div>

        <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-5 px-5 gap-5'>
          {bookmarkItems.map((item, index) => (
            <div key={item.id} className='relative'>
              <SingleItem
                title={item.title || item.name}
                release={item.first_air_date || item.release_date}
                path={item.backdrop_path}
                id={item.id}
              />
              <div
                className='absolute max-xs:top-[20%] top-[8%] text-xl left-[2%] cursor-pointer '
                onClick={() => dispatch(removeBookmark(item.id))}
              >
                <RxCross2 />
              </div>
            </div>
          ))}
        </div>
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

export default Bookmarks;
