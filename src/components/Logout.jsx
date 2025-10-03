// import { BrowserRouter as  useNavigate } from "react-router-dom";

// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Logout({setIsLoggedIn,setUsername}){

    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("未登入");
        navigate("/Login");
    }

    return(
        <button onClick={handleLogout}>登出</button>
    );
}