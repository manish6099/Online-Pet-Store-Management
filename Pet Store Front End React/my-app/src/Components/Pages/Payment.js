import { useNavigate } from "react-router-dom"
import styled from 'styled-components'

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #F1C40F;
    color:black;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
`;

const Container = styled.div`
    margin:50px;
`

const Payment = () => {
    const navigate = useNavigate();

    const goBack = () => navigate("/");

    return (
        <Container>
            <h1>Payment</h1>
            <br />
            <p>Your payment is processing...</p>
            <br />
            <br />
            <Button onClick={goBack}>Home</Button>
           
        </Container>
    )
}

export default Payment;