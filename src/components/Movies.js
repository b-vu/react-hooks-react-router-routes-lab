import React from "react";
import { movies } from "../data";

function Movies() {
  return(
    <div>
      <h1>Movies Page</h1>
      {movies.map(movies => {
        return <div key={movies.title}>{movies.title}, {movies.time + " minutes"} <br></br> Genres: <ul>{movies.genres.map(genre => <li key={genre}>{genre}</li>)}</ul></div>
      })}
    </div>
  )
}

export default Movies;
