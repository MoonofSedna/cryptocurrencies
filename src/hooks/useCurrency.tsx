import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
	font-family: 'Roboto', sans-serif;
	font-weight: 600;
	color: #fff;
	font-size: 1rem;
	display: block;
	letter-spacing: 1px;
	margin: 0.5rem 0;
`;

const Select = styled.select`
	width: 100%;
	display: block;
	font-size: 1rem;
	padding: 0.8rem;
	border-radius: 10px;
	border: none;
`;

const useCurrency = (
	label: string,
	stateInitial: string,
	options: {
		code: string;
		name: string;
	}[]
) => {
	const [state, updateState] = useState(stateInitial);

	const Selected = () => (
		<>
			<Label>{label}</Label>
			<Select
				onChange={e => updateState(e.target.value)}
				defaultValue={options[0].code}
				value={state}
			>
				{options.map(option => (
					<option key={option.code} value={option.code}>
						{option.name}
					</option>
				))}
			</Select>
		</>
	);

	return [state, Selected, updateState] as const;
};

export default useCurrency;
