import React, { useState, useRef, useEffect } from "react";
import { AiFillPlayCircle, AiOutlineUnorderedList } from "react-icons/ai";
import Image from "next/image";
import tmdb from "@/pages/api/tmdb";

const Trending = () => {
  const [filterTerm, setFilterTerm] = useState("all");
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
    //  console.log(filterTerm);
  };

  return (
    <div>
      <div className='flex items-center gap-6'>
        <h1 className=' pt-10 md:pb-10 pb-8'>Trending</h1>
        <div className='flex gap-3'>
          <div className='flex items-center gap-2 bg-gray-500 py-px px-2 rounded-xl cursor-pointer'>
            <AiFillPlayCircle />
            <button ref={filterRef} onClick={ChangeFilter}>
              movie
            </button>
          </div>
          <div>
            <div className='flex items-center gap-2 bg-green-500 py-px px-2 rounded-xl cursor-pointer'>
              <AiOutlineUnorderedList />
              <button ref={filterRef} onClick={ChangeFilter}>
                tv
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex pb-5 px-5 gap-5 overflow-x-auto'>
        {filter?.map((item) => (
          <div key={item.id} className='flex flex-col '>
            <Image
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}`}
              alt={item.title || item.name}
              width={400}
              height={100}
              quality={100}
              className=' object-contain rounded-lg  w-[150px] h-[225px]'
            />
            <div className='flex-flex-col px-3 w-[150px]'>
              <h3 className='font-bold'>{item.title || item.name}</h3>
              <p className='text-xs '>
                {item.first_air_date || item.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
