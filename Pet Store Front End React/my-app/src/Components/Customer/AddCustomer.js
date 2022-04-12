import {useState,useEffect} from "react";
import {Link ,useNavigate,useParams} from "react-router-dom";
import CustomerServices from "../../Services/CustomerServices";
import styled from "styled-components";
import Footer from '../PageDesign/Footer'
import Navbar from '../PageDesign/Navbar'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("./Images/PetBackground.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #FFFAFA;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008CBA;
  color: white;
  cursor: pointer;
`;


const AddCustomer = () =>{
    const[customerEmail,setCustomerEmail] = useState();
    const[customerPassword,setCustomerPassword] = useState();
    const[customerFirstName,setCustomerFirstName] = useState();
    const[customerLastName,setCustomerLastName] = useState();
    const[customerMobile,setCustomerMobile] = useState();
    const[customerAddress,setCustomerAddress] = useState();
    const[customerRegDate,setCustomerRegDate] = useState();
    const[customerImage,setCustomerImage] = useState();
    const[confirmPassword,setConfirmPassword] = useState();

    const navigate = useNavigate();
    const {id} = useParams();

    const handleUpload=(event)=>{
        let baseURL="";
        let reader = new FileReader();
        let file=event.target.files[0];
        reader.readAsDataURL(file)
        reader.onload=()=>{
        baseURL= reader.result;
         setCustomerImage(baseURL);
         console.log(customerImage);
        } 
    }
 

    const saveCustomer = (e) => {
        e.preventDefault();

        const customer = {customerEmail,customerPassword,customerFirstName,customerLastName,customerMobile,customerAddress,customerRegDate,customerImage,id};

            if (id) {
                //update
                CustomerServices.update(customer,id)
                    .then(response => {
                        console.log('Customer data updated successfully', response.data);
                        navigate('/');
                    })
                    .catch(error => {
                        console.log('Something went wrong', error);
                    }) 
            } else {
                //create
                CustomerServices.create(customer)
                .then(response => {
                    console.log("Customer added successfully", response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
            }

    }
    useEffect(()=>{
        if(id)
        {
            CustomerServices.get(id)
            .then(customer => {
                setCustomerEmail(customer.data.customerEmail);
                setCustomerPassword(customer.data.customerPassword);
                setCustomerFirstName(customer.data.customerFirstName);
                setCustomerLastName(customer.data.customerLastName);
                setCustomerMobile(customer.data.customerMobile);
                setCustomerAddress(customer.data.customerAddress);
                setCustomerRegDate(customer.data.customerRegDate);
                setCustomerImage(customer.data.customerImage);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
        }
    },[])

    const validate = (e) =>{
      if(confirmPassword !== customerPassword){
          alert("Password do not match.");
      }
      else if(confirmPassword === "" || customerPassword===""){}
      else{ 
        saveCustomer(e);
      }
      


    }
    return(
      <>
      <Navbar />
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" required value={customerFirstName} onChange={(e) => setCustomerFirstName(e.target.value)}/>
          <Input placeholder="Last Name" required value={customerLastName} onChange={(e) => setCustomerLastName(e.target.value)}/>
          <Input type="email" placeholder="Email" required value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
          <Input type="password" placeholder="Password" required value={customerPassword} onChange={(e) => setCustomerPassword(e.target.value)}/>
          <Input placeholder="Confirm Password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
          <Input placeholder="Mobile" value={customerMobile} required onChange={(e) => setCustomerMobile(e.target.value)}/>
          <Input type="textarea" placeholder="Address" value={customerAddress} required onChange={(e) => setCustomerAddress(e.target.value)}/>
          <Input type="date" value={customerRegDate} required onChange={(e) => setCustomerRegDate(e.target.value)}/>
          <Input type="file" required accept="image/png, image/jpeg" onChange={handleUpload}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit" onClick={(e) => validate(e)}>SIGN UP</Button>
          <Wrapper><Link to="/">Home</Link></Wrapper>
        </Form>
      </Wrapper>
    </Container>
    <Footer />
    </>
    )
}

export default AddCustomer;