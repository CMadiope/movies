import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const bookmarkItems = useSelector((state) => state.bookmark.bookmarkList);

  // console.log(bookmarkItems);
  if (bookmarkItems.length < 1) {
    return (
      <h1 className='text-white text-center text-2xl py-8'>
        Your watchlist is empty...
      </h1>
    );
  }

  return (
    <div className='text-white p-10'>
      <div className=' grid gap-8'>
        {bookmarkItems.map((item, index) => (
          <div key={index} className='flex items-center'>
            <div>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={50}
              />
            </div>
            <div>
              <h1 className="pl-6">
              {item.title} <span>{item.release}</span>
            </h1>
            <p className='text-xs text-gray-500 py-2 px-6'>
              {item.overview}
            </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
