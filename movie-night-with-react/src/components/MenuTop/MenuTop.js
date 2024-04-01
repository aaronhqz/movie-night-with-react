import React from 'react';
import './MenuTop.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

//Dependencies
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import Item from 'antd/es/list/Item';

export default function MenuTop() {
	const { Item } = Menu;
	return (
		<div className='menu-top'>
			<div className='menu-top__logo'>
				<Logo />
			</div>

			<Menu
				theme='dark'
				mode='horizontal'
				defaultSelectedKeys={['1']}
				style={{ lineHeight: '64px' }}
			>
				<Item key='1'>
					<Link to='/'>Home</Link>
				</Item>

				<Item key='2'>
					<Link to='/new-movies'>Últimos Lanzamientos</Link>
				</Item>

				<Item key='3'>
					<Link to='/popular-movies'>Películas populares</Link>
				</Item>

				<Item key='4'>
					<Link to='/search'>Buscar películas</Link>
				</Item>
			</Menu>
		</div>
	);
}
