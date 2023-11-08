import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel  mb-20 w-full">
            <div id="slide1" className="carousel-item relative w-full bg-[url('https://hickeysafety.ie/wp-content/uploads/2022/02/Home-repair-1.jpg')] bg-cover  object-contain">
                <div className="absolute top-0 left-0 w-full h-full bg-[#030303a1] z-0"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 z-40 relative items-center max-w-5xl pt-10 mx-auto px-6">
                    <div>
                        <h1 className="text-5xl font-bold text-white">Welcome!</h1>
                        <h3 className="text-2xl font-bold my-4 text-teal-500">Explore our word.</h3>
                        <p className="text-gray-200 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa quasi doloremque culpa odio, amet laborum, ipsum vitae necessitatibus maiores eius et, aut fugiat repellendus cupiditate atque quia. Fuga, sapiente?</p>

                        <Link className="px-4 py-2 text-white font-medium rounded-sm bg-teal-600 ">Services</Link>
                    </div>
                    <div>
                        <img src={'https://i.ibb.co/zPWWHF7/home-calculator-03-600x536-removebg-preview.png'} alt="" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-[url('https://img.freepik.com/premium-photo/man-uniform-work-kitchen-sink_152404-7260.jpg?w=740')] bg-cover  object-contain">
            <div className="absolute top-0 left-0 w-full h-full bg-[#030303bd] z-0"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 z-40 relative items-center max-w-5xl pt-10 mx-auto px-6">
                    <div>
                        <h1 className="text-5xl font-bold text-white">Welcome!</h1>
                        <h3 className="text-2xl font-bold my-4 text-teal-500">Explore our word.</h3>
                        <p className="text-gray-200 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa quasi doloremque culpa odio, amet laborum, ipsum vitae necessitatibus maiores eius et, aut fugiat repellendus cupiditate atque quia. Fuga, sapiente?</p>

                        <Link className="px-4 py-2 text-white font-medium rounded-sm bg-teal-600 ">Services</Link>
                    </div>
                    <div>
                        <img src={'https://i.ibb.co/zPWWHF7/home-calculator-03-600x536-removebg-preview.png'} alt="" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-[url('https://img.freepik.com/free-photo/part-male-construction-worker_329181-3734.jpg?w=740&t=st=1699437997~exp=1699438597~hmac=62900080e7a1c3ca62d0f7dce299e2f78394d2ae1fe767c92720e869f1d046b1')] bg-cover  object-contain">
            <div className="absolute top-0 left-0 w-full h-full bg-[#030303c9] z-0"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 z-40 relative items-center max-w-5xl pt-10 mx-auto px-6">
                    <div>
                        <h1 className="text-5xl font-bold text-white">Welcome!</h1>
                        <h3 className="text-2xl font-bold my-4 text-teal-500">Explore our word.</h3>
                        <p className="text-gray-200 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa quasi doloremque culpa odio, amet laborum, ipsum vitae necessitatibus maiores eius et, aut fugiat repellendus cupiditate atque quia. Fuga, sapiente?</p>

                        <Link className="px-4 py-2 text-white font-medium rounded-sm bg-teal-600 ">Services</Link>
                    </div>
                    <div>
                        <img src={'https://i.ibb.co/zPWWHF7/home-calculator-03-600x536-removebg-preview.png'} alt="" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full bg-[url('https://img.freepik.com/premium-photo/person-s-hand-plugging-digital-multimeter-home_23-2148087608.jpg?w=740')] bg-cover  object-contain">
            <div className="absolute top-0 left-0 w-full h-full bg-[#030303c5] z-0"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 z-40 relative items-center max-w-5xl pt-10 mx-auto px-6">
                    <div>
                        <h1 className="text-5xl font-bold text-white">Welcome!</h1>
                        <h3 className="text-2xl font-bold my-4 text-teal-500">Explore our word.</h3>
                        <p className="text-gray-200 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa quasi doloremque culpa odio, amet laborum, ipsum vitae necessitatibus maiores eius et, aut fugiat repellendus cupiditate atque quia. Fuga, sapiente?</p>

                        <Link className="px-4 py-2 text-white font-medium rounded-sm bg-teal-600 ">Services</Link>
                    </div>
                    <div>
                        <img src={'https://i.ibb.co/zPWWHF7/home-calculator-03-600x536-removebg-preview.png'} alt="" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;