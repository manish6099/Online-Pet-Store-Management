import {useEffect, useState} from 'react';
import orderService from "../../Services/orderService";
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
    background-color:cyan
`
const Col = styled.div`
    flex:1;
    margin:10px;
    align-items: center;
`

const ListOrders=()=>{
    const [Order, setOrder] = useState([]);

    const init=()=>{
        orderService.getAll()
        .then(response=>{
            console.log('Printing customer data', response.data);
            setOrder(response.data);
        })
        .catch(error=>{
            console.log('Error in loading customer information', error);
        })
    }

    useEffect(()=>{
        init();
    },[]);

    const handleDelete=(id)=>{
        orderService.remove(id)
        .then(response=>{
            init();
        })
        .catch(error=>{
            console.log('Error in deleting order data', error);
        })
    }

    return(
        <Container>
            <Navbar />
            <Title>LIST OF ORDERS</Title>
                       <Hrow>
                            <Col>Order Id</Col>
                            <Col>Order By</Col>
                            <Col>Pet Ordered</Col>
                            <Col>Ordered Pet Breed</Col>
                            <Col>Order Date</Col>
                            <Col>Status</Col>
                            <Col>Delivery Date</Col>
                            <Col>Quantity</Col>
                            <Col>Amount</Col>
                            <Col></Col>
                        </Hrow>
                    
                    
                        {
                            Order.map(order=>(
                                <Row>
                                    <Col>{order.id}</Col>
                                    <Col>{order.custcart.custorders.customerFirstName} {order.custcart.custorders.customerLastName}</Col>
                                    <Col>{order.orderedpet.petCategoryRef.petCategoryName}</Col>
                                    <Col>{order.orderedpet.petBreed}</Col>
                                    <Col>{order.orderDate}</Col>
                                    <Col>{order.orderStatus}</Col>
                                    <Col>{order.expectedDeliveryDate}</Col>
                                    <Col>{order.orderQuantity}</Col>
                                    <Col>₹ {order.totalAmount}</Col>
                            
                                    <Col><Button onClick={() => {
                                            handleDelete(order.id);
                                                    }} > Delete </Button> </Col>
                                   </Row>
                               
                            ))
                        }
                        <Footer />
                        
        </Container>
    );

}

export default ListOrders;