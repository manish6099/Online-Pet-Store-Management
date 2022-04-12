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
    margin-top:30px;
`;

const Container = styled.div`
    margin:50px;
`

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <Container>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            
            <Button onClick={goBack}>Go Back</Button>
           
        </Container>
    )
}

export default Unauthorized