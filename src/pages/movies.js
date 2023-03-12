import MovieItem from "@/components/MovieItem";
import React, { useState, useEffect } from "react";
import tmdb from "@/pages/api/tmdb";


const Movies = () => {
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const { data } = await tmdb.get(`movie/popular`);

    if (data.status === 404) {
      setPopular([]);
      return;
    } else {
      setPopular(data.results);
      // console.log(popular);
    }
  };
  useEffect(() => {
    try {
      fetchPopular();
    } catch (error) {
      console.log(err);
    }
  }, []);

  return (
    <div className='text-white lg:pl-8'>
      <h1 className=' pt-10 md:pb-10 pb-8'>Popular Movies</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-5 px-5 gap-5 '>
        {popular?.map((item) => (
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
  );
};

export default Movies;
