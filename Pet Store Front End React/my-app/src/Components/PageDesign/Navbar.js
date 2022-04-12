import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link, useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import CartContext from '../Context/Cart/CartContext';
import AuthenticateContext from '../Context/Authenticate/AuthenticateContext';

const Container = styled.div`
    height:60px;
    background-color:#F1C40F;
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content: space-between;
    
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
flex: 1;
text-align:center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #F1C40F;
    color:black;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
`;

const Navbar = () => {

    const [login, setLogin] = useState();
    const navigate = useNavigate();
    
    const data = useContext(CartContext);
    const auth = useContext(AuthenticateContext);

    const showCart=()=>{
        if(data.cartData!=0)
            navigate("/cart");
    }

    useEffect(()=>{
        
    },[])

  return (
    <Container>
       <Wrapper>
           <Left>
           <Button onClick={()=>{
                   navigate("/");
               }}>Home</Button>
               <Button onClick={()=>{
                   navigate("/admin");
               }}>Admin</Button>
                <Button onClick={()=>{
                   navigate("/about");
               }}>About</Button>
               
           </Left>
           <Center>
               <Logo>Pets Paradise</Logo>
           </Center>
           <Right>
           
             {auth.userData.username===""
                    ?<>
                        <MenuItem><Link to="/login">Sign in</Link></MenuItem>
                        <MenuItem><Link to="/signup">Register</Link></MenuItem>
                    </>
                    :<>
                        <MenuItem>{auth.userData.username}</MenuItem>
                        <MenuItem><Link to="/" onClick={()=>{
                            auth.setUserData({
                                username: '',
                                password: '', 
                                roles:''
                            });
                            data.setCartData([]);
                            setLogin(false);
                        }}>Logout</Link></MenuItem>
                    </>
            }

               <MenuItem>
                    <Badge badgeContent={data.cartData.length} color="primary">
                        <ShoppingCartOutlined onClick={showCart}/>
                    </Badge>
               </MenuItem>
           </Right>
        </Wrapper> 
    </Container>
  )
}

export default Navbar