import React from "react";
import { Movie } from '../../types';

type Props = {
    movie: Movie;
    onWatchLaterHandler: (item: Movie) => void;
};

const MovieItem: React.FC<Props> = ({ movie, onWatchLaterHandler }) => {
    return (
        <div className="movie-item-container">
            <div>
                <p>{movie.name}</p>
            </div>
            <div>
            <img alt=''
                src={movie.image}
                style={{ width: '300px' }} />
            </div>
            <div>
                <h3>{movie.description}</h3>
                <button onClick={() => onWatchLaterHandler(movie)}>Watch Later</button>
            </div>
        </div>
    );
};


export default MovieItem;