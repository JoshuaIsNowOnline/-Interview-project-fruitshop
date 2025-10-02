import { FaCircleUser } from "react-icons/fa6";




export default function User({Username}){
    return(
        <div className="login-state">
        <FaCircleUser/>
        <span>{Username}</span>
        </div>
    )
}