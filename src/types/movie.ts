export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MoviePops {
  results: Movie[];
  onOpen: (movie: Movie) => void;
}

export interface ModalPops {
  movie: Movie;
  onClose: () => void;
}
