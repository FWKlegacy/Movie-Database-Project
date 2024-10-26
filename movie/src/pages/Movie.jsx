import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9aec5b1d85a32429e920d4613c6c7168`
      )
        .then((response) => {
          if (!response.ok) throw new Error("Movie not found");
          return response.json();
        })
        .then((data) => setMovie(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export default Movie;
