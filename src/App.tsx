import { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from '@emotion/styled';
// components
import Quote from './components/Quote';
import Spinner from './components/Spinner';
import Form from './components/Form';
// images
import DesktopImage from './assets/images/cryptocurrency.png';
import MobileImage from './assets/images/img1.png';

const Content = styled.div`
	margin-top: 10%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	grid-row-gap: 0px;
	max-width: 900px;
	padding: 30px;
	@media screen and (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, auto, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`;

const Imagen = styled.img`
	width: 100%;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const ImagenMobile = styled.img`
	width: 70%;
	max-width: 300px;
	margin-top: 5rem;
	@media screen and (min-width: 767px) {
		display: none;
	}
`;

const Heading = styled.h1`
	font-family: 'Merriweather', serif;
	color: #fff;
	text-align: left;
	font-weight: 700;
	font-size: 2.5rem;
	margin-bottom: 3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 760px) {
		margin-top: 15%;
		text-align: center;
		font-size: 2rem;
		&::after {
			content: '';
			margin: auto;
			width: 100px;
			height: 6px;
			background-color: #66a2fe;
		}
	}
	&::after {
		content: '';
		width: 25%;
		height: 6px;
		background-color: #66a2fe;
		display: block;
	}
`;

export default function App() {
	const [currency, setCurrency] = useState('');
	const [cryptoCurrency, setCryptoCurrency] = useState('');
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const QuoteCryptocurrency = async () => {
			if (currency === '') return;

			setLoading(true);

			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
			const result = await Axios.get(url);

			setTimeout(() => {
				setLoading(false);
				setResult({
					...result.data.DISPLAY[cryptoCurrency][currency],
					currency,
					cryptoCurrency,
				});
			}, 3000);
		};

		QuoteCryptocurrency();
	}, [currency, cryptoCurrency]);

	const component = loading ? <Spinner /> : <Quote result={result} />;

	return (
		<Content className='row'>
			<div>
				<Imagen src={DesktopImage} alt='cryptoimage' />
				<ImagenMobile src={MobileImage} alt='cryptoimage' />
			</div>
			<div>
				<Heading>Quote Cryptocurrencies Instantly!</Heading>
				<Form
					saveCurrency={(x: string) => setCurrency(x)}
					saveCryptoCurrency={(x: string) => setCryptoCurrency(x)}
				/>
				{component}
			</div>
		</Content>
	);
}
