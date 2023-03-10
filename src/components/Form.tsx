import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
// components
import Error from './Error';
// hooks
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
// interfaces
import { FormInterface } from './components.interfaces';

const Button = styled.input`
	font-family: 'Roboto', sans-serif;
	margin-top: 1.5rem;
	margin-bottom: 10%;
	font-weight: bold;
	font-size: 1rem;
	padding: 0.5rem;
	background-color: #66a2fe;
	border: none;
	width: 100%;
	border-radius: 5px;
	color: #fff;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: #326ac0;
		cursor: pointer;
	}
`;

const FormComponent = styled.form``;

const CURRENCY = [
	{ code: 'USD', name: 'USD Dolar' },
	{ code: 'EUR', name: 'Euro' },
	{ code: 'MXN', name: 'Mexican Peso' },
	{ code: 'ARG', name: 'Argentine Peso' },
	{ code: 'GBP', name: 'Pound Sterling' },
];

export default function Form({
	saveCurrency,
	saveCryptoCurrency,
}: FormInterface) {
	const [error, setError] = useState(false);
	const [cryptolist, setCryptoList] = useState<
		{
			CoinInfo: {
				Id: string;
				Name: string;
				FullName: string;
			};
		}[]
	>([]);
	const [currency, SelectCurrency] = useCurrency(
		'Choose your currency',
		CURRENCY[0].code,
		CURRENCY
	);
	const [cryptoCurrency, SelectCryptoCurrency] = useCrypto(
		'Choose your cryptocurrency',
		cryptolist
	);

	const quoteCurrency = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (currency === '' || cryptoCurrency === '') {
			return;
		}

		setError(false);
		saveCurrency(currency);
		saveCryptoCurrency(cryptoCurrency);
	};

	useEffect(() => {
		const consultAPI = async () => {
			try {
				const url =
					'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
				const result = await axios.get(url);
				setCryptoList(result.data.Data);
			} catch (e) {
				setError(true);
			}
		};
		consultAPI();
	}, []);

	return (
		<FormComponent onSubmit={quoteCurrency}>
			<SelectCurrency />
			<SelectCryptoCurrency />
			<Button type='submit' value='Calculate' />
			{error ? <Error message='An error has occurred.' /> : null}
		</FormComponent>
	);
}
