import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	return (
		<div>
			<SavedList list={savedList} />

			<Switch>
				<Route
					exact
					path="/"
					render={props => <MovieList {...props} />}
				/>
				<Route
					path="/movies/:id"
					render={props => <Movie {...props} />}
				/>
			</Switch>
		</div>
	);
};

export default App;
