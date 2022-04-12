import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import petCategoryService from '../../Services/petCategoryService';
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

const ListPetCategory=()=>{
    const [petCategory, setpetCategory] = useState([]);

    const init=()=>{
        petCategoryService.getAll()
        .then(response=>{
            console.log('Printing customer data', response.data);
            setpetCategory(response.data);
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
        petCategoryService.remove(id)
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
            <Title>List of Category</Title>
                
                    <Linkbutton>
                        <Link to="/petcategory/add">Add New Category</Link>
                    </Linkbutton>
                
                
                       <Hrow>
                            <Col>Category Id</Col>
                            <Col>Category Image</Col>
                            <Col>Category Name</Col>
                            <Col>Update</Col>
                            <Col>Delete</Col>
                        </Hrow>
                    
                    
                        {
                            petCategory.map(Category=>(
                                <Row>
                                    <Col>{Category.id}</Col>
                                    <Col><Image src= {Category.petImage}/></Col>
                                    <Col>{Category.petCategoryName}</Col>
                               
                                    <Col><Link to={`/petcategory/update/${Category.id}`}>Update</Link></Col>
                                    <Col><Button onClick={() => {
                                            handleDelete(Category.id);
                                                    }} > Delete </Button> </Col>
                                   </Row>
                               
                            ))
                        }
                        <Footer />
                        
        </Container>
    );

}

export default ListPetCategory;