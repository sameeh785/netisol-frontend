import React, { useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { Radio } from "antd";
import {useSelector} from 'react-redux'
import { toast } from "react-toastify";
import { createEmploye } from "../../../functions/createEmploy";
const initialData = {
  name: "",
  email: "",
  password: "",
  country: "",
  age: 1,
  education: "",
  gender: "female",
};

const EmployeCreate = () => {
 
  const handleSubmit = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    createEmploye(value,user.token)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });
  };
  const [value, setValue] = useState(initialData);
  const { name, email, password, age, country, gender, education } = value;
  const {user} = useSelector((state) => ({...state}))
  const employeForm = () => (
    <div>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control mt-1"
            value={name}
            onChange={handleSubmit}
            placeholder="Enter your name .."
            autoFocus
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleSubmit}
            value={email}
            className="form-control mt-1"
            placeholder="Enter your email .."
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            onChange={handleSubmit}
            name="password"
            value={password}
            className="form-control mt-1"
            placeholder="Enter your password .."
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            min="0"
            onChange={handleSubmit}
            value={age}
            className="form-control mt-1"
            placeholder="Enter your Age .."
          />
        </div>
        <div className="form-group">
          <label>Education Info</label>
          <input
            type="text"
            name="education"
            onChange={handleSubmit}
            value={education}
            className="form-control mt-1"
            placeholder="Enter your Education detail .."
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            onChange={handleSubmit}
            value={country}
            className="form-control mt-1"
            placeholder="Enter your country name .."
          />
        </div>
        <label>Gender</label>
        <br />

        <Radio.Group name="gender" onChange={handleSubmit} value={gender}>
          <Radio value={"male"}>Male</Radio>
          <Radio value={"female"}>Female</Radio>
        </Radio.Group>
        <br />
        <br />
        <button className="btn btn-primary">Create Employe</button>
      </form>
    </div>
  );
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-8">
          <h4>Create Employe</h4>
          {employeForm()}
        </div>
      </div>
    </div>
  );
};
export default EmployeCreate;
