import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-72 h-screen bg-teal-600 text-white ">
                <ul className="menu">
                    <li><NavLink to='myServices'>My Services</NavLink></li>
                    <li><NavLink to='addServices'>Add Services</NavLink></li>
                    <li><NavLink to='mySchedules'> My Schedules</NavLink></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;