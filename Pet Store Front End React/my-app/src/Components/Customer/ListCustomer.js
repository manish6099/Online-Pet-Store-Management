import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import CustomerServices from "../../Services/CustomerServices";
import styled from "styled-components";
import Footer from '../PageDesign/Footer'
import Navbar from '../PageDesign/Navbar'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 10vh;
  height: 10vh;
`;

const Title = styled.h1`
    flex:1;
    color:green;
    margin:30px;
    width:auto
    justify-content: center;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #008CBA;
    color:white;
    cursor: pointer;
    font-weight: 600;
`;

const Row = styled.div`
    display:flex;
    flex-direction:row;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin:10px;
    align-items: center;
    justify-content: center;
`
const Hrow = styled.div`
    display:flex;
    flex-direction:row;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin:10px;
    align-items: center;
    justify-content: center;
    font-size:20px;
    font-color:red;
    background-color:cyan;

    `

    const Linkbutton=styled.div`
    flex:1;
    border:none;
    height:2vh;
    width:21vh;
    padding: 10px;
    background-color: red;
    color:white;
    cursor: pointer;
    font-weight: 600;
    margin:30px;
    `

const Col = styled.div`
    flex:1;
    margin:10px;
    align-items: center;
`

const ListCustomer=()=>{
    const [customers, setCustomers] = useState([]);

    const init=()=>{
        CustomerServices.getAll()
        .then(response=>{
            console.log('Printing customer data', response.data);
            setCustomers(response.data);
        })
        .catch(error=>{
            console.log('Error in loading customer information', error);
        })
    }

    useEffect(()=>{
        init();
    },[]);

    const handleDelete=(id)=>{
        console.log('Printing customer id', id);
        CustomerServices.remove(id)
        .then(response=>{
            console.log('Customer deleted successfully', response.data);
            init();
        })
        .catch(error=>{
            console.log('Error in deleting Customer data', error);
        })
    }

    return(
        
        <Container>
            <Navbar />
            <Title>LIST OF CUSTOMERS</Title>
                
                    <Linkbutton>
                        <Link to="/signup">Add New Customer</Link>
                    </Linkbutton>
                
                
                       <Hrow>
                            <Col>Customer Id</Col>
                            <Col>Image</Col>
                            <Col>Customer Name</Col>
                            <Col>Customer Email</Col>
                            <Col>Mobile</Col>
                            <Col>Registration Date</Col>
                            <Col>Address</Col>
                            <Col>Update</Col>
                            <Col>Delete</Col>
                        </Hrow>
                    
                    
                        {
                            customers.map(Customers=>(
                                <Row>
                                    <Col>{Customers.id}</Col>
                                    <Col><Image src= {Customers.customerImage}/></Col>
                                    <Col>{Customers.customerFirstName} {Customers.customerLastName}</Col>
                                    <Col>{Customers.customerEmail}</Col>
                                    <Col>{Customers.customerMobile}</Col>
                                    <Col>{Customers.customerRegDate}</Col>
                                    <Col>{Customers.customerAddress}</Col>
                               
                                    <Col><Link to={`/customers/update/${Customers.id}`}>Update</Link></Col>
                                    <Col><Button onClick={() => {
                                            handleDelete(Customers.id);
                                                    }} > Delete </Button> </Col>
                                   </Row>
                               
                            ))
                        }
                        <Footer />
                        
        </Container>
    );

}

export default ListCustomer;