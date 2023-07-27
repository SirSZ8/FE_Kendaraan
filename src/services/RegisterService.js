/* eslint-disable no-unused-vars */
import config from "../config";
import HTTPService from "./HTTPService";

const ENDPOINT_REGISTER = "/user/register"; // Update the endpoint for user registration
const KEY_LOCAL_STORAGE_TOKEN = "TOKEN";

const register = ({ idUser, fullname, email, password, photoUser }) => {
  return HTTPService.post(`${config.BASE_URL}${ENDPOINT_REGISTER}`, {
    idUser,
    fullname,
    email,
    password,
    // photoUser,
  });
};

const saveToken = (token) => {
  localStorage.setItem(KEY_LOCAL_STORAGE_TOKEN, token);
};

const getToken = () => {
  return localStorage.getItem(KEY_LOCAL_STORAGE_TOKEN);
};

const RegisterService = {
  register,
  getToken,
  saveToken,
};

export default RegisterService;
