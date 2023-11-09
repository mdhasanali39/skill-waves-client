import axios from "axios";

const instance = axios.create({
    baseURL: "https://skill-waves-server.vercel.app/api/v1",
})

const useAxiosNoCredentials = () => {
    return instance;
};

export default useAxiosNoCredentials;