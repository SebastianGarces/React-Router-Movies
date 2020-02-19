import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = props => {
	const [movies, setMovies] = useState([]);
	console.log("moviesList props: ", props);

	useEffect(() => {
		const getMovies = () => {
			axios
				.get("http://localhost:5000/api/movies")
				.then(response => {
					setMovies(response.data);
				})
				.catch(error => {
					console.error("Server Error", error);
				});
		};

		getMovies();
	}, []);

	console.log(movies);

	return (
		<div className="movie-list">
			{movies.map(movie => {
				console.log(movie);
				return <MovieCard key={movie.id} movie={movie} {...props} />;
			})}
		</div>
	);
};

export default MovieList;
