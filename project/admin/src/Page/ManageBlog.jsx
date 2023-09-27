import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageBlog() {
    useEffect(() => { fetch() }, []);
    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get("http://localhost:3000/blog");
        // console.log(res.data);
        setData(res.data);
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3000/user/${id}`);
        fetch();
        alert("Delete Success");
    }
    return (
        <div>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="page-head-line">Blogs</h1>
                            </div>
                        </div>
                        {/* /. ROW  */}
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                {
                                    data.map((data) => {
                                        const { id, title, blog } = data;
                                        return (
                                            <div className="panel panel-primary" key={id}>
                                                <div className="panel-heading">
                                                    {title}
                                                    <span style={{ float: "right" }}>
                                                        <button className="btn btn-success" >Edit</button>
                                                        <button className="btn btn-danger" onClick={() => deleteData(id)}>Delete</button>
                                                    </span>
                                                </div>
                                                <div className="panel-body">
                                                    <p>{blog}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* /. PAGE INNER  */}
                </div>
            </div>
        </div>

    )
}

export default ManageBlog