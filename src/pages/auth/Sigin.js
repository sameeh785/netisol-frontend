import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signin, getUser } from "../../functions/auth";
import { Link } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};
const Signin = ({ history }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialState);
  const { email, password } = value;
  const formValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const roleBasedRedirect = (res) => {
    let intended = history.location.state;
    if (intended) {
      history.push(intended.from);
    } else {
      if (res.data.role === 2) {
        history.push("/admin/dashboard");
      } else {
        history.push("/user/history");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(value)
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
        if (err) {
          toast.error(err.response.data.error);
        }
      });
  };
  const createForm = () => (
    <>
      <form onSubmit={handleSubmit}>
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
        <label className="text-primary float-end ">
          <Link to="/signin/employe">Click here to Signin as Employe..</Link>
        </label>
        <br />
        <button className="btn btn-primary">Signin</button>
      </form>
    </>
  );
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Signin</h4>
            {createForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
