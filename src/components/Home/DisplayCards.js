import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { allProducts } from "../../functions/employeTask";
import { Card } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
const { Meta } = Card;

const DisplayCards = () => {
  let [products, setProducts] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    allProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  }, []);
  const handleModal = (product) => {
    if (user.token) {
      let cart = [];
      if (window) {
        if (window.localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.push({
          ...product,
          count: 1,
        });
        const unique = _.uniqWith(cart, _.isEqual);
        window.localStorage.setItem("cart", JSON.stringify(unique));
        dispatch({
          type : "ADD_TO_CART",
          payload : unique
        })
      }
    } else {
      history.push({
        pathname: "/signin",
        state: { from: `/` },
      });
    }
  };
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return (
            <div className="col-md-4 mt-4 " key={index}>
              <Card
                style={{ width: 250, margin: "auto !important" }}
                cover={
                  <img
                    src={`${process.env.REACT_APP_API}/product/photo/${product._id}`}
                    style={{ objectFit: "cover", height: 250 }}
                  />
                }
                actions={[
                  <ShoppingCartOutlined
                    onClick={() => handleModal(product)}
                    className="text-primary"
                  />,
                  <Link to={`/single/product/${product._id}`}>
                    <EyeOutlined key="edit" className="text-primary" />
                  </Link>,
                ]}
              >
                <Meta
                  title={`${product.name} - $${product.price}`}
                  description={product.description}
                />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayCards;
