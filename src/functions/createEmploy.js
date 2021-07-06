import axios from "axios";

export const createEmploye = async (data, token) => {
  return await axios.post(`${process.env.REACT_APP_API}/create/employe`, data, {
    headers: {
      "x-auth-token": token,
    },
  });
};
export const getEmployes = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API}/getAllEmployes`, {
    headers: {
      "x-auth-token": token,
    },
  });
};
export const deleteEmploy = async (id, token) => {
  return await axios.delete(`${process.env.REACT_APP_API}/employe/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const updateEmploye = async (id, token, data) => {
  return await axios.put(`${process.env.REACT_APP_API}/employe/${id}`, data, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const getEmploye = async (id, token) => {
  return await axios.get(`${process.env.REACT_APP_API}/employe/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
};
