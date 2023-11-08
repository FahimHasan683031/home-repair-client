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
import MySchedule from "../Pages/MySchedule/MySchedule";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([ 
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/services',
                element:<Services/>
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
                element:<Privet><AddService/></Privet>
            },
            {
                path:'/services/:id',
                element:<Privet><ServiceSingle/></Privet>,
                loader:({params})=>fetch(`https://homerepair-servier.vercel.app/api/v1/services/${params.id}`,{credentials:'include'})
            },
            {
                path:'/myServices',
                element:<Privet><MyServices/></Privet>
            },
            {
                path:'/updateService/:id',
                element:<UpdateService/>,
                loader:({params})=>fetch(`https://homerepair-servier.vercel.app/api/v1/services/${params.id}`,{credentials:'include'})
            },
            {
                path:'/mySchedule',
                element:<Privet><MySchedule/></Privet>
            }
        ]
    }
])