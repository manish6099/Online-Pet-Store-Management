import { useState } from "react";
import styled from "styled-components";
import CategoryWisePets from "./CategoryWisePets";
import {useNavigate} from 'react-router-dom';


const Image = styled.img`
  height: 100%;
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
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 0;

`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
  opacity: 1;
}
`;



const CategoryItem = ({item}) => {
  const[isClick, setIsClick]=useState(false);

  const navigate = useNavigate();

  const onButtonClick = () =>{
    setIsClick(true);
  }
  return (
    <Container>
        <Image src={item.petImage} />
        <Info>
          <Title>{item.petCategoryName}</Title>
          <Button onClick={onButtonClick}>SHOW NOW</Button>
          {isClick?navigate(`/pets/categorywise/${item.id}`) :null}
        </Info>
    </Container>
  );
};

export default CategoryItem;
