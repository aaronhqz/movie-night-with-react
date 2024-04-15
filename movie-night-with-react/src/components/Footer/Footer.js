import React from 'react';
import './Footer.scss';

//Dependencies
import { Layout } from 'antd';

export default function Footer() {
	const { Footer } = Layout;

	return (
		<Footer className='footer'>
			<p>Hola desde el footer</p>
		</Footer>
	);
}
