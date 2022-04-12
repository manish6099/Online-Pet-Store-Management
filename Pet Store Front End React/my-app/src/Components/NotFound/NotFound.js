import styled from "styled-components";
import Footer from '../PageDesign/Footer'
import Navbar from '../PageDesign/Navbar'

const NotFound = () => {

    const Container = styled.div`
        display: flex;
        flex:1;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
`;

const Info = styled.h1`
    color:black;
    margin: 10px;
    margin-right:30%;
    
`;

const Image = styled.img`
  margin:20px;
  top:0;
  left:0;
  height: 50%;
  width:50%;
`;

    return (
        <>
        <Navbar />
        <Container>
            
            <Image src="Images/notfound.jpg"/>
            <Info>
                Error: This page could not be found
            </Info>
            
        </Container>
        <Footer />
        </>
    );
}
 
export default NotFound;