import {useState,useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";
import petCategoryService from "../../Services/petCategoryService";
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
    url("../Images/PetBackground.jpg")
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

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008CBA;
  color: white;
  cursor: pointer;
  margin:20px;
`;


const AddPetCategory = () =>{
    const[petCategoryName,setpetCategoryName] = useState();
    const[petImage,setPetImage] = useState("");
    

    const navigate = useNavigate();
    const {id} = useParams();

    const handleUpload=(event)=>{
        let baseURL="";
        let reader = new FileReader();
        let file=event.target.files[0];
        reader.readAsDataURL(file)
        reader.onload=()=>{
        baseURL= reader.result;
         setPetImage(baseURL);
         console.log(petImage);
        } 
    }
 

    const savePetCategory = (e) => {
        e.preventDefault();

        const petCategory = {petCategoryName,petImage,id};

            if (id) {
                //update
                petCategoryService.update(petCategory,id)
                    .then(response => {
                        console.log('Pet Category data updated successfully', response.data);
                        alert("You have updated the pet category...");
                        navigate('/admin');
                    })
                    .catch(error => {
                        console.log('Something went wrong', error);
                    }) 
            } else {
                //create
                petCategoryService.create(petCategory)
                .then(response => {
                    console.log("Pet Category added successfully", response.data);
                    setpetCategoryName("");
                    alert("You have added a new pet category...");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
            }

    }
    useEffect(()=>{
        if(id)
        {
            petCategoryService.get(id)
            .then(petcategory => {
                setpetCategoryName(petcategory.data.petCategoryName);
                setPetImage(petcategory.data.petImage);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
        }
    },[])
      
    return(
      <>
      <Navbar />
    <Container>
      <Wrapper>
        <Title>Add Pet Category</Title>
        <Form>
          <Input placeholder="Pet Category Name" required value={petCategoryName} onChange={(e) => setpetCategoryName(e.target.value)}/>
          <Input type="file" required accept="image/png, image/jpeg" onChange={handleUpload}/>
          <Button type="submit" onClick={(e) => savePetCategory(e)}>Save</Button>
        </Form>
      </Wrapper>
    </Container>
    <Footer />
    </>
    )
}

export default AddPetCategory;