import React from "react";
import { Card } from "antd";
import {
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;
const Product = ({ product , deleteproduct }) => {
  const { name, description, price } = product;
  return (
    <Card
      style={{ width: 250}}
      cover={
        <img
          src={`${process.env.REACT_APP_API}/product/photo/${product._id}`}
          style={{objectFit : "cover", height : 250}}
        />
      }
      actions={[<DeleteOutlined key="delete"className="text-danger" onClick={() => {
        deleteproduct(product._id)
      }} />, <Link to={`/update/product/${product._id}`}><EditOutlined key="edit" className="text-danger"/></Link>]}
    >
      <Meta
       
        title={name}
        description={description}
      />
    </Card>
  );
};
export default Product;
