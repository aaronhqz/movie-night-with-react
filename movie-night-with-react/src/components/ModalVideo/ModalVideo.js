import React, { useState, useEffect } from 'react';
import './ModalVideo.scss';

//Dependencies
import ReactPlayer from 'react-player';
import { Modal } from 'antd';

export default function ModalVideo(props) {
	const { videoKey, videoPlatform, isOpen, close } = props;

	const [videoURL, setVideoURL] = useState(null);

	useEffect(() => {
		switch (videoPlatform) {
			case 'YouTube':
				setVideoURL(`https://youtu.be/${videoKey}`);
				break;
			case 'Vimeo':
				setVideoURL(`https://vimeo.com/${videoKey}`);
				break;
			default:
				break;
		}
	}, [videoKey, videoPlatform]);

	console.log(
		`#LogMoviePlatform: La plataforma de la película es: ${videoPlatform}`
	);

	return (
		<Modal
			className='modal-video'
			open={isOpen}
			centered
			onCancel={close}
			footer={false}
			destroyOnClose={true}
		>
			<ReactPlayer url={videoURL} controls />
		</Modal>
	);
}
