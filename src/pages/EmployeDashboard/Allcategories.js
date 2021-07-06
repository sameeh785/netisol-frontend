import React, { useEffect, useState } from "react";
import EmployeNav from "../../components/nav/EmployeNav";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {getAllCategories,deleteCategory} from '../../functions/employeTask'
const AllCategories = () => {
  const [category, setCategory] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getAllCategories(user.token)
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });
  }, [reload]);
  const delEmploye = async (id) => {
    deleteCategory(id, user.token)
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
          <EmployeNav />
        </div>
        <div className="col-md-8">
          <br />

          <h4>All Categories</h4>
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {category.map((val, index) => {
                return (
                  <tr key={val._id}>
                    {" "}
                    <td>{val.name}</td>
                    <td>
                      <Link to={`/update/category/${val._id}`}>
                        {" "}
                        <EditOutlined className="text-danger" />{" "}
                      </Link>
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

export default AllCategories;
