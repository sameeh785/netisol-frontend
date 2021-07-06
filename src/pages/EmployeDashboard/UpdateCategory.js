import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import EmployeNav from "../../components/nav/EmployeNav";
import { getCategory, updateCategory } from "../../functions/employeTask";

const UpdateCategory = ({ match }) => {
  let { user } = useSelector((state) => ({ ...state }));
  let [value, setValue] = useState({ name: "" });
  useEffect(() => {
    getCategory(match.params.id, user.token).then((res) => {
      setValue({
        name: res.data.name,
      });
    });
  }, []);
  const submitForm = (e) => {
    e.preventDefault();
    updateCategory(match.params.id,value, user.token)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <EmployeNav />
        </div>
        <div className="col-md-6">
          <h4>Create Category</h4>
          <div>
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label>Create Category</label>
                <input
                  className="form-control"
                  type="text"
                  value={value.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter category name.."
                  required
                />
              </div>
              <br />
              <button className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
