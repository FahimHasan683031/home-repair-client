import useAuthContext from "../Hoocks/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import lotianimation from "../assets/lotianimation.json"

const Privet = ({children}) => {
    const location = useLocation()
    const {user,isLoading}=useAuthContext()
    if(isLoading){
        return (<div className="flex justify-center items-center h-[100vh]"><Lottie className="w-1/2 h-1/2" animationData={lotianimation}></Lottie></div>)
    } else if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privet;