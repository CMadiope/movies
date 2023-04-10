import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import tmdb from "@/pages/api/tmdb";
import SingleItem from "./SingleItem";
import Link from "next/link";

const Trending = () => {
  const [filterTerm, setFilterTerm] = useState("movie");
  const [filter, setFilter] = useState([]);
  const filterRef = useRef();

  const fetchTrending = async () => {
    const { data } = await tmdb.get(`trending/${filterTerm}/day`);
    if (data.status === 404) {
      setFilter([]);
    } else {
      setFilter(data.results);
    }
  };
  useEffect(() => {
    try {
      fetchTrending();
    } catch (error) {
      console.log(error);
    }
  }, [filterTerm]);

  const ChangeFilter = (e) => {
    setFilterTerm(e.currentTarget.textContent);
 
  };
  // console.log(filter)

  return (
    <div>
      <div className='flex items-center gap-6'>
        <h1 className=' pt-10 md:pb-10 pb-8'>Trending</h1>
        <div className='flex gap-3'>
          <button
            ref={filterRef}
            onClick={ChangeFilter}
            className=' bg-gray-500 py-px px-2 rounded-xl cursor-pointer hover:scale-110'
          >
            movie
          </button>

          <div>
            <button
              ref={filterRef}
              onClick={ChangeFilter}
              className='bg-green-500 py-px px-6 rounded-xl cursor-pointer hover:scale-110'
            >
              tv
            </button>
          </div>
        </div>
      </div>
      <div className='flex pb-5 px-5 gap-5 overflow-x-auto'>
        {filter?.map((item) => (
          <div key={item.id} className='flex flex-col '>
            <Link href={`/${filterTerm}/[id]`} as={`/${filterTerm}/${item.id}`}>
              {/* href={`/movie/[id]`} as={`/movie/${item.id}`} */}
              <SingleItem
                title={item.title || item.name}
                release={item.first_air_date || item.release_date}
                path={item.backdrop_path}
                id={item.id}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
