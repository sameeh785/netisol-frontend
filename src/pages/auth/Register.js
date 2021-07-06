import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUser, getUser } from "../../functions/auth";
import { useDispatch } from "react-redux";
const initialState = {
  name: "",
  email: "",
  password: "",
};
const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialState);
  const { name, email, password } = value;
  const formValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const roleBasedRedirect = (res) => {
    console.log(res)
    if (res.data.role === 2) {
      console.log("Admin")
      history.push("/admin/dashboard");
    } else {
      console.log('User')
      history.push("/user/history");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(value)
      .then((res) => {
        window.localStorage.setItem("Token12", res.data.token);
        dispatch({
          type: "SET_TOKEN",
          payload: { token: res.data.token },
        });
        return res.data.token;
      })
      .then((token) => {
        return getUser(token);
      })
      .then((user) => {
        dispatch({
          type: "LOGIN_USER",
          payload: { ...user },
        });
        roleBasedRedirect(user);
      })
      .catch((err) => {
        console.log(err)
        if (err) {
          toast.error(err.response.data.error);
        }
      });
  };
  const createForm = () => (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="input"
            value={name}
            onChange={formValue}
            className="form-control"
            name="name"
            placeholder="Enter your name.."
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={formValue}
            className="form-control"
            name="email"
            placeholder="Enter your email.."
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={formValue}
            className="form-control"
            name="password"
            placeholder="Enter your password.."
            required
          />
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Registration</h4>
            {createForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
