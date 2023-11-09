import { Link } from "react-router-dom";
import useAuthContext from "../Hoocks/useAuthContext";

const Header = () => {
    const {user,signout}=useAuthContext()
    const signoutHandle =()=>{
        signout()
        .then()
        .catch(error=>console.log(error))
    }
    return (
        <div className=" shadow-md bg-teal-100 z-50 relative">
            <div className="flex justify-between items-center   max-w-screen-xl mx-auto px-6 ">
                <div className="">
                    <img className="w-[40px] h-[40px] mx-auto" src={'https://i.ibb.co/wBp0z2L/home-repair-logo-with-maintenance-tools-and-house-vector-26674415-removebg-preview.png'} alt="" />
                    <h1 className="text-lg text-teal-600 pb-1 font-bold"><span className="text-slate-700">HOME</span> REPAIR</h1>
                </div>

                <div className="hidden lg:flex">
                    <ul className="menu text-base font-medium text-gray-700 menu-horizontal px-1">
                        <li><Link to='/'>Home</Link>
                        </li>
                        <li><Link to='/services'>Services</Link>
                        </li>

                        {
                            user?<li tabIndex={0}className="z-40 relative">
                            <details>
                                <summary>Dashboard</summary>
                                <ul className="p-2 w-40 rounded-sm z-40">
                                    <li className="text-sm text-gray-500"><Link to='/myServices'>My Services</Link></li>
                                    <li className="text-sm text-gray-500"><Link to='/addService'>Add Services</Link></li>
                                    <li className="text-sm text-gray-500"><Link to='/mySchedule'>My-schedules</Link></li>
                                </ul>
                            </details>
                        </li>:''
                        }

                    </ul>
                </div>
                <div className="flex">
                    <div className="flex gap-3 items-center">
                        {
                            user?<img src={user?.photoURL} className="h-8 w-8 rounded-full " alt="" />:''
                        }
                        {
                            user?<button className="text-sm md:text-base text-white font-normal md:font-medium px-2 md:px-3 py-1 rounded-full bg-teal-600" onClick={signoutHandle}>Logout</button>:<Link className="text-sm md:text-base text-white font-normal md:font-medium px-2 md:px-3 py-1 rounded-full bg-teal-600" to='/login'>login</Link>
                        }
                        
                    </div>
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu rounded-sm menu-sm dropdown-content mt-3 -ml-16  p-2 shadow bg-base-100   ">
                            <li><Link to='/'>Home</Link>
                            </li>
                            <li><Link to='/services'>Services</Link>
                            </li>

                            {
                                user?<li  tabIndex={0}>
                                <details>
                                    <summary>Dashboard</summary>
                                    <ul className="p-2 -ml-8 bg-white z-50 w-40 rounded-sm">
                                        <li className="text-sm text-gray-500"><Link to='/myServices'>My Services</Link></li>
                                        <li className="text-sm text-gray-500"><Link to='/addService'>Add Services</Link></li>
                                        <li className="text-sm text-gray-500"><Link to='/mySchedule'>My-schedules</Link></li>
                                    </ul>
                                </details>
                            </li>:''
                            }
                        </ul>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Header;