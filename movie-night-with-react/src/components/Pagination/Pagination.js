import React from 'react';
import './Pagination.scss';

//Dependencies:
import Pagination from 'rc-pagination';

export default function PaginationMovies(props) {
	const { currentpage, totalItems, onChangePage } = props;

	return (
		<Pagination
			className='pagination-movies'
			current={currentpage}
			total={totalItems}
			pageSize={20}
			onChange={onChangePage}
		/>
	);
}
