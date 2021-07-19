import React from "react";
import { useSelector } from "react-redux";
import CardTable from "./CardTable";
const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          {cart.length > 0 ? (
            <CardTable cart={cart} />
          ) : (
            <h1>We dont have any product in the cart</h1>
          )}
        </div>
        <div className="col-md-4">
          <h4 className="text-center text-primary">Total Bill</h4>
          {cart.map((product, index) => {
            return (
              <p className="lead text-center">
                {`${product.name} * ${product.count} = ${
                  product.price * product.count
                }`}
              </p>
            );
          })}
          <hr />
          <h4 className="text-center">
            Total = {""}{" "}
            {cart.reduce((currentValue, nextValue) => {
              return currentValue + nextValue.count * nextValue.price;
            }, 0)}
          </h4>
          <hr />
          <button
            onClick={() => {
              const bill = cart.reduce((currentValue, nextValue) => {
                return currentValue + nextValue.count * nextValue.price;
              }, 0);
              history.push({
                pathname: "/payment",
                state: {
                  total:bill
                }
              });
            }}
            className="btn btn-outline-primary float-end"
            disabled={!user.token}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
