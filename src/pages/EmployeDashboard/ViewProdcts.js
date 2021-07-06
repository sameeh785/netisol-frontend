import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import EmployeNav from "../../components/nav/EmployeNav";
import { allProducts,delProduct } from "../../functions/employeTask";
import Product from "./Card";
const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [reload,setReload] = useState(false)
  const {user} = useSelector((state) => ({...state}))
  useEffect(() => {
    allProducts().then((res) => {
      setProducts(res.data);
    });
  }, [reload]);
  
  
  const deleteproduct = (id) => {
    console.log(id)
   delProduct(id,user.token).then((res) => {
     setReload(!reload)
    toast.success(res.data.msg)
   }).catch((err) => {
     toast.error(err.response.data.error)
   })
  };



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <EmployeNav />
        </div>
        <div className="col-md-10">
          <h4>All Products</h4>
          {
            <div className="row ">
              {products.length < 0 ? (
                <h4>No have any products</h4>
              ) : (
                products.map((product, index) => {
                  return (
                    <div className="col-md-3 ml-3 mt-3" key={index}>
                      <Product
                        product={product}
                        deleteproduct={deleteproduct}
                      />
                    </div>
                  );
                })
              )}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
