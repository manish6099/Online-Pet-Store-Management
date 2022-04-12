import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import AuthenticateContext from '../Context/Authenticate/AuthenticateContext';
import {useContext} from 'react'

import adminservice from "../../Services/adminService";
import customerservice from "../../Services/CustomerServices";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../Images/PetBackground.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008CBA;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LineBreak = styled.p`
    margin:5px;
`

const Login = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = useContext(AuthenticateContext);
  const navigate = useNavigate();
  
  const checkUser=()=>{
    const authObj={
      username:user,
      password:password
    }
    adminservice.checkAdmin(authObj)
    .then(response => {
      if(response.data===""){
        customerservice.checkCustomer(authObj)
        .then(response => {
          if(response.data===""){
            console.log("Username or password is wrong");
            setError("Username or Password is wrong, try again...");
          }
          else{
            console.log("Customer logged in successfully", response.data);
            const roles = 205;
            const username = response.data.customerEmail;
            const password = response.data.customerPassword;
            auth.setUserDetails(response.data);
            auth.setUserData({
              username: username,
              password: password, 
              roles:roles})
            setUser('');
            setPassword('');
            navigate("/", { replace: true });
          }
        })
        .catch(error => {
          console.log('something went wroing', error);
        })
      }
      else{
        console.log("Admin logged in successfully", response.data);
        const roles = 110;
        const username = response.data.adminEmail;
        const password = response.data.adminPassword;
        auth.setUserData({
          username: username,
          password: password, 
          roles:roles})
        setUser('');
        setPassword('');
        navigate("/admin", { replace: true });
      }
    })
    .catch(error => {
      console.log('something went wroing', error);
    })
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
          <Form>
            <Input type="email" placeholder="username" required onChange={(e)=>setUser(e.target.value)} />
            
            <Input type="password" placeholder="password" required onChange={(e)=>setPassword(e.target.value)}/>
            <Button  onClick={checkUser}>Login</Button>
            <p style={{color:"red"}}>{error}</p>
            <LineBreak />
            <Link to="/signup">Create New Account For Customer</Link>
          </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
