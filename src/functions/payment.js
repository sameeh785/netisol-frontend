import axios from "axios";

export const getToken = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.get(
    `${process.env.REACT_APP_API}/payment/gettoken/${id}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const processPayment = async (id, token, payment) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/payment/braintree/${id}`,
    payment,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const createOrder = async (id,token,order) => {
  console.log(id,token,order)
  return await axios.post(`${process.env.REACT_APP_API}/create/order/${id}`,order,{
    headers : {
      "x-auth-token": token,
    }
  })
};
