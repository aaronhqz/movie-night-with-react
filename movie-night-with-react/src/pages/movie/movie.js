import React from 'react';
import './movie.scss';

//Dependencies
import { Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';

//Files
import useFetch from '../../hooks/useFetch';
import { URL_API, API_KEY, IMAGE_URL } from '../../utils/constants';

//Components
import Loading from '../../components/Loading';

export default function Movie() {
	const { id } = useParams();
	const movieInfo = useFetch(
		`${URL_API}/movie/${id}?api_key=${API_KEY}&language=es-LA`
	);

	if (movieInfo.loading || !movieInfo.result) {
		return <Loading />;
	}

	console.log(movieInfo);

	return <RenderMovie movieInfo={movieInfo.result} />;
}

//Internal Component
function RenderMovie(props) {
	const {
		movieInfo: { backdrop_path, poster_path },
	} = props;

	const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

	return (
		<div
			className='movie'
			style={{ backgroundImage: `url(${backdropPath})` }}
		>
			<div className='movie__dark' />

			<Row>
				<Col span={8} offset={3} className='movie__poster'>
					<MoviePoster image={poster_path} />
				</Col>

				<Col span={8} className='movie__info'>
					<MovieInfo movieInfo={props.movieInfo} />
				</Col>
			</Row>
		</div>
	);
}

//Internal Component
function MoviePoster(props) {
	const { image } = props;

	const posterPath = `https://image.tmdb.org/t/p/original${image}`;

	return <div style={{ backgroundImage: `url(${posterPath})` }}></div>;
}

function MovieInfo(props) {
	const {
		movieInfo: { title, id, release_date, overview, genres },
	} = props;

	return (
		<>
			<div className='movie__info-header'>
				<h1>
					{title}
					<span>
						{moment(release_date, 'YYYY-MM-DD').format('YYYY')}
					</span>
				</h1>

				<button> Ver Trailer </button>
			</div>

			<div className='movie__info-content'>
				<h3>Sinopsis</h3>
				<p>{overview}</p>

				<h3>Generos:</h3>
				<ul>
					{genres.map((genres) => (
						<li key={genres.id}> {genres.name} </li>
					))}
				</ul>
			</div>
		</>
	);
}
