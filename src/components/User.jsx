import { FaCircleUser } from "react-icons/fa6";




export default function User({Username}){
    return(
        <div>
        <FaCircleUser/><br/>
        <span>{Username}</span>
        </div>
    )
}