import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";

const Home = () => {
  const [input, setInput] = useState("");
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=71544f1c2a2ee7119c4899009c6843b3`
    );
    const data = await res.json();
    if (data.status === 404) {
      setTrending([]);
      return;
    } else {
      //console.log(data);
      setTrending(data.results.slice(0, 3));
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    try {
      fetchTrending();
    } catch (error) {
      console.log(err);
    }
  }, []);

  console.log(trending);

  //https://image.tmdb.org/t/p/w500/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg

  return (
    <div className='text-white'>
      <div className='flex gap-2  mt-8 py-3 px-6 items-center rounded-3xl md:w-80 '>
        <BsSearch className='text-xl ' />
        <input
          type='text'
          value={input}
          onChange={handleChange}
          placeholder='Search for movies or Tv series'
          className='bg-transparent w-full outline-none text-white placeholder:text-lg'
        />
      </div>
      <div className='pl-8'>
        <h1 className='text-2xl pt-10 md:pb-10'>Trending</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
          {trending?.map((item) => (
            <div key={item.id} className='col-span-1 relative'>
              <h3 className='font-bold absolute md:bottom-[10%] left-5 bottom-[30%] z-10'>
                {item.title || item.name}
              </h3>
              <p className='text-sm absolute md:bottom-[25%] left-5 z-10 bottom-[40%]'>
                {item.first_air_date || item.release_date}
              </p>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.title || item.name}
                width={400}
                height={100}
                className='h-[400px] md:w-auto md:h-auto object-contain opacity-80'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
