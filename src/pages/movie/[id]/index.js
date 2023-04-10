import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import tmdb from "@/pages/api/tmdb";
import Image from "next/image";
import { addToBookmark } from "@/store/bookmarkSlice";
import { useDispatch } from "react-redux";

const Movie = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query;
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    const { data } = await tmdb.get(`movie/${query.id}`);
    if (data.status === 404) {
      setMovie([]);
    } else {
      setMovie(data);
    }
  };
  useEffect(() => {
    try {
      fetchMovie();
    } catch (error) {
      console.log();
    }
  }, [query.id]);
  // console.log(movie);

  const id = movie?.id;
  const title = movie?.title;
  const backdrop_path = movie?.backdrop_path || movie?.poster_path; ;
  const overview = movie?.overview;
  const release =
    movie?.release_date.slice(0, 4) || movie?.first_air_date.slice(0, 4);

  // console.log(image)
  return (
    <div className='text-white p-10 grid sm:grid-cols-3'>
      <div>
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie?.backdrop_path}`}
          alt='/'
          width={400}
          height={100}
          quality={100}
          className='rounded-md'
        />
      </div>
      <div className='sm:col-span-2'>
        <h1 className='text-3xl text-center pt-5 pb-8 font-bold'>
          {movie?.title}{" "}
          <span className='font-light text-gray-300'>
            ({" "}
            {movie?.release_date.slice(0, 4) ||
              movie?.first_air_date.slice(0, 4)}
            )
          </span>
        </h1>
        <p>{movie?.tag_line}</p>
        <h3 className='px-4 pb-6 text-xl md:px-12'>Overview</h3>
        <p className='text-gray-300 text-justify px-4 md:px-12 '>
          {movie?.overview}
        </p>
        <div
          className='w-full  flex justify-center px-10 md:px-20 lg:px-24
        '
        >
          <button
            className='w-full  bg-white text-black my-8 py-2 rounded-xl hover:scale-105'
            onClick={() =>
              dispatch(addToBookmark({ id, backdrop_path, overview, title, release }))
            }
          >
            add to watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
