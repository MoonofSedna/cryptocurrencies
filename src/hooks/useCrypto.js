import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';



    const Label = styled.label`

        font-family: 'Bebas Neue', cursive;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2rem;
        margin-top: 2rem;
        display: block;
        letter-spacing: 1px;

        @media screen and (max-width: 767px) {
        
        font-size: 1.5rem;
        
        }
    `;

    const Select= styled.select`

        width: 100%;
        display: block;
        font-size: 1rem;
        padding: .8rem;  
        border-radius: 10px;
        border: none;
    `;

    const useCrypto = (label, stateInitial, options) => {


        //Custom hook State

        const [state, updateState] = useState(stateInitial);
    
        const SelectCrypto = () => (

            <Fragment> 
                <Label>{label}</Label>
                <Select
                    onChange= {e => updateState(e.target.value)}
                    value={state}
                > 
                    <option value="">---Select---</option>
                    {options.map(option => ( 
                        <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName} 
                        </option>    
                    ))}
                </Select>
            </Fragment>

        );

         //Return state, interface and function that modifies the state

        return [state, SelectCrypto, updateState];
    }
 
export default useCrypto;