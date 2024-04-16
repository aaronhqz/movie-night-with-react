import React from 'react';
import useFetch from '../hooks/useFetch';

//Files:
import { API_KEY, URL_API } from '../utils/constants';

//Dependencies
import { Row, Col } from 'antd';

//Componentes:
import SliderMovies from '../components/SliderMovies';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer/Footer';

export default function Home() {
	//Movies URL
	const newMovies = useFetch(
		`${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-LA`
	);

	const popularMovies = useFetch(
		`${URL_API}/movie/popular?api_key=${API_KEY}&language=es-LA`
	);

	const topRatedMovies = useFetch(
		`${URL_API}/movie/top_rated?api_key=${API_KEY}&language=es-LA`
	);

	return (
		<>
			<SliderMovies movies={newMovies} />
			<Row>
				<Col span={12}>
					<MovieList
						title='Películas Populares'
						movies={popularMovies}
					/>
				</Col>
				<Col span={12}>
					<MovieList
						title='Películas Mas Votadas'
						movies={topRatedMovies}
					/>
				</Col>
			</Row>

			<Footer />
		</>
	);
}
