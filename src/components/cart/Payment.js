import React, { useState } from "react";
import DropIn from "braintree-web-drop-in-react";
import { getToken, processPayment, createOrder } from "../../functions/payment";
import { useDispatch, useSelector } from "react-redux";
import useWebAnimations, { backInLeft } from "@wellyshen/use-web-animations";
import { toast } from "react-toastify";
const Payment = ({ history }) => {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => ({ ...state }));
  const { ref } = useWebAnimations({ ...backInLeft });
  let [token, setToken] = useState({
    clientToken: null,
    instance: {},
  });
  useState(() => {
    getToken(user._id, user.token)
      .then((res) => {
        setToken({ ...token, clientToken: res.data });
      })
      .catch((e) => {});
  }, []);

  const onPurchase = () => {
    let nonce;
    let getNonce = token.instance.requestPaymentMethod().then((data) => {
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: history.location.state.total,
      };
      processPayment(user._id, user.token, paymentData)
        .then((response) => {
          const orderData = {
            products: cart,
            transaction_id: response.data.transaction.id,
            amount: response.data.transaction.amount,
          };

          createOrder(user._id, user.token, orderData);

          dispatch({
            type: "CLEAR_CART",
          });
          localStorage.removeItem("cart");
          toast.success("PAYMENT SUCCESS");
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Fail to pay bill");
        });
    });
  };
  return (
    <>
      <h1 className="text-center display-4 text-success" ref={ref}>
        Enter your card detail
      </h1>
      {token.clientToken !== null && cart.length > 0 ? (
        <div className="text-center">
          <DropIn
            options={{ authorization: token.clientToken.clientToken }}
            onInstance={(instance) => (token.instance = instance)}
          />
          <button className="btn btn-block btn-success" onClick={onPurchase}>
            Buy
          </button>
        </div>
      ) : (
        <h3>Please login or add something to cart</h3>
      )}
    </>
  );
};

export default Payment;
