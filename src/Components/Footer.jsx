import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {

    return (
        <div data-aos="zoom-in" className="bg-teal-100 mt-10 ">

            <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 p-10 max-w-screen-xl mx-auto  text-neutral-content">


                <nav className="flex justify-center mt-10">
                    <div>
                        <div className="">
                            <img className="w-[40px] h-[40px] mx-auto" src={'https://i.ibb.co/wBp0z2L/home-repair-logo-with-maintenance-tools-and-house-vector-26674415-removebg-preview.png'} alt="" />
                            <h1 className="text-lg text-center text-teal-600 pb-1 font-bold"><span className="text-slate-700">HOME</span> REPAIR</h1>
                        </div>
                        <div className="flex justify-center gap-2 md:gap-5 my-3">
                            <FaFacebookF className="text-3xl p-1 text-white rounded-full bg-teal-600"></FaFacebookF>
                            <AiFillInstagram className="text-3xl p-1 text-white rounded-full bg-teal-600"></AiFillInstagram>
                            <AiFillLinkedin className="text-3xl p-1 text-white rounded-full bg-teal-600"></AiFillLinkedin>
                            <AiOutlineTwitter className="text-3xl p-1 text-white rounded-full bg-teal-600"></AiOutlineTwitter>
                        </div>
                    </div>


                </nav>
                <nav className="flex flex-col text-slate-700 font-medium text-sm gap-1 md:gap-3">
                    <header className="font-bold text-lg text-teal-600">Services</header>
                    <a className="link link-hover">HouseMenders</a>
                    <a className="link link-hover">Painting</a>
                    <a className="link link-hover">Kitchen Solutions</a>
                    <a className="link link-hover">BathWire Wizards</a>
                    <a className="link link-hover">AllPro Repairs</a>
                </nav>
                <nav className="flex flex-col gap-1 text-slate-700 font-medium text-sm md:gap-3">
                    <header className="font-bold text-lg text-teal-600">Impotent Links</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">About Us</a>
                </nav>
                <nav className="flex flex-col gap-1 text-slate-700 font-medium text-sm md:gap-3">
                    <header className="font-bold text-lg text-teal-600">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>

        </div>

    );
};

export default Footer;