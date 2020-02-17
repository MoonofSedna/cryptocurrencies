import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const MessageError = styled.p`

    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    letter-spacing: 2px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;

`;



const Error = ({message}) => {
    return ( 
        < MessageError>{message}</MessageError>
     );
}

Error.propTypes = {
    message: PropTypes.string.isRequired
}
 
export default Error;