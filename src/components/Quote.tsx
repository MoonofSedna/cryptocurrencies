import styled from '@emotion/styled';
// interfaces
import { QuoteInterface } from './components.interfaces';

const Info = styled.p`
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Roboto', sans-serif;
	font-weight: 600;
	span {
		font-weight: bold;
		color: #66a2fe;
	}
`;
const Price = styled.p`
	font-size: 1.6rem;
	color: #66a2fe;
	font-family: 'Roboto', sans-serif;
	font-weight: 600;
	span {
		font-weight: bold;
		font-weight: 600;
	}
`;

export default function Quote({ result }: QuoteInterface) {
	if (!result) return null;

	return (
		<div>
			<Price>
				{result.cryptoCurrency} - {result.currency}:{' '}
				<span>{result.PRICE}</span>
			</Price>
			<Info>
				The highest price of the day: <span>{result.HIGHDAY}</span>
			</Info>
			<Info>
				The lowest price of the day: <span>{result.LOWDAY}</span>
			</Info>
			<Info>
				Variation of the last 24 Hrs:{' '}
				<span>{result.CHANGEPCT24HOUR}</span>
			</Info>
			<Info>
				Last update: <span>{result.LASTUPDATE}.</span>
			</Info>
		</div>
	);
}
