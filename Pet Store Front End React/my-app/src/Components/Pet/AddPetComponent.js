import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import petService from "../../Services/petService";
import petcategoryservice from "../../Services/petCategoryService";
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

const Select = styled.select`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin:10px;
  padding: 15px 20px;
  background-color: #008CBA;
  color: white;
  cursor: pointer;
`;

const AddPetComponent = () => {
    const[petAge, setPetAge] = useState();
    const[petBreed, setPetBreed] = useState('');
    const[petColor, setPetColor] = useState('');
    const[petCostPrice, setCostPrice] = useState('');
    const[petDescription, setPetDescription] = useState('');
    const[petDiscount, setPetDiscount] = useState('');
    const[petImage, setPetImage] = useState("");
    const[petMRP, setPetMRP] = useState('');
    const[petQuantity, setPetQuantity] = useState('');
    const[petCategoryRef, setPetCategoryRef] = useState({});

    const[petCategory, setPetCategory]=useState([]);


    const navigate = useNavigate();
    const {id} = useParams();


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

   

    const savePet = (e) => {
        e.preventDefault();
        
        const pets = {petAge, petQuantity, petBreed, petColor, petCostPrice, petDescription, petDiscount, petImage, petMRP, petCategoryRef, id};

        if (id) {
            //update
            petService.update(pets,id)
                .then(response => {
                    console.log('Pet data updated successfully', response.data);
                    alert("You have updated the pet details...")
                    navigate('/admin')
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            petService.create(pets)
            .then(response => {
                console.log("Pet added successfully", response.data);
                alert("You have added new pet details...")
                setPetAge('')
                setPetBreed('')
                setPetColor('')
                setCostPrice('')
                setPetDiscount('')
                setPetMRP('')
                setPetQuantity('')
                setPetDescription('')
                
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
      init();

        if (id) {
            petService.get(id)
                .then(pets => {
                    setPetAge(pets.data.petAge);
                    setPetBreed(pets.data.petBreed);
                    setPetColor(pets.data.petColor);
                    setCostPrice(pets.data.petCostPrice);
                    setPetDescription(pets.data.petDescription);
                    setPetDiscount(pets.data.petDiscount);
                    setPetImage(pets.data.petImage);
                    setPetMRP(pets.data.petMRP);
                    setPetCategoryRef(pets.data.petCategoryRef);
                    setPetQuantity(pets.data.petQuantity);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }

    }, [])

    return(
      <>
      <Navbar/>
      <Container>
        
      <Wrapper>
        <Title>Add pet</Title>
        <Form>
          <Input type="number" min="1" placeholder="Pet Age" required value={petAge} onChange={(e) => setPetAge(e.target.value)}/>
          <Input placeholder="Pet Breed" required value={petBreed} onChange={(e) => setPetBreed(e.target.value)}/>
          <Input placeholder="Pet Color" required value={petColor} onChange={(e) => setPetColor(e.target.value)} />
          <Input type="number" min="1" placeholder="Pet Price" required value={petCostPrice} onChange={(e) => setCostPrice(e.target.value)}/>
          <Input type="number" max="100" min="1" placeholder="Pet Discount" required value={petDiscount} onChange={(e)=>setPetDiscount(e.target.value)} />
          <Input type="number" min="1" placeholder="Pet MRP" required value={petMRP} onChange={(e) => setPetMRP(e.target.value)}/>
          <Input type="number" min="1" placeholder="Pet Quantity" required value={petQuantity}onChange={(e) => setPetQuantity(e.target.value)}/>
          <Input type="textarea" required placeholder="Pet Description" value={petDescription} onChange={(e) => setPetDescription(e.target.value)}/>
          <Select id="petcategory" onClick={(e) =>{
             petCategory.map((item)=>{
              if(item.id===parseInt(e.target.value)){
                setPetCategoryRef(item);
              }
            })
          }}>           <option value="0" key="0">Select Category</option>
                        {petCategory.map((item) => (
                          <option value={item.id} key={item.id}>
                            {item.petCategoryName}
                          </option>
                        ))}
          </Select>
          <Input type="file" required accept="image/png, image/jpeg" onChange={handleUpload}/>
          <Button type="submit" onClick={(e) => savePet(e)}>SAVE</Button>
          <Wrapper><Link to="/">Home</Link></Wrapper>
        </Form>
      </Wrapper>
     
    </Container>
     <Footer/>
    </>
    );
};

export default AddPetComponent;