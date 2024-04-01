import React from 'react';
import './SliderMovies.scss';

//Dependencies:
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function SliderMovies(props) {
	const { movies } = props;

	if (movies.loading || !movies.result) {
		return 'Something something something';
	}

	const { result } = movies.result;

	return (
		<Carousel autoplay className='slider-movies'>
			{result.map((movie) => (
				<Movie key={movie.id} movie={movie}></Movie>
			))}
		</Carousel>
	);
}

//Internal component:
function Movie(props) {
	// const {
	// 	movie: { id, backdrop, path, title, overview },
	// } = props;

	const backdropPath = ``;
}
