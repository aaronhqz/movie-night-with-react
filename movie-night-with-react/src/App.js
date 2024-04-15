import React from 'react';

//Dependencies
import { Layout, Header } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import MenuTop from './components/MenuTop';

//Pages
import Home from './pages/home';
import Error404 from './pages/error404';
import Movie from './pages/movie';
import NewMovies from './pages/newMovies';
import PopularMovies from './pages/popularMovies';
import Search from './pages/search';

export default function App() {
	const { Header, Content } = Layout;

	return (
		<Layout>
			<Router>
				<Header style={{ zIndex: 1 }}>
					<MenuTop />
				</Header>

				<Content>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/new-movies' element={<NewMovies />} />
						<Route path='/movie/:id' element={<Movie />} />
						<Route
							path='/popular-movies'
							element={<PopularMovies />}
						/>
						<Route path='/search' element={<Search />} />
						<Route path='*' element={<Error404 />} />
					</Routes>
				</Content>
			</Router>
		</Layout>
	);
}
