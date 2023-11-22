import {
    useQuery, 
  } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSicure';
import useAuthContext from './useAuthContext';

const useMyServices = () => {
    const axiosSecure=useAxiosSecure()
    const { user } = useAuthContext()
    const {refetch,data: services=[]}= useQuery({
        queryKey:['MYservicesData'],
        queryFn:async()=>{
           const res = await axiosSecure.get(`/api/v1/services?email=${user?.email}`)
           return res.data;
        }
    })
    return (
        [services,refetch]
    );
};

export default useMyServices;