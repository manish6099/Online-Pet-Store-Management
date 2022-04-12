import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Footer from '../PageDesign/Footer'
import Navbar from '../PageDesign/Navbar'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  margin: 3px;
  position: relative;
    background-color: white;
background-size: cover;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    background-color: white;
`

const Title = styled.h1`
    flex:1;
    color:green;
    margin:30px;
    width:auto
    justify-content: center;
    color:black;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 0;

`;

const AdminMenu = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
&:hover ${Info}{
    opacity: 1;
`
const Hrow = styled.div`
    display:flex;
    margin:10px;
    `

const Selector = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Admin=()=>{

    const navigate = useNavigate();

    return(
        <>
        <Navbar />
        
        <Container>
	        
            <Title>Admin Dashboard</Title>
                <Hrow>
                    <AdminMenu onClick={()=>navigate("/pets")}>
                        <Image src="Images/Admin_Page/ViewPets.jpg" />
                        <Info>
                            <Selector>View Pets</Selector>
                        </Info>
                    </AdminMenu>
                    <AdminMenu onClick={()=>navigate("/pets/add")}>
                    <Image src="Images/Admin_Page/AddPet.jpg" />
                        <Info>
                            <Selector>Add Pets</Selector>
                        </Info>
                    </AdminMenu>
			        <AdminMenu onClick={()=>navigate("/customers")}>
                    <Image src="Images/Admin_Page/Customer.jpg" />
                        <Info>
                            <Selector>View Customers</Selector>
                        </Info>
                    </AdminMenu>
                </Hrow>
                <Hrow>
			        <AdminMenu onClick={()=>navigate("/orders")}>
                        <Image src="Images/Admin_Page/Order.jpg" />
                        <Info>
                            <Selector>View Orders</Selector>
                        </Info>    
                    </AdminMenu>	
                    <AdminMenu onClick={()=>navigate("/petcategory")}>
                    <Image src="Images/Admin_Page/ViewCategory.png" />
                        <Info>
                            <Selector>View Pet Category</Selector>
                        </Info>
                    </AdminMenu>
			        <AdminMenu onClick={()=>navigate("/petcategory/add")}>
                    <Image src="Images/Admin_Page/AddCategory.jpg" />
                        <Info>
                            <Selector>Add Pet Category</Selector>
                        </Info>    
                    </AdminMenu>  	
                </Hrow>
                <Hrow></Hrow>
                              
            
                        
        </Container>
        <Footer />
        </>
    );

}

export default Admin;