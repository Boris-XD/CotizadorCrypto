import styled from "@emotion/styled"
import { useState } from "react";

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 0.7rem;

`;

const useSelectCoins = (label, options) => {

    const [ state, setState ] = useState(''); 

    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState(e.target.value) }
            >
                <option value="">- Choice -</option>
                {
                    options.map((coin) => (
                        <option
                            key={coin.id}
                            value={coin.id}
                        >
                            {coin.name}
                        </option>
                    ))
                }
            </Select>
        </>
    );

    return [ state, SelectCoins ]
}

export default useSelectCoins