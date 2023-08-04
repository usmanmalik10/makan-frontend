import axios from "axios";
import { USERS_BASE_URL } from "../../Components/constants/config/config.dev";


const API_URL_1 = `${USERS_BASE_URL}/v1/real-estate`;

const API_URL_2 = `${USERS_BASE_URL}/v1/real-estate?category=plot&subCategory=rent&limit=10&page=1`;

const API_URL_3 = `${USERS_BASE_URL}/v1/real-estate/64b58b656da8a7eeb6513420`;

const API_URL_4 = `${USERS_BASE_URL}/v1/real-estate/64b58b656da8a7eeb6513420`;

const API_URL_5 = `${USERS_BASE_URL}/v1/real-estate/64b58b6e6da8a7eeb6513423`;

const createrealestate = async () => {
  try {
    const response = await axios.post(API_URL_1);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const showrealestate = async () => {
  try {
    const response = await axios.get(API_URL_2);

   
console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const getrealestate = async () => {
  try {
    const response = await axios.get(API_URL_3);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const updaterealestate = async () => {
  try {
    const response = await axios.patch(API_URL_4);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const deleterealestate = async () => {
  try {
    const response = await axios.delete(API_URL_5);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const realestateService = {
  createrealestate,
	showrealestate,
	getrealestate,
  updaterealestate,
  deleterealestate
};

export default realestateService;
