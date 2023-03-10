import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
	font-family: 'Roboto', sans-serif;
	font-weight: 600;
	color: #fff;
	font-size: 1rem;
	display: block;
	letter-spacing: 1px;
	margin: 0.8rem 0 0.5rem 0;
`;

const Select = styled.select`
	width: 100%;
	display: block;
	font-size: 1rem;
	padding: 0.8rem;
	border-radius: 10px;
	border: none;
`;

const useCrypto = (
	label: string,
	options: {
		CoinInfo: {
			Id: string;
			Name: string;
			FullName: string;
		};
	}[]
) => {
	const [state, updateState] = useState('BTC');

	const SelectCrypto = () => (
		<>
			<Label>{label}</Label>
			<Select onChange={e => updateState(e.target.value)} value={state}>
				{options.map(option => (
					<option
						key={option.CoinInfo.Id}
						value={option.CoinInfo.Name}
					>
						{option.CoinInfo.FullName}
					</option>
				))}
			</Select>
		</>
	);

	return [state, SelectCrypto, updateState] as const;
};

export default useCrypto;
