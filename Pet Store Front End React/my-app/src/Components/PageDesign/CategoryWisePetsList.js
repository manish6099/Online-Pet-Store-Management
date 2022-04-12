import styled from "styled-components";
import {useContext, useEffect, useState} from 'react';
import {ShoppingCartSharp} from '@mui/icons-material';
import { format, addDays } from 'date-fns'
import CartContext from "../Context/Cart/CartContext";
const Image = styled.img`
  max-height: 400px;
  min-height: 350px;
  width:100%;
  z-index: 2;
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
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 0;

`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Badge = styled.button`
    border:none;
    padding: 10px;
    background-color:yellow;
    color:#FF6961;
    cursor: pointer;
   
`;

const Container = styled.div`
flex: 1;
margin: 5px;
margin-bottom:20px;
min-width: 400px;
max-width:500px;
align-items: center;
justify-content: center;
position: relative;
box-shadow: 0 4px 8px 0 #888888;

&:hover ${Info}{
  opacity: 1;
}
`;
const Desc = styled.div`
flex-direction:column;
margin:5px;
`
const Desctitle=styled.h1`
color:black;
padding:3px;
`
const Price = styled.div`
font-size:18px;
color:red;
`
const MRP = styled.div`
text-decoration: line-through;
font-size:18px;
`
const Row = styled.div`
    display:flex;
    flex-direction:row;
    color:#C0C0C0;
`
const Col = styled.div`
    flex:1;
    margin:10px;
    align-items: center;
`

const CategoryWisePetsList = ({item}) => {

const[dealPrice, setDealPrice]=useState();
const[saving, setSaving] = useState();
const [orderid, setOrderid] = useState(1);

const data = useContext(CartContext);

const init=()=>{
  let dis = item.petMRP*(item.petDiscount/100);
  setSaving(dis);
  setDealPrice(item.petMRP-dis);

}

useEffect(()=>{
  init();
})

  return (
    <Container>
        <Image src={item.petImage} />
        <Info>
          <Title>{item.petBreed}</Title>
          <Badge>
          <ShoppingCartSharp onClick={()=>{
            setOrderid(orderid + 1)
              const cartObj={
                id:orderid,
                image:item.petImage,
                breed:item.petBreed,
                sp:dealPrice,
                totalquantity:item.petQuantity,
                quantity:1,
                orderstatus:"PROCESS",
                orderdate:format(new Date(), 'yyyy-MM-dd'),
                deliverydate:format(addDays(new Date(),7), 'yyyy-MM-dd'),
                cartid:data.cartData.length+1,
                petid:item.id
              }

              let isAvailable = false;
              data.cartData.map((rec)=>{
                if(rec.petid===item.id && rec.breed == item.petBreed)
                {
                  isAvailable = true;
                }
              })

              if(isAvailable===false){
                data.setCartData(prevState=>[...prevState,cartObj]);
              }
              console.log(cartObj);

          }}/>
          </Badge>
        </Info>
        <Desc>
        <Desctitle>{item.petDescription}</Desctitle>
        <hr />
        <Row>
          <Col>M.R.P.:</Col>
          <Col><MRP>₹ {item.petMRP}</MRP></Col>
        </Row>
        <Row>
          <Col>Deal Price:</Col>
          <Col><Price>₹ {dealPrice}</Price></Col>
        </Row>
        <Row>
          <Col>You Save: </Col>
          <Col><Price>{saving} ({item.petDiscount}%)</Price></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Inclusive of all taxes</Col>  
          </Row>
        </Desc>
    </Container>
  );
};

export default CategoryWisePetsList;
