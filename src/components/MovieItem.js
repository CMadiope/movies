import Image from "next/image";
import React from "react";

const MovieItem = ({ title, release, path }) => {
  return (
    <div className='flex flex-col gap-2'>
      <Image
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`}
        alt={title}
        width={400}
        height={100}
        quality={100}
        className='object-contain rounded-lg  w-[150px] h-[225px]'
      />
      <div className="flex flex-col px-3 w-[150px]">
        <h3 className='font-bold  '>
        {title}
      </h3>
      <p className='text-xs '>
        {release}
      </p>
      </div>
      
    </div>
  );
};

export default MovieItem;
