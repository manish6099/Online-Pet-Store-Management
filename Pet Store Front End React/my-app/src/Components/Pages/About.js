
import styled from "styled-components"
import Footer from '../PageDesign/Footer'
import Navbar from '../PageDesign/Navbar'

const Container = styled.div`
`

const Title = styled.h1`
    flex:1;
    color:teal;
`
const SubTitle = styled.h2`
    flex:1;
    color:#C4A484;
    padding:10px;
`

const P = styled.p`
    padding:20px;
    text-align: justify;
    text-justify: inter-word;
`
const Programmer = styled.div`
    margin:10px;
`
const Supporter = styled.div`
    margin:10px;
`
const Left=styled.div`
    margin:20px;
    flex:1;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`
const Right=styled.div`
    flex:1;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin:20px;
`


const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    margin:20px;
`

const Abount=()=>{


    return(
        <Container>
            <Navbar />
            <Wrapper>

            <Title>About Pet Store Management</Title>
            <hr/>
                    <Left>
                        <SubTitle>Programmer & Designer</SubTitle>
                        <Programmer>Manish Kumar (210940120110)</Programmer>
                        <Programmer>Subodh Dewangan (210940120205)</Programmer>
                    </Left>
                    <Right>
                        <P>
                            Online pet management store to buy and sell pets from website. There are two users, Admin and Customers. Admin
                            will perform CRUD operation for data with respect to pets & customers. Customers can view and buy from
                            available pets. Technologies we have used are Java for business logic being OOPs and platform independent
                            language, React for dynamic pages to facilitate UI experience and MySQL as backend to facilitates effective
                            management of databases.
                        </P>
                    </Right>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Abount;