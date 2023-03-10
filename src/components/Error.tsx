import styled from '@emotion/styled';
// interfaces
import { ErrorInterface } from './components.interfaces';

const MessageError = styled.p`
	background-color: #b7322c;
	padding: 1rem;
	color: #fff;
	letter-spacing: 2px;
	font-size: 1.2rem;
	text-transform: uppercase;
	font-weight: bold;
	text-align: center;
	font-family: 'Roboto', sans-serif;
`;
export default function Error({ message }: ErrorInterface) {
	return <MessageError>{message}</MessageError>;
}
