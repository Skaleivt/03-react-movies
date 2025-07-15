import axios from "axios";

import type { MoviePops } from "../types/movie";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default async function fetchMovies(query: string) {
  const myKey = import.meta.env.VITE_API_KEY;

  const response = await axios.get<MoviePops>(`/search/movie`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    params: {
      api_key: myKey,
      query,
    },
  });
  return response.data;
}
