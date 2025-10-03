// import { BrowserRouter as  useNavigate } from "react-router-dom";

// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Logout({setIsLoggedIn,setUsername}){

    const navigate = useNavigate();

    const handleLogout = () => {
        // 清除 localStorage 中的認證信息
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        
        setIsLoggedIn(false);
        setUsername("未登入");
        navigate("/Login");
    }

    return(
        <button className="nav-logout-btn" onClick={handleLogout}>登出</button>
    );
}