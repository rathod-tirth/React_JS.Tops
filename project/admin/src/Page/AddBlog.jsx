import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';

function AddBlog() {
    const [formValue, setFormValue] = useState({
        id: "",
        title: "",
        blog: ""
    });
    const { title, blog } = formValue;

    const validation = () => {
        let result = true
        if (title === "") {
            toast.error("Title is required");
            result = false;
        }
        if (blog === "") {
            toast.error("Blog is required");
            result = false;
        }
        return result;
    };

    const changeValue = (e) => {
        setFormValue({ ...formValue, id: new Date().getTime().toString().slice(8, 12), [e.target.name]: e.target.value });
        console.log(formValue);
    };

    const submitValue = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post("http://localhost:3000/blog", formValue);
            console.log(res);
            if (res.status === 201) {
                toast.success("Blog Added Successfully");
                setFormValue({ id: "", title: "", blog: "" });
            }
        }
    };

    return (
        <div>
            <div id='wrapper'>
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="page-head-line">Add Blog</h1>
                            </div>
                        </div>
                        {/* /. ROW  */}
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="panel panel-info">
                                    <div className="panel-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input className="form-control" type="text" name='title' onChange={changeValue} value={title} />
                                            </div>
                                            <div className="form-group">
                                                <label>Blog</label>
                                                <textarea className="form-control" rows={30} name='blog' onChange={changeValue} value={blog} />
                                            </div>
                                            <button className="btn btn-info" onClick={submitValue}>Add Blog</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /. PAGE INNER  */}
                </div>
            </div>
        </div>
    )
}

export default AddBlog