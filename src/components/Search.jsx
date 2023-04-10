import React from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import SingleItem from "./SingleItem";
import Link from "next/link";

const Search = () => {
  const [input, setInput] = React.useState("");
  const [results, setResults] = React.useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const fetchItem = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=71544f1c2a2ee7119c4899009c6843b3&query=${input}&page=1`
    );
    if (data.status === 404) {
      setResults([]);
    } else {
      setResults(data.results);
    }
  };
  React.useEffect(() => {
    try {
      fetchItem();
    } catch (error) {
      console.log(error);
    }
  }, [input]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.witch === 13) {
      fetchItem();
      
    }
  };
  // console.log(results);

  return (
    <div className='text-white'>
      <div className='flex gap-2  mt-8 py-3 px-6 items-center rounded-3xl md:w-80 '>
        <BsSearch className='text-xl ' />
        <input
          type='text'
          onKeyPress={handleKeyPress}
          value={input}
          onChange={handleChange}
          placeholder='Search for movies '
          className='bg-transparent w-full outline-none text-white placeholder:text-lg'
        />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-5 px-5 gap-5 py-8'>
        {results &&
          results?.slice(0, 10).map((item) => (
            <Link key={item.id} href={`/movie/[id]`} as={`/movie/${item.id}`}>
              <SingleItem
                title={item.title || item.name}
                release={item.first_air_date || item.release_date}
                path={item.backdrop_path || item.poster_path}
                id={item.id}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
