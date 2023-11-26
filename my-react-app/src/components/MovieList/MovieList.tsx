
import { Movie } from '../../types';
import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import '../../index.css'

type Props = {
    movies: Movie[];
}


const MoviesList: React.FC<Props> = ({ movies }) => {
    const WatchLaterHandler = (item: Movie) => {
        console.log(`Watch Later movie with id ${item.id}`);
    }

    return (<div className="movies-list-container">
        {
            movies.map((movie) =>
                (<MovieItem movie ={movie} key={movie.id} onWatchLaterHandler={WatchLaterHandler} />))
        }
    </div>)
}
export default MoviesList;