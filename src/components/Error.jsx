import styled from "@emotion/styled"

const Text = styled.div`
    background-color: #b9251d;
    color: #fff;
    padding: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 0.5rem;
`;

const Error = ({ children }) => {
  return (
    <Text>
        {children}
    </Text>
  )
}

export default Error