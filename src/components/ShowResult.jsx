import styled from "@emotion/styled"

const Container = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
`;

const Text = styled.p`
    font-size: 1.2rem;
    span {
        font-weight: 700;
    }
`;

const Coin = styled.p`
    font-size: 1.8rem;
    span {
        font-weight: 700;
    }
`;

const Imagen = styled.img`
    display: block;
    width: 100px;
`;

const ShowResult = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result
    return (
        <Container>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="image cryptocoin" />
            <div>
                <Text>El Precio es de : <span>{PRICE}</span></Text>
                <Text>Precio más alto del día: <span>{HIGHDAY}</span></Text>
                <Text>Precio más bajo del día: <span>{LOWDAY}</span></Text>
                <Text>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
            </div>
        </Container>
    )
}

export default ShowResult