import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const SeriesItem = ({ title, release, path, id }) => {

  let name = title 
  name = title.replace(/\s+/g, '-')
// console.log(id);
  return (
    <Link href={`/tv/[id]`} as={`/tv/${id}`} className="hover:scale-90">
      <div className='flex flex-col gap-2'>
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`}
          alt={title}
          width={400}
          height={100}
          quality={100}
          className='object-contain rounded-lg  w-[150px] h-[225px]'
        />
        <div className='flex flex-col px-3 w-[150px]'>
          <h3 className='font-bold  '>{title}</h3>
          <p className='text-xs '>{release}</p>
        </div>
      </div>
    </Link>
  );
};

export default SeriesItem