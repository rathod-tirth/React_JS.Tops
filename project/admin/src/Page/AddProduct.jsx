import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function AddProduct() {
    useEffect(() => { fetch() });
    const [value, setValue] = useState([]);

    const fetch = async () => {
        const res = await axios.get("http://localhost:3000/category");
        setValue(res.data);
    };

    const [formValue, setFormValue] = useState({
        id: "",
        type: "",
        flavour: "",
        weight: "",
        price: "",
        stock: ""
    });

    const { type, flavour, weight, price, stock } = formValue;

    const validation = () => {
        var result = true;
        if (type === "") {
            toast.error('Type is required !');
            result = false;
        }
        if (flavour === "") {
            toast.error('Price is required !');
            result = false;
        }
        if (weight === "") {
            toast.error('prep is required !');
            result = false;
        }
        if (price === "") {
            toast.error('prep is required !');
            result = false;
        }
        if (stock === "") {
            toast.error('prep is required !');
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
            const res = await axios.post("http://localhost:3000/product", formValue);
            if (res.status === 201) {
                toast.success("Product Added Successfully");
                setFormValue({ id: "", type: "", flavour: "", weight: "", price: "", stock: "" });
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
                                <h1 className="page-head-line">Add Cake</h1>
                            </div>
                        </div>
                        {/*/.ROW*/}
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        Add Cake
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label>Type</label>
                                            <select className="form-control" onChange={changeValue} name='type'>
                                                <option disabled selected> -- Select -- </option>
                                                {value.map((val) => {
                                                    return (
                                                        <option key={val.id}>{val.type}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        <hr />
                                        <div className="form-group">
                                            <label>Weight</label>
                                            <select className="form-control" onChange={changeValue} name='weight'>
                                                <option disabled selected> -- Select -- </option>
                                                <option>500g</option>
                                                <option>1kg</option>
                                                <option>2kg</option>
                                                <option>5kg</option>
                                                <option>5kg+</option>
                                            </select>
                                        </div>
                                        <hr />
                                        <div className="form-group">
                                            <label>Flavour</label>
                                            <select className="form-control" onChange={changeValue} name='flavour'>
                                                <option disabled selected> -- Select -- </option>
                                                <option>Vanilla</option>
                                                <option>Chocolate</option>
                                                <option>Butterscotch</option>
                                                <option>Strawberry</option>
                                            </select>
                                        </div>
                                        <hr />
                                        <div className="form-group">
                                            <label>Price</label>
                                            <select className="form-control" onChange={changeValue} name='price'>
                                                <option disabled selected> -- Select -- </option>
                                                <option>Rs. 0-500</option>
                                                <option>Rs. 500-1000</option>
                                                <option>Rs. 1000-5000</option>
                                                <option>Rs. 5000+</option>
                                            </select>
                                        </div>
                                        <hr />
                                        <div className="form-group">
                                            <label>Stock</label>
                                            <input className='form-control' type="number" name="stock" onChange={changeValue} />
                                        </div>
                                        <hr />
                                        <button type="submit" className="btn btn-info" onClick={submitValue}>Add Cake</button>
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

export default AddProduct