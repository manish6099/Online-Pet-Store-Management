import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import petService from '../../Services/petService';
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
    width:14vh;
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

const ListPetComponent=()=>{
    const [pets, setPets] = useState([]);

    const init=()=>{
        petService.getAll()
        .then(response=>{
            console.log('Printing pets data', response.data);
            setPets(response.data);
        })
        .catch(error=>{
            console.log('Error in loading pets information', error);
        })
    }

    useEffect(()=>{
        init();
    },[]);

    const handleDelete=(id)=>{
        console.log('Printing pet id', id);
        petService.remove(id)
        .then(response=>{
            console.log('Pet deleted successfully', response.data);
            init();
        })
        .catch(error=>{
            console.log('Error in deleting pet data', error);
        })
    }

    return(
        <Container>
            <Navbar />
            <Title>LIST OF PETS</Title>
                
                    <Linkbutton>
                        <Link to="/pets/add">Add New Pet</Link>
                    </Linkbutton>
                
                
                       <Hrow>
                            <Col>Pet Id</Col>
                            <Col>Image</Col>
                            <Col>Breed</Col>
                            <Col>Age</Col>
                            <Col>Color</Col>
                            <Col>Quantity</Col>
                            <Col>Cost Price</Col>
                            <Col>Discount</Col>
                            <Col>MRP</Col>
                            <Col>Description</Col>
                            <Col>Update</Col>
                            <Col>Delete</Col>
                        </Hrow>
                    
                    
                        {
                            pets.map(pets=>(
                                <Row>
                                    <Col>{pets.id}</Col>
                                    <Col><Image src= {pets.petImage}/></Col>
                                    <Col>{pets.petBreed}</Col>
                                    <Col>{pets.petAge} Years</Col>
                                    <Col>{pets.petColor}</Col>
                                    <Col>{pets.petQuantity}</Col>
                                    <Col>₹ {pets.petCostPrice}</Col>
                                    <Col>{pets.petDiscount}%</Col>
                                    <Col>₹ {pets.petMRP}</Col>
                                    <Col>{pets.petDescription}</Col>
                                    <Col><Link to={`/pets/update/${pets.id}`}>Update</Link></Col>
                                    <Col><Button onClick={() => {
                                            handleDelete(pets.id);
                                                    }} > Delete </Button> </Col>
                                   </Row>
                               
                            ))
                        }
                        <Footer />
                        
        </Container>
    );

}

export default ListPetComponent;