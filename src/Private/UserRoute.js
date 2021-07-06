import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import LoadingToRedirect from "./LoadingToRedirect";
const UserRoute = ({ children, ...rest }) => {
  const history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  return user && user.token && user.role == 0 ? (
    <Route {...rest} />
  ) : (
    <LoadingToRedirect />
  );
};

export default UserRoute;
