import styled from "@emotion/styled"
import useSelectCoins from "../hooks/useSelectCoins";
import { coins } from "../data/monedas";
import { useEffect, useState } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
    width: 100%;
    padding: 0.8rem;
    background-color: #5e61b4;
    border: none;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.2rem;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 1.5rem;
    &:hover {
        background-color: #3b3fc2;
        cursor: pointer;
    }
`;

const Form = () => {
    const [ errors, setErrors ] = useState(false);
    const [cryptoCoin, setCryptoCoin] = useState([]);
    const [ coin, SelectCoins ] = useSelectCoins("Seleccione su moneda", coins);
    const [ crypto, SelectCrypto ] = useSelectCoins("Seleccione la crypto moneda", cryptoCoin);

    useEffect(() => {

        const requestApi = async () => {
            const cryptoUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const cryptoRequest = await fetch(cryptoUrl);
            const response = await cryptoRequest.json();
            const coins = response.Data.map( coin => ({
                id: coin.CoinInfo.Name,
                name: coin.CoinInfo.FullName
            }))

            setCryptoCoin(coins);
        }

        requestApi();
    }, []);

    const onHandleSubmit = e => {
        e.preventDefault();
        if ([coin, crypto].includes('')){
            setErrors(true);
            return;
        }
        setErrors(false);
        
    }

    return (
        <form
            onSubmit={onHandleSubmit}
        >
            {
                errors && <Error>Ambos campos son necesarios</Error>
            }
            <SelectCoins />
            <SelectCrypto />
            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Form