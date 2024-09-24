import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Footer from './Footer';
import '../MatrixRain.css'; // Ensure this path is correct

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText((prevText) => prevText + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='area relative z-0 w-screen h-screen matrix-rain'>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2 transparent-light-green-bg'>
						Hello, I'm&nbsp;<span className='font-extrabold'>{text}</span>
					</h1>
					<p className='mt-3 text-xl transparent-light-green-bg'>
						I love to learn and build scalable and optimized full stack applications.
					</p>
				</div>      
			</div>
			<Footer/>
		</div>	
	);
}

export default Home;