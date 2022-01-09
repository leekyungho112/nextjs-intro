import { useEffect, useState } from 'react';
import Seo from './Seo';

const API_KEY = 'afd07a29753271380c387af2799cf64e';

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    // fetch(
    //   `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    // )
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
        </div>
      ))}
    </div>
  );
}
