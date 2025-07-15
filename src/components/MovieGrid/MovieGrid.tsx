import css from "../MovieGrid/MovieGrid.module.css";
import type { MoviePops } from "../../types/movie";

export default function MovieList({ results, onOpen }: MoviePops) {
  return (
    <ul className={css.grid}>
      {results.map((result) => (
        <li key={result.id} onClick={() => onOpen(result)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              alt={result.title}
              loading="lazy"
            />
            <h2 className={css.title}>{result.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
