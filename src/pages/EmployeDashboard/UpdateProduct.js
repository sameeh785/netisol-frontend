import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import EmployeNav from "../../components/nav/EmployeNav";
import { getSingleProduct, updateProduct } from "../../functions/employeTask";
const initialState = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  photo: "",
  formData: new FormData(),
};
const UpdateProduct = ({ match }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [value, setValue] = useState(initialState);
  const { name, description, price, stock, formData } = value;
  useEffect(() => {
    getSingleProduct(match.params.id).then((res) => {
      setValue({ ...res.data, formData : new FormData() });
    });
   
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    updateProduct(match.params.id,formData,user.token).then((res) => {
      toast.success(res.data.msg)
    }).catch(err => {
      toast.error(err.response.data.error)
    })
  };
  const handleChange = (name) => (event) => {
    const valuee = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, valuee);
    setValue({ ...value, [name]: valuee });
  };

  const createform = () => {
    return (
      <>
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              className="form-control"
              name="name"
              placeholder="Enter product name"
              value={name}
              onChange={handleChange("name")}
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label>Product description</label>
            <input
              className="form-control"
              name="description"
              placeholder="Enter product description"
              value={description}
              onChange={handleChange("description")}
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label>Select Photo</label>
            <input
              className="form-control"
              type="file"
              name="photo"
              onChange={handleChange("photo")}
              accept="image"
              
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              value={price}
              onChange={handleChange("price")}
              type="number"
              min="0"
              required
            />
          </div>
          {/* //todo task */}
          {/* <div className="form-group">
            <label>Category</label>
            <input className="form-control" type="number" min="0" required />
          </div> */}
          <div className="form-group">
            <label>Stock</label>
            <input
              className="form-control"
              type="number"
              name="stock"
              placeholder="Enter number of products"
              value={stock}
              onChange={handleChange("stock")}
              min="0"
              required
            />
          </div>
          <br />

          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </>
    );
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <EmployeNav />
        </div>
        <div className="col-md-6">
          <h4>Update Product</h4>
          {/* {createform()} */}
          {value.photo?.data ? (
            createform()
          ) : (
            <h4 className="text-danger">Loading</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
