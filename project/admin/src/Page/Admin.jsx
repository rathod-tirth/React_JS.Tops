import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
    useEffect(() => { fetch() }, []);
    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get("http://localhost:3000/admin");
        setData(res.data);
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3000/user/${id}`);
        fetch();
        alert("Delete Success");
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Admin</h1>
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
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((admin) => {
                                                        const { id, name, email, password } = admin;
                                                        return (
                                                            <tr key={id}>
                                                                <td>{id}</td>
                                                                <td>{name}</td>
                                                                <td>{email}</td>
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
    );
}

export default Admin;
