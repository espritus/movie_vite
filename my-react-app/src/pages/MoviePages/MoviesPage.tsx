import React, { useState } from "react";
import MovieList from "../../components/MovieList/MovieList"
import { data } from "../../mock";


const MoviesPage: React.FC = () => {
    const [movies,setMovies] = useState(data);
    return (<div className="Movies">
    <MovieList movies={movies}/>
  </div>)
}

export default MoviesPage;