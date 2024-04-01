import React from 'react';
import useFetch from '../hooks/useFetch';

//Files:
import { API_KEY, URL_API } from '../utils/constants';

//Componentes:
import SliderMovies from '../components/SliderMovies';

export default function Home() {
	//useEffect:
	const newMovies = useFetch(
		`${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
	);

	return (
		<>
			<SliderMovies newMovies={newMovies} />
		</>
	);
}
