import styled from "styled-components";
import petservice from "../../Services/petService";
import {useEffect, useState } from "react";
import CategoryWisePetsList from "./CategoryWisePetsList"
import {useParams} from "react-router-dom";
import Footer from '../PageDesign/Footer'
import Navbar from '../PageDesign/Navbar'

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;
const Wrapper=styled.div`
flex:1;
flex-direction:column;
`;

const CategoryWisePets = () => {

  const {id} = useParams();
    const[petCategoryList, setPetCategoryList]=useState([]);

    const init=()=>{
      console.log("Selected category id "+id)
        petservice.getByCategory(id)
        .then(response=>{
            console.log('Printing pets by categories', response.data);
            setPetCategoryList(response.data);
        })
        .catch(error=>{
            console.log('Error in loading pet category list information', error)
        })
    }
    useEffect(()=>{
        init();
    },[]);


    return (
      <>
      <Navbar />
        <Container>
          {
          petCategoryList.map((item) => (
            <CategoryWisePetsList item={item} key={item.id} />
          ))
          
          }
        </Container>
        <Wrapper>
          </Wrapper>
          <Wrapper>
          <Footer />
          </Wrapper>
        </>
      );
};


export default CategoryWisePets;