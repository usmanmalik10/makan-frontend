import axios from "axios";
import { USERS_BASE_URL } from "../../Components/constants/config/config.dev";
import { toast } from "react-toastify";

const API_URL_1 = `${USERS_BASE_URL}/v1/auth/register`;

const API_URL_2 = `${USERS_BASE_URL}/v1/auth/login`;

const API_URL_3 = `${USERS_BASE_URL}/v1/auth/refresh-tokens`;

const register = async (userData) => {
  try {
    const response = await axios.post(API_URL_1, userData);
   if(response.data.code === "400") return toast.error("User already exist!")
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const login = async (loginData) => {
  try {
    const response = await axios.post(API_URL_2, loginData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const refreshtoken = async () => {
  try {
    const response = await axios.post(API_URL_3);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const logout = () => {
  localStorage.clear();
};

const authService = {
  register,
  login,
  refreshtoken,
  logout,
};

export default authService;
