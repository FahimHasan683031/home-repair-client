import { useLoaderData, useNavigate } from 'react-router-dom';

import toast from "react-hot-toast";

import axios from 'axios';
import useAuthContext from '../Hoocks/useAuthContext';

const UpdateService = () => {
    const data = useLoaderData()
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const formHandle = e => {
        e.preventDefault()
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const providerName = form.providerName.value;
        const email = form.email.value;
        const price = form.price.value;
        const area = form.area.value;
        const providerDescription = form.providerDescription.value;
        const serviceDescription = form.serviceDescription.value;
        const providerImage = user.photoURL;

        const service = { serviceName, serviceImage, providerName, email, price, area, providerDescription, serviceDescription, providerImage }
        console.log(service)

        axios.put(`http://localhost:5000/api/v1/services/${data._id}`, service)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Successfully Update Service!')
                    navigate('/myServices')
                }

            })
            .catch(err=>console.log(err.message))
    }
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <form className="max-w-3xl mx-auto bg-teal-100 drop-shadow-lg my-24 px-6 py-8 rounded-lg text-base text-black" onSubmit={formHandle} action="">

                <h1 className="text-center text-teal-600 mb-12 md:text-5xl text-3xl font-bold">Update Service</h1>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className=" w-full">
                        <label>
                            Service Name
                        </label>
                        <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " defaultValue={data.serviceName} type="text" name="serviceName" id="" />
                    </div>

                    <div className="w-full">
                        <label >
                            Service Image URL
                        </label>
                        <input required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" defaultValue={data.serviceImage} type="url" name="serviceImage" id="" />

                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className=" w-full">
                        <label>
                            Your Name
                        </label>
                        <input type="text" className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" name="providerName" value={user?.displayName} readOnly id="" />
                    </div>

                    <div className="w-full">
                        <label >
                            Your Email
                        </label>
                        <input className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" type="email" name="email" value={user?.email} id="" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className=" w-full">
                        <label>
                            price
                        </label>
                        <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " type="text" name="price" defaultValue={data.price} id="" />
                    </div>

                    <div className="w-full">
                        <label >
                            Service Area
                        </label>
                        <input required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" type="text" name="area" defaultValue={data.area} id="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-5">
                    <textarea required className=" my-6 drop-shadow-lg p-3 rounded flex-1 " name="serviceDescription" placeholder="Enter Service Description" defaultValue={data.serviceDescription} id="" rows="5"></textarea>
                    <textarea required className=" my-6 drop-shadow-lg p-3 rounded flex-1" name="providerDescription" placeholder="Enter provider Description" defaultValue={data.providerDescription} id="" rows="5"></textarea>
                </div>

                <input className="w-full font-bold my-5 cursor-pointer py-3 rounded-md text-white bg-teal-600" type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default UpdateService;







