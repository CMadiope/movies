import { useQuery, useQueryClient } from "react-query"
import tmdb from "@/pages/api/tmdb"

const fetchMovies = () => {
  return tmdb.get("movie/popular");
}

const useMoviesData = () => {
  return useQuery('movies', fetchMovies,{})
}

export default useMoviesData