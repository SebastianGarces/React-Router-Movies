import React from "react";

const MovieCard = props => {
	console.log("movieCard props: ", props);
	// console.log(title, director, metascore, stars, id);

	console.log("movie history: ", props.history);

	const routeToMovie = id => {
		console.log("clicked!");
		props.history.push(`/movies/${id}`);
	};

	return (
		<div
			className="movie-card"
			onClick={() => routeToMovie(props.movie.id)}
		>
			<h2>{props.movie.title}</h2>
			<div className="movie-director">
				Director: <em>{props.movie.director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{props.movie.metascore}</strong>
			</div>
			<h3>Actors</h3>

			{props.movie.stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))}
		</div>
	);
};

export default MovieCard;
