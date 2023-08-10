import axios from "axios";
import { USERS_BASE_URL } from "../../Components/constants/config/config.dev";

const API_URL_1 = `${USERS_BASE_URL}/v1/service`;

const API_URL_2 = `${USERS_BASE_URL}/v1/service?limit=10&page=1`;

const API_URL_3 = `${USERS_BASE_URL}/v1/service/64b43eb224eae8b93fe5cf42`;

const API_URL_4 = `${USERS_BASE_URL}/v1/service/64b43eb224eae8b93fe5cf42`;

const API_URL_5 = `${USERS_BASE_URL}/v1/service/64b43eb224eae8b93fe5cf42`;

const API_URL_6 = `${USERS_BASE_URL}/v1/service/userId`;

const createservice =  (serviceData, token) => {
  try {
    const response =  axios.post(API_URL_1, serviceData, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const showservice = async (token, limit, page, sortBy, category) => {
  try {
    const response = await axios.get(API_URL_2, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    });
console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const getservice = async () => {
  try {
    const response = await axios.patch(API_URL_3);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const updateservice = async () => {
  try {
    const response = await axios.patch(API_URL_4);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};
const deleteservice = async () => {
  try {
    const response = await axios.delete(API_URL_5);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const getservicebyuserid = async (token, limit, page, sortBy, userId) => {
  try {
    const response = await axios.get(API_URL_6, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    });

console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};


const serviceproviderService = {
  createservice,
	showservice,
	getservice,
  updateservice,
  deleteservice,
  getservicebyuserid
};

export default serviceproviderService;
