import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getEmployes, deleteEmploy } from "../../../functions/createEmploy";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const ViewEmployes = () => {
  const [employe, setEmployes] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getEmployes(user.token)
      .then((res) => {
        console.log(res.data);
        setEmployes(res.data);
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });
  }, [reload]);
  const delEmploye = async (id) => {
    deleteEmploy(id, user.token)
      .then((res) => {
        toast.success(res.data.msg);
        setReload(!reload);
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });
  };
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-8">
          <br />

          <h4>All Employes</h4>
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Education</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employe.map((val, index) => {
                return (
                  <tr key={val._id}>
                    {" "}
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.country}</td>
                    <td>{val.education}</td>
                    <td>
                     <Link to={`/update/employe/${val._id}`}> <EditOutlined className="text-danger" /> </Link>
                    </td>
                    <td>
                      <DeleteOutlined
                        onClick={() => {
                          delEmploye(val._id);
                        }}
                        className="text-danger"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployes;
