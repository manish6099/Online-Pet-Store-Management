import { useState } from "react";
import AuthenticateContext from "./AuthenticateContext";

const AuthenticateState = (props) =>{

    const [userDetails, setUserDetails]=useState({})
    const [userData, setUserData] = useState({
        username: '',
        password: '', 
        roles:''
    });

    return(
        <AuthenticateContext.Provider value={{userData, setUserData, userDetails, setUserDetails}}>
            {props.children}
        </AuthenticateContext.Provider>
    )
}

export default AuthenticateState;