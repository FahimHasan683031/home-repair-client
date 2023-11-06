import useAuthContext from "../Hoocks/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const Privet = ({children}) => {
    const location = useLocation()
    const {user,isLoading}=useAuthContext()
    if(isLoading){
        return (<div className="flex justify-center items-center h-[100vh]"><span className="loading loading-spinner text-teal-600 w-12"></span></div>)
    } else if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privet;