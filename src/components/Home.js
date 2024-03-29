import React, { useState, useEffect } from "react";
import { BsSearch, BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import useMoviesData from "./hooks/useMoviesData";
import useTvShow from "./hooks/useTvShow";
import Link from "next/link";
import Trending from "./Trending";
import SingleItem from "./SingleItem";

const Home = () => {
 

  const { isLoading, data, isError, error } = useMoviesData();
  const { data: shows } = useTvShow();

 

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  // console.log(shows);
  // console.log(data);

  return (
    <div className='text-white pl-8'>
     
      <div className=''>
        <Trending />
      </div>
      <div className='bp-8'>
        <div className='flex items-center justify-between'>
          <h1 className=' pt-10 md:pb-10 pb-8'>Latest Movies</h1>
          <Link
            href='/movies'
            className='text-base flex items-center gap-2 text-blue-300'
          >
            <p>See more</p>
            <BsArrowRightCircleFill />
          </Link>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-5 px-5 gap-5 '>
          {data?.data.results.slice(0, 10).map((item) => (
            <Link href={`/movie/[id]`} as={`/movie/${item.id}`} key={item.id}>
              <SingleItem
                title={item.title || item.name}
                release={item.first_air_date || item.release_date}
                path={item.backdrop_path}
                id={item.id}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='bp-8'>
        <div className='flex items-center justify-between'>
          <h1 className=' pt-10 md:pb-10 pb-8'>Latest Tv Shows</h1>
          <Link
            href='/series'
            className='text-base flex items-center gap-2 text-blue-300'
          >
            <p>See more</p>
            <BsArrowRightCircleFill />
          </Link>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-5 px-5 gap-5 '>
          {shows?.data.results.slice(0, 10).map((item) => (
            <Link href={`/tv/[id]`} as={`/tv/${item.id}`} key={item.id}>
              <SingleItem
                title={item.title || item.name}
                release={item.first_air_date || item.release_date}
                path={item.backdrop_path}
                id={item.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
