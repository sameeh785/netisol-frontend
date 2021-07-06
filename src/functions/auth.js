import axios from "axios";

export const createUser = async (data) => {
  return await axios.post(`${process.env.REACT_APP_API}/signup`, data);
};

export const getUser = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API}/getUser`, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const getEmployee = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API}/getEmployee`, {
    headers: { "x-auth-token": token },
  });
};

export const signin = async (data) => {
  return await axios.post(`${process.env.REACT_APP_API}/signin`, data);
};

export const signinEmploye = async (data) => {
  return await axios.post(`${process.env.REACT_APP_API}/employe/sigin`, data);
};
