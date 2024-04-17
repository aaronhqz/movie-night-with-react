import React from 'react';
import './Pagination.scss';

//Dependencies:
import Pagination from 'rc-pagination';

export default function PaginationMovies(props) {
	const { currentPage, totalItems, onChangePage } = props;

	return (
		<Pagination
			className='pagination-movies'
			current={currentPage}
			total={totalItems}
			pageSize={20}
			onChange={onChangePage}
		/>
	);
}
