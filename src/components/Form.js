import React, {useEffect, useState} from 'react';
import Error from './Error';
import styled from '@emotion/styled';
import axios from 'axios';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import PropTypes from 'prop-types';

const Button =styled.input `

    margin-top: 1.5rem;
    margin-bottom: 10%;
    font-weight: bold;
    font-size: 1rem;
    padding: .5rem;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 5px;
    color: #FFF;
    transition: background-color  .3s ease;

    &:hover {
        background-color: #326Ac0;
        cursor:pointer;
    }
`;

const Form = ( {saveCurrency, 
    saveCryptoCurrency}) => {

    //**** State cryptocurrency (list) ****//

    const [cryptolist, saveCrypto] = useState([]);

    const CURRENCY   = [
        {code: 'USD', name: 'USD Dolar'},
        {code: 'EUR', name: 'Euro'},
        {code: 'MXN', name: 'Mexican Peso'},
        {code: 'ARG', name: 'Argentine Peso'},
        {code: 'GBP', name: 'Pound Sterling'}
        
    ]

    //**** Use useCurrency ****//

    const [currency, SelectCurrency] =useCurrency('Choose your currency', '', CURRENCY);


    const [error, saveError] = useState(false);

    //****Use useCrypto****//

    const [cryptocurrency, SelectCryptoCurrency] = useCrypto('Choose your cryptocurrency', '', cryptolist);

    //**** Run useEffect ****//

    useEffect(() => {

        const consultAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
           
            const result = await axios.get(url);

            saveCrypto(result.data.Data);
       
        }

        consultAPI();

    }, []);

    //**** User submit ****//

    const quoteCurrency = e =>{
        e.preventDefault();

        //Validate

        if( currency === '' || cryptocurrency === ''){
            saveError(true);
            return;
        }

        //Send data to the main component

        saveError(false);
        saveCurrency(currency);
        saveCryptoCurrency(cryptocurrency);
    }



    return ( 
        <form
        onSubmit={quoteCurrency}>
            {error ? <Error message='An error has occurred. All fields are required.' />  : null}
            <SelectCurrency />
            <SelectCryptoCurrency />
            <Button 
                type="submit"
                value="Calculate"/>
        </form>
     );
}

Form.propTypes = {
    saveCurrency:PropTypes.func.isRequired,
    saveCryptoCurrency:PropTypes.func.isRequired
}
 
export default Form;