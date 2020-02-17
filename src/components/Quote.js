import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ResultDiv = styled.div`

padding: 2rem;

`;
const Info = styled.p`

    font-size: 1.3rem;
    color: #fff;

    span{

        font-weight:bold;
        color: #66a2fe;
    }

`;

const Price = styled.p`

    font-size: 2rem;
    color: #66a2fe;

    span{
        font-weight: bold;
    }

`;

const Quote = ({result}) => {

    if(Object.keys(result).length === 0) return null;
   
    return (  
        < ResultDiv>
            <Price>The price is: <span>{result.PRICE}</span></Price>
            <Info>The highest price of the day: <span>{result.HIGHDAY}</span></Info>
            <Info>The lowest price of the day: <span>{result.LOWDAY}</span></Info>
            <Info>Variation of the last 24 Hrs: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Last update: <span>{result.LASTUPDATE}.</span></Info>
        </ ResultDiv>
    );
}

Quote.propTypes = {
    result: PropTypes.object.isRequired
}
export default Quote;