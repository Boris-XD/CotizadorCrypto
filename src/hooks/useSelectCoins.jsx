import styled from "@emotion/styled"

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

    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
            <Select>
                <option value="">- Choice -</option>
                {
                    options.map((coin) => (
                        <option
                            key={coin.id}
                            value={coin.name}
                        >
                            {coin.name}
                        </option>
                    ))
                }
            </Select>
        </>
    );

    return [ SelectCoins ]
}

export default useSelectCoins