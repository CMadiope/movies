import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import tmdb from "@/pages/api/tmdb";
import { addToBookmark } from "@/store/bookmarkSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Series = () => {
  const router = useRouter();
  const query = router.query;
  const [series, setSeries] = useState(null);
  const dispatch = useDispatch();

  const AddSeries = () => {
    dispatch(addToBookmark({ id, backdrop_path, overview, title, release }));
    toast.success("The show has been added to your list", { autoClose: 3000 });
    toast.POSITION.BOTTOM_LEFT;
  }

  const fetchSeries = async () => {
    const { data } = await tmdb.get(`tv/${query.id}`);
    if (data.status === 404) {
      setSeries([]);
    } else {
      setSeries(data);
    }
  };
  useEffect(() => {
    try {
      fetchSeries();
    } catch (error) {
      console.log();
    }
  }, [query.id]);

  // console.log(series);

  const id = series?.id;
  const title = series?.name || series?.title
  const backdrop_path = series?.backdrop_path || series?.poster_path;
  const overview = series?.overview;
  const release = series?.first_air_date.slice(0, 4);

  return (
    <div className='text-white p-10 grid sm:grid-cols-3'>
      <div>
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${series?.backdrop_path}`}
          alt='/'
          width={400}
          height={100}
          quality={100}
          className='rounded-md'
        />
      </div>
      <div className='sm:col-span-2'>
        <h1 className='text-3xl text-center pt-5 pb-8 font-bold'>
          {series?.title || series?.name}{" "}
        </h1>
        <p>{series?.tag_line}</p>
        <h3 className='px-4 pb-6 text-xl md:px-12'>Overview</h3>
        <p className='text-gray-300 text-justify px-4 md:px-12 '>
          {series?.overview}
        </p>
        <div
          className='w-full  flex justify-center px-10 md:px-20 lg:px-24
        '
        >
          <button
            className='w-full  bg-white text-black my-8 py-2 rounded-xl hover:scale-105'
            onClick={AddSeries
            }
          >
            add to watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Series;
