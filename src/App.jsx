import styled from "@emotion/styled"
import CryptoCoins from "./assets/imagen-criptos.png"
import Form from "./components/Form";
import { useEffect, useState } from "react";

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`; 

const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 35px;
    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66A2FE;
        display: block;
        margin: 10px auto 0 auto;
    }
`;

const requestCrypto = async ({ coin, crypto }) => {
    const requestUrl = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
    const response = await fetch(requestUrl);
    const result = await response.json();
    return result.DISPLAY[crypto][coin];
}

const App = () => {
    
    const [ coins, setCoins ] = useState({});
    const [ quotation, setQuotation ] = useState({});
    
    useEffect(() =>{
        if(Object.keys(coins).length > 0){
            
            const quotationCrypto = async () => {
                setQuotation(await requestCrypto(coins));
            }

            quotationCrypto();
            console.log(quotation)
        }
    }, [coins]);

    return (
        <Contenedor>
            <Imagen 
                src={CryptoCoins}
                alt="Logo Criptomonedas"
            />
            <div>
                <Heading>Cotiza Criptomonedas al instante</Heading>
                <Form
                    setCoins={setCoins}
                />
            </div>
        </Contenedor>
    )
}

export default App