import React, { useState, useEffect } from "react";
import { BsSearch, BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import tmdb from "@/pages/api/tmdb";
import { AiFillPlayCircle, AiOutlineUnorderedList } from "react-icons/ai";
import Link from "next/link";
import MovieItem from "./MovieItem";
import SeriesItem from "./SeriesItem";

const Home = () => {
  const [input, setInput] = useState("");
  const [trending, setTrending] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrending = async () => {
    const { data } = await tmdb.get(`trending/all/day`);

    if (data.status === 404) {
      setTrending([]);
      return;
    } else {
      // console.log(data);
      setTrending(data.results);
    }
  };
  const fetchTrendingMovies = async () => {
    const { data } = await tmdb.get(`trending/movie/day`);

    if (data.status === 404) {
      setTrendingMovies([]);
      return;
    } else {
      console.log(data);
      setTrendingMovies(data.results);
    }
  };

  const fetchLatestMovies = async () => {
    const { data } = await tmdb.get(`movie/popular`);
    if (data.status === 404) {
      setLatestMovies([]);
      return;
    } else {
      setLatestMovies(data.results.slice(0, 10));
      //console.log(data);
    }
  };
  const fetchSeries = async () => {
    const { data } = await tmdb.get(`tv/popular`);
    if (data.status === 404) {
      setSeries([]);
      return;
    } else {
      setSeries(data.results.slice(0, 10));
      //console.log(data);
    }
  };
  useEffect(() => {
    try {
      fetchSeries();
    } catch (error) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    try {
      fetchLatestMovies();
    } catch (error) {
      console.log(err);
    }
  }, []);

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

  return (
    <div className='text-white pl-8'>
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
      <div className=''>
        <div className='flex items-center gap-6'>
          <h1 className=' pt-10 md:pb-10 pb-8'>Trending</h1>
          <div className='flex gap-3'>
            <div className='flex items-center gap-2 bg-gray-500 py-px px-2 rounded-xl cursor-pointer'>
              <AiFillPlayCircle />
              <p>Movies</p>
            </div>
            <div>
              <div className='flex items-center gap-2 bg-green-500 py-px px-2 rounded-xl cursor-pointer'>
                <AiOutlineUnorderedList />
                <p>Tv Shows</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex pb-5 px-5 gap-5 overflow-x-auto'>
          {trending?.map((item) => (
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
      <div className='bp-8'>
        <div className='flex items-center justify-between'>
          <h1 className=' pt-10 md:pb-10 pb-8'>Latest Movies</h1>
          <Link
            href='/movies'
            className='text-base flex items-center gap-2 text-blue-300'
          >
            <p>view all</p>
            <BsArrowRightCircleFill />
          </Link>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-5 px-5 gap-5 '>
          {latestMovies?.map((item) => (
            <MovieItem
              key={item.id}
              title={item.title || item.name}
              release={item.first_air_date || item.release_date}
              path={item.backdrop_path}
              id={item.id}
            />
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
            <p>view all</p>
            <BsArrowRightCircleFill />
          </Link>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-5 px-5 gap-5 '>
          {series?.map((item) => (
            <SeriesItem
              key={item.id}
              title={item.title || item.name}
              release={item.first_air_date || item.release_date}
              path={item.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
