import styled from "@emotion/styled"

const Label = styled.label`
    color: #fff;
`;

const useSelectCoins = (label, options) => {

    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
            <select>
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
            </select>
        </>
    );

    return [ SelectCoins ]
}

export default useSelectCoins