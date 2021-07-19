import React, { useEffect, useState } from "react";
import { singleProduct } from "../../functions/employeTask";
import { Card, Tabs } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductListItems from "./ProductListItems";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
const { TabPane } = Tabs;

const SingleProduct = ({ match, history }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  var [product, setProduct] = useState({});
  useEffect(() => {
    singleProduct(match.params.id).then((res) => {
      setProduct(res.data);
    });
  }, []);
  const handleModal = () => {
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
          type: "ADD_TO_CART",
          payload: unique,
        });
      }
    } else {
      history.push({
        pathname: "/signin",
        state: { from: `single/product/${match.params.id}` },
      });
    }
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 text-center">
          <img
            style={{ width: 450, height: 400 }}
            src={`${process.env.REACT_APP_API}/product/photo/${product?._id}`}
          />
          <br />
          <br />
          <Tabs type="card">
            <TabPane tab="Description" key="1">
              {product.description}
            </TabPane>
            <TabPane tab="More" key="2">
              Call use on xxxx xxx xxx to learn more about this product.
            </TabPane>
          </Tabs>
        </div>
        <div className="col-md-4">
          <Card
            actions={[
              <>
                <ShoppingCartOutlined
                  onClick={handleModal}
                  className="text-danger"
                />{" "}
                <br /> {user.token ? "Add to cart" : "Login to add to card"}
              </>,
            ]}
          >
            <ProductListItems product={product} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
