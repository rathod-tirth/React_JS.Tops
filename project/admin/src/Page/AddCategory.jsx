import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';

function AddCategory() {
    const [formValue, setFormValue] = useState({
        id: "",
        type: "",
        price: "",
        prep: ""
    });

    const { type, price, prep } = formValue;

    const validation = () => {
        var result = true;
        if (type === "") {
            toast.error('Type is required !');
            result = false;
        }
        if (price === "") {
            toast.error('Price is required !');
            result = false;
        }
        if (prep === "") {
            toast.error('prep is required !');
            result = false;
        }
        return result;
    };

    const changeValue = (e) => {
        setFormValue({ ...formValue, id: new Date().getTime().toString().slice(8, 12), [e.target.name]: e.target.value });
    };

    const submitValue = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post("http://localhost:3000/category", formValue);
            if (res.status === 201) {
                toast.success("Category Added Successfully");
                setFormValue({ id: "", type: "", price: "", prep: "" });
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
                                <h1 className="page-head-line">Add Category</h1>
                            </div>
                        </div>
                        {/* /. ROW  */}
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        Add Category
                                    </div>
                                    <div className="panel-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Type</label>
                                                <input className="form-control" type="text" name='type' value={type} onChange={changeValue} />
                                            </div>
                                            <div className="form-group">
                                                <label>Price Range</label>
                                                <input className="form-control" type="text" name='price' value={price} onChange={changeValue} />
                                            </div>
                                            <div className="form-group">
                                                <label>Preparation Time</label>
                                                <input className="form-control" type="text" name='prep' value={prep} onChange={changeValue} />
                                            </div>
                                            <button type="submit" className="btn btn-info" onClick={submitValue} >Add Cake</button>
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

export default AddCategory