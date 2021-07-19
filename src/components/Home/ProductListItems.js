import React from "react";

const ProductListItems = ({product}) => {
  const {name,price,stock,sold} = product
  return (
    <ul className="list-group">
      <li className="list-group-item text-primary">
        Name{" "}
        <span className="float-end text-danger">
           {name}
        </span>
      </li>
      <li className="list-group-item text-primary">
        Price{" "}
        <span className="float-end text-danger">
          $ {price}
        </span>
      </li>
      <li className="list-group-item text-primary">
        Available{" "}
        <span className="float-end text-danger">
          {stock}
        </span>
      </li>

      <li className="list-group-item text-primary">
        Sold{" "}
        <span className="float-end text-danger">
          {sold}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
