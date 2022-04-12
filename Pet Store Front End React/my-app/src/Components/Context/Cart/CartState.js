import { useState } from "react";
import CartContext from "./CartContext";

const CartState = (props) =>{

    const [cartData, setCartData] = useState([]);

    return(
        <CartContext.Provider value={{cartData, setCartData}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;