import styled from "@emotion/styled"
import CryptoCoins from "./assets/imagen-criptos.png"
import Form from "./components/Form";

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

const App = () => {
  return (
    <Contenedor>
        <Imagen 
            src={CryptoCoins}
            alt="Logo Criptomonedas"
        />
        <div>
            <Heading>Cotiza Criptomonedas al instante</Heading>
            <Form />
        </div>
    </Contenedor>
  )
}

export default App