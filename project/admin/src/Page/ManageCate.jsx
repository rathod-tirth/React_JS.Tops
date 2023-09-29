import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ManageCate() {
    useEffect(() => { fetch() }, []);
    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get("http://localhost:3000/category");
        // console.log(res.data);
        setData(res.data);
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3000/category/${id}`);
        fetch();
        toast.success("Data deleted Successfully");
    }
    return (
        <div>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="page-head-line">Category Table</h1>
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
                                                        <th>Type</th>
                                                        <th>Price Range</th>
                                                        <th>Prep</th>
                                                        <th>Edit/Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map((data) => {
                                                            const { id, type, price, prep } = data;
                                                            return (
                                                                <tr key={id}>
                                                                    <td>{id}</td>
                                                                    <td>{type}</td>
                                                                    <td>₹{price}</td>
                                                                    <td>{prep} day</td>
                                                                    <td>
                                                                        <button type="submit" className="btn btn-success">
                                                                            Edit
                                                                        </button>
                                                                        <button type="submit" className="btn btn-danger" onClick={() => deleteData(id)}>
                                                                            Delete
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

export default ManageCate;
