import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import React, {useContext, useEffect, useState} from 'react'
import Navbar from '../PageDesign/Navbar'
import Footer from '../PageDesign/Footer'
import CartContext from '../Context/Cart/CartContext'
import AuthenticateContext from '../Context/Authenticate/AuthenticateContext';

import petservice from "../../Services/petService";
import cartservice from "../../Services/cartService";
import orderservice from "../../Services/orderService";

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
  display:flex;
  flex-direction:column;
  box-shadow: 0 4px 8px 0 #888888;
`;

const Image = styled.img`
  flex:1;
  width: 30px;
  height:100%;
`;

const BreedName = styled.span`
flex:1;
margin:20px;
font-size: 20px;

`;
const Product = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin:10px;
height:20vh;
box-shadow: 0 1px 1px 0 #888888;
`;

const ProductAmountContainer = styled.div`
  flex:1;
  display: flex;
`;

const ProductIncDec = styled.div`
    cursor:pointer;
`

const ProductAmount = styled.div`
  font-size: 24px;
`;

const ProductPrice = styled.div`
  flex:1;
  font-size: 20px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  position: relative;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 24px;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
`;

const Cart = () => {

  const[petData, setPetData]=useState({});
  const[totalAmount, setTotalAmount]=useState(0);
  const data = useContext(CartContext);
  const auth = useContext(AuthenticateContext);
  
  const navigate = useNavigate();

  const calculatePrice = ()=>{
    let total=0;
    data.cartData.map((amt)=>{
      total = total+amt.sp*amt.quantity;
    })
    setTotalAmount(total);
  }

  const payNow = () =>{

    console.log(auth.userDetails);
    const cartObj={
      id:data.cartid,
      custorders:auth.userDetails
    }

    cartservice.create(cartObj)
    .then(response => {
      console.log("Cart added successfully", response.data);
    })
    .catch(error => {
      console.log('something went wroing', error);
    })
    
    
    
    
    data.cartData.map((item)=>{
      petservice.get(item.petid)
      .then(response=>{
        
        setPetData(response.data[0])

          const orderObj={
            id:item.orderid,
            orderDate:item.orderdate,
            orderStatus:"PROCESS",
            expectedDeliveryDate:item.deliverydate,
            orderQuantity:item.quantity,
            totalAmount:item.quantity*item.sp,
            orderedpet:response.data,
            custcart:cartObj
          }
          orderservice.create(orderObj)
          .then(response => {
            console.log("order added successfully", response.data);
          })
          .catch(error => {
            console.log('something went wrong', error);
          })
    

      })
      .catch(error => {
        console.log('something went wrong', error);
      })
      console.log("Pet Data-----"+petData.id);

      
      
    });

    data.setCartData([]);
	  navigate("/payment");

    
  }

  useEffect(()=>{
   calculatePrice();
  },[])

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Top>
          
        </Top>
        <Bottom>
        <Info>
          {
                data.cartData.map(data=>(
                <Product>
                    <Image src={data.image} />   
                    <BreedName>
                          <b>Breed:</b> {data.breed}
                    </BreedName>
                    
                      <ProductAmountContainer>
                        <ProductIncDec>
                        <Add onClick={()=>{
                          if(data.totalquantity>data.quantity){
                            data.quantity=data.quantity+1;
                            calculatePrice();
                          }}}/>
                        </ProductIncDec>
                        <ProductAmount>{data.quantity}</ProductAmount>
                        <ProductIncDec>
                        <Remove onClick={()=>{
                          if(data.quantity>1)
                              data.quantity = data.quantity-1;
                              calculatePrice();
                            
                          
                        }}/>
                        </ProductIncDec>
                      </ProductAmountContainer>
                      <ProductPrice>₹ {data.sp}</ProductPrice>
                  </Product>
                ))
                
          }
            </Info>
                
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={payNow}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
