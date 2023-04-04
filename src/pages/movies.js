import MovieItem from "@/components/MovieItem";
import React from "react";
import useMoviesData from "@/components/hooks/useMoviesData";

const Movies = () => {
  const { isLoading, data, isError, error } = useMoviesData();

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className='text-white lg:pl-8'>
      <h1 className=' pt-10 md:pb-10 pb-8'>Popular Movies</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-5 px-5 gap-5 '>
        {data?.data.results.map((item) => (
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
