import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPetComponent from './Components/Pet/ListPetComponent';
import AddPetComponent from './Components/Pet/AddPetComponent';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart';
import AddCustomer from './Components/Customer/AddCustomer';
import ListCustomer from './Components/Customer/ListCustomer';
import Login from './Components/Pages/Login';
import CategoryWisePets from './Components/PageDesign/CategoryWisePets';
import CartState from './Components/Context/Cart/CartState';
import AuthenticateState from './Components/Context/Authenticate/AuthenticateState';
import RequireAuth from './Components/Pages/RequireAuth';
import Unauthorized from './Components/Pages/Unauthorized';
import ListOrders from './Components/Orders/ListOrders';
import AddPetCategory from './Components/PetCategory/AddPetCategory';
import ListPetCategory from './Components/PetCategory/ListPetCategory';
import Admin from './Components/Pages/Admin';
import About from './Components/Pages/About';
import Payment from './Components/Pages/Payment';

const ROLES={
  'Admin':110,
  'Customer':205
}

export default function App() {
  return (
<CartState>
  <AuthenticateState>
  <BrowserRouter>
      <Routes>
          <Route  exact path="/"  element={<Home />} />

          <Route element={<RequireAuth allowedRoles={ROLES.Admin} />}>
			      <Route  exact path="/admin"  element={<Admin/>} />
            <Route  exact path="/pets"  element={<ListPetComponent/>} />
            <Route  exact path="/pets/update/:id"  element={<AddPetComponent/>} />
            <Route  exact path="/customers"  element={<ListCustomer/>} />
            <Route  exact path="/pets/add"  element={<AddPetComponent/>} />
			      <Route  exact path="/orders"  element={<ListOrders />} />
			      <Route  exact path="/petcategory/add"  element={<AddPetCategory />} />
            <Route  exact path="/petcategory/update/:id"  element={<AddPetCategory />} />
			      <Route  exact path="/petcategory"  element={<ListPetCategory />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={ROLES.Customer} />}>
            <Route  exact path="/pets/categorywise/:id"  element={<CategoryWisePets/>} />
            <Route  exact path="/cart"  element={<Cart />} />
            <Route  exact path="/payment"  element={<Payment />} />
          </Route>
          
          <Route  exact path="/signup"  element={<AddCustomer />} />
	        <Route  exact path="/customers/update/:id"  element={<AddCustomer />} />
          
          <Route  exact path="/about"  element={<About />} />
          <Route  exact path="/login"  element={<Login />} />
          <Route  exact path="*"  element={<NotFound/>} /> 
          <Route  exact path="/unauthorized"  element={<Unauthorized/>} />

      </Routes>
    </BrowserRouter>
    </AuthenticateState>
</CartState>
  );
}