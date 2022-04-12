import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import petcategoryservice from "../../Services/petCategoryService";
import { useEffect, useState } from "react";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
    
`;

const Categories = () => {
    const[petCategory, setPetCategory]=useState([]);
    const init=()=>{
        petcategoryservice.getAll()
        .then(response=>{
            console.log('Printing pets categories', response.data);
            setPetCategory(response.data);
        })
        .catch(error=>{
            console.log('Error in loading pet category information', error)
        })
    }
    useEffect(()=>{
        init();
    },[]);


    return (
        <Container>
          {
          petCategory.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Container>
      );
};


export default Categories;