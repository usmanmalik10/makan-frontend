import axios from "axios";
import { USERS_BASE_URL } from "../../Components/Constants/Config/config.dev";


const API_URL_1 = `${USERS_BASE_URL}/v1/shop`;

const API_URL_2 = `${USERS_BASE_URL}/v1/shop?limit=1&page=3`;

const API_URL_3 = `${USERS_BASE_URL}/v1/shop/64b59ad471fb58fed54928d9`;

const API_URL_4 = `${USERS_BASE_URL}/v1/shop/64b59ad471fb58fed54928d9`;

const API_URL_5 = `${USERS_BASE_URL}/v1/shop/64b59ad471fb58fed54928d9`;

const createshop = async () => {
  try {
    const response = await axios.post(API_URL_1);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const showshop = async () => {
  try {
    const response = await axios.get(API_URL_2);

   
console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const getshop = async () => {
  try {
    const response = await axios.get(API_URL_3);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const updateshop = async () => {
  try {
    const response = await axios.patch(API_URL_4);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const deleteshop = async () => {
  try {
    const response = await axios.delete(API_URL_5);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const shopService = {
  createshop,
	showshop,
	getshop,
  updateshop,
  deleteshop
};

export default shopService;
