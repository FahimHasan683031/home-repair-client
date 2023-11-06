import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const useAuthContext = () => {
    const context = useContext(authContext)
    return context
};

export default useAuthContext;
