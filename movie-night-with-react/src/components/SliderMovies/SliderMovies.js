import React from 'react';
import './SliderMovies.scss';

//Dependencies:
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

//Components
import Loading from '../Loading';

//Files
import { IMAGE_URL } from '../../utils/constants';

export default function SliderMovies(props) {
	const { movies } = props;

	if (movies.loading || !movies.result) {
		return <Loading />;
	}

	const { results } = movies.result;

	//console.log(props.movies);

	return (
		<Carousel autoplay className='slider-movies'>
			{results.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</Carousel>
	);
}

//Internal component:
function Movie(props) {
	const {
		movie: { id, backdrop_path, path, title, overview },
	} = props;

	const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

	return (
		<div
			className='slider-movies__movie'
			style={{ backgroundImage: `url(${backdropPath})` }}
		>
			<div className='slider-movies__movie-info'>
				<div>
					<h2> {title} </h2>
					<h2> {overview} </h2>
					<Link to={`/movie/${id}`}>
						<Button type='primary'> Ver más</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
