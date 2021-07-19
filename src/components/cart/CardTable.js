import ModelImage from "react-modal-image";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { forEach } from "lodash";
import { useDispatch } from "react-redux";

const CardTable = ({ cart }) => {
  const dispatch = useDispatch();
  const handleQuantityChange = (e, stock, index) => {
    if (e > stock) {
      toast.error("Max available quanityt is " + stock);
      return;
    }
    let cart = [];
    if (window) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach((product, i) => {
          console.log(product);
          if (i == index) {
            product.count = e;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch({
          type: "ADD_TO_CART",
          payload: cart,
        });
      }
    }
  };

  const deleteFromCart = (index) => {
    let cart = [];
    if (window) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach((product, i) => {
          if (i == index) {
            cart.splice(i, 1);
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch({
          type: "ADD_TO_CART",
          payload: cart,
        });
      }
    }
  };
  return (
    <table className="table">
      <thead className="thead text-primary text-center">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product, index) => {
          return (
            <tr key={index} className="text-center">
              <td style={{ width: 200, height: "auto" }}>
                <ModelImage
                  small={`${process.env.REACT_APP_API}/product/photo/${product._id}`}
                  large={`${process.env.REACT_APP_API}/product/photo/${product._id}`}
                ></ModelImage>
              </td>
              <td>{product.name}</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  defaultValue="1"
                  onChange={() =>
                    handleQuantityChange(
                      event.target.value,
                      product.stock,
                      index
                    )
                  }
                />
              </td>
              <td>{product.price}</td>
              <td>
                <DeleteOutlined
                  onClick={() => deleteFromCart(index)}
                  className="text-danger"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CardTable;
