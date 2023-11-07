import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Services from "../Pages/Services/Services";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AddService from "../Pages/AddServices/AddService";
import Privet from "../Privet/Privet";
import ServiceSingle from "../Pages/Services/ServiceSingle";
import MyServices from "../Pages/MyServices/MyServices";
import UpdateService from "../Pages/UpdateService";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/services',
                element:<Privet><Services/></Privet>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/addService',
                element:<AddService/>
            },
            {
                path:'/services/:id',
                element:<ServiceSingle/>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/services/${params.id}`)
            },
            {
                path:'/myServices',
                element:<MyServices/>
            },
            {
                path:'/updateService/:id',
                element:<UpdateService/>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/services/${params.id}`)
            }
        ]
    }
])