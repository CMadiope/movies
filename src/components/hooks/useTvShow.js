import React from "react";
import { useQuery, useQueryClient } from "react-query";
import tmdb from "@/pages/api/tmdb";

const fetchShow = () => {
  return tmdb.get("tv/popular");
};

const useTvShow = () => {
  return useQuery("tv-shows", fetchShow, {});
};

export default useTvShow;
