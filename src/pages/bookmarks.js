import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import SingleItem from "@/components/SingleItem";

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
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-5 px-5 gap-5 '>
        {bookmarkItems.map((item, index) => (
          <SingleItem
            key={item.id}
            title={item.title || item.name}
            release={item.first_air_date || item.release_date}
            path={item.backdrop_path}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
