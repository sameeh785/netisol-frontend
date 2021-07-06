import axios from "axios";

export const createProduct = async (data, token) => {
  return await axios.post(`${process.env.REACT_APP_API}/create/product`, data, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const createCategory = async (data, token) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create/category`,
    data,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getAllCategories = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API}/allCategories`, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const updateCategory = async (id, data, token) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/update/category/${id}`,
    data,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};
export const updateProduct = async (id, data, token) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/update/product/${id}`,
    data,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};
export const deleteCategory = async (id, token) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/delete/category/${id}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const delProduct = async (id, token) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/delete/product/${id}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getSingleProduct = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/product/${id}`);
};
export const getCategory = async (id, token) => {
  return await axios.get(`${process.env.REACT_APP_API}/get/category/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const allProducts = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/Allproducts`);
};
