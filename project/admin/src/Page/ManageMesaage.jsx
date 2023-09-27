import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

function ManageMessage() {
    useEffect(() => { fetch() }, []);
    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get("http://localhost:3000/message");
        // console.log(res.data);
        setData(res.data);
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3000/message/${id}`);
        fetch();
        toast.success("Data Deleted Successfully");
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Message Table</h1>
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
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Subject</th>
                                                    <th>Comment</th>
                                                    <th>Edit/Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((data) => {
                                                        const { id, name, email, subject, comment } = data;
                                                        return (
                                                            <tr key={id}>
                                                                <td>{id}</td>
                                                                <td>{name}</td>
                                                                <td>{email}</td>
                                                                <td>{subject}</td>
                                                                <td>{comment}</td>
                                                                <td>
                                                                    <button type="submit" className="btn btn-success">
                                                                        Reply
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
    );
}

export default ManageMessage;
