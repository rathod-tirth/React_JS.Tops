import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function ManageUser() {
  useEffect(() => { fetch() }, []);

  const redirect = useNavigate();

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/user");
    setData(res.data);
  }

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    toast.success("Data Deleted Successfully");
    fetch();
  }

  const handleStatus = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/user/${id}`);
      const data = await res.data;
      if (data.status) {
        await axios.patch(`http://localhost:3000/user/${id}`, { status: false });
        toast.success("User Blocked");
      } else {
        await axios.patch(`http://localhost:3000/user/${id}`, { status: true });
        toast.success("User UnBlocked");
      }
      fetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div id="wrapper">
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row">
              <div className="col-md-12">
                <h1 className="page-head-line">User Table</h1>
              </div>
            </div>
            {/* /. ROW  */}
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Edit/Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.map((user) => {
                              const { id, name, email, password, phone, status } = user;
                              return (
                                <tr key={id}>
                                  <td>{id}</td>
                                  <td>{name}</td>
                                  <td>{email}</td>
                                  <td>{password}</td>
                                  <td>{phone}</td>
                                  <td>{status ? "Unblock" : "Block"}</td>
                                  <td>
                                    <button type="submit" className="btn btn-success" onClick={() => { redirect(`/editUser/${id}`) }}>
                                      Edit
                                    </button>
                                    <button type="submit" className="btn btn-danger" onClick={() => deleteData(id)}>
                                      Delete
                                    </button>
                                    <button type="submit" className="btn btn-primary" onClick={() => { handleStatus(id) }}>
                                      {status ? "Block" : "Unblock"}
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /. PAGE INNER  */}
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
