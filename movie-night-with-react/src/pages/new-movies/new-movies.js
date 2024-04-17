import React, { useState, useEffect } from 'react';
import './new-movies.scss';

//Dependencies
import { Row, Col, Pagination } from 'antd';

//Components
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import MovieCatalog from '../../components/MovieCatalog';
import PaginationMovies from '../../components/Pagination';

//Files:
import { API_KEY, URL_API } from '../../utils/constants';

export default function NewMovies() {
	const [movieList, setMovieList] = useState([]);
	const [page, setpage] = useState(1);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-LA&page=${page}`
			);

			const movies = await response.json();

			setMovieList(movies);
		})();
	}, [page]);

	const onChangePage = (page) => {
		setpage(page);
	};

	return (
		<Row className='new-movies'>
			<Col className='col-header' span='24'>
				<h1>Últimos Lanzamientos</h1>
			</Col>

			{movieList.results ? (
				<Row>
					<Col span={24}>
						<MovieCatalog movies={movieList} />
					</Col>
					<Col span={24}>
						<PaginationMovies
							currentPage={movieList.page}
							totalItems={movieList.totalResults}
							onChangePage={onChangePage}
						/>
					</Col>
				</Row>
			) : (
				<Col span={24}>
					<Loading />
				</Col>
			)}

			<Col span='24'>
				<Footer />
			</Col>
		</Row>
	);
}
