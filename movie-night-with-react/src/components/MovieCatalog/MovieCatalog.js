import React from 'react';
import './MovieCatalog.scss';

//Dependencies
import { Col, Row, Card } from 'antd';
import { Link } from 'react-router-dom';

//Files:
import { IMAGE_URL } from '../../utils/constants';

export default function MovieCatalog(props) {
	const {
		movies: { results },
	} = props;

	return (
		<Row>
			{results.map((movie) => (
				<Col
					key={movie.id}
					xs={4}
					sm={12}
					md={8}
					lg={6}
					className='movie-catalog'
				>
					<MovieCard movie={movie} />
				</Col>
			))}
		</Row>
	);
}

function MovieCard(props) {
	const {
		movie: { id, title, poster_path },
	} = props;
	const { Meta } = Card;

	const posterPath = `${IMAGE_URL}/original${poster_path}`;

	return (
		<Link to={`/movie/${id}`}>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt={title} src={posterPath} />}
			>
				<Meta title={title} />
			</Card>
		</Link>
	);
}
