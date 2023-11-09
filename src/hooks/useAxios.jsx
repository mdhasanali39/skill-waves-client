import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const axiosInstance = axios.create({
    baseURL: "https://skill-waves-server.vercel.app/api/v1",
    withCredentials: true,
})
const useAxios = () => {
    const authData = useContext(AuthContext)
    useEffect(()=>{
        axiosInstance.interceptors.response.use(res=>{
            return res
        }, err => {
            console.log('error in interceptors',err);
            console.log(err.message);
            if(err.response.status === 401 || err.response.status === 403){
                console.log('logout user');
                authData?.logOut()
                .then(() => {
                    console.log('user logged out');
                }).catch((err) => {
                    console.log(err.message);
                });
            }
        })
    },[authData])
    return axiosInstance;
};

export default useAxios;