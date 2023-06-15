import styled from "@emotion/styled"
import useSelectCoins from "../hooks/useSelectCoins";
import { coins } from "../data/monedas";

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
    &:hover {
        background-color: #3b3fc2;
        cursor: pointer;
    }
`;

const Form = () => {
    const [ SelectCoins ] = useSelectCoins("Seleccione su moneda", coins);
    return (
        <form action="">
            <SelectCoins />
            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Form