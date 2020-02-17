import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';



const Label = styled.label`

    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 2rem;
    margin-top: 2rem;
    display: block;

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

const useCurrency = (label, stateInitial, options) => {

    //State del custom hook

    const [state, updateState] = useState(stateInitial);
   
    const Selected = () => (

        <Fragment> 
            <Label>{label}</Label>
            <Select
            onChange= {e => updateState(e.target.value)}
            value={state}> 
                <option value="">---Select---</option>
                 {options.map(option => ( 

                    <option key={option.code} value={option.code}>{option.name} </option>
                          
                 ))}
            </Select>
        </Fragment>

    );

    //Retornar el state, interfaz y funcion que modifica el state

    return [state, Selected, updateState];
}
 
export default useCurrency;