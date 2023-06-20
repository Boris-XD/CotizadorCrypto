import styled from "@emotion/styled"
import useSelectCoins from "../hooks/useSelectCoins";
import { coins } from "../data/monedas";
import { useEffect } from "react";

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
    const [ coin, SelectCoins ] = useSelectCoins("Seleccione su moneda", coins);

    useEffect(() => {

        const requestApi = async () => {
            const cryptoUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=1&tsym=${coin}`;
            const cryptoRequest = await fetch(cryptoUrl);
            const response = await cryptoRequest.json();
            console.log(response.Data);
        }

        requestApi();
    }, [coin]);

    return (
        <form action="">
            <SelectCoins />
            <InputSubmit
                type="submit"
                value="Cotizar"
            />
            {coin}
        </form>
    )
}

export default Form