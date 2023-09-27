import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"

function Login() {
    const [value, setValue] = useState([]);

    const fetch = async () => {
        const res = await axios.get("http://localhost:3000/admin");
        setValue(res.data);
    };

    useEffect(() => { fetch() }, []);

    const [formValue, setFormValue] = useState({
        name: "",
        password: ""
    });
    const { name, password } = formValue;

    const validation = () => {
        let result = true;
        if (name === "") {
            toast.error("Name Required");
            result = false;
        }
        if (password === "") {
            toast.error("Password Required");
            result = false;
        }
        return result;
    };

    const changeValue = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        console.log(formValue);
    }

    const submitValue = (e) => {
        let count = 1;
        e.preventDefault();
        if (validation()) {
            value.map((val) => {
                if (name === val.name && password === val.password) {
                    // window.location.href = "http://localhost:3001";
                    toast.success("Logged in successfully");
                }
                return count = 0;
            })
            if (count) {
                toast.error("UserName or Password wrong");
            }
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row text-center " style={{ paddingTop: 100 }}>
                    <div className="col-md-12" style={{ "fontSize": "4rem", "fontWeight": "bold" }}>
                        Cake Bake
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form>
                                <hr />
                                <h5>Enter Details to Login</h5>
                                <br />
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="text" className="form-control" placeholder="Your Username" name='name' onChange={changeValue} />
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="password" className="form-control" placeholder="Your Password" name='password' onChange={changeValue} />
                                </div>
                                <div className="form-group">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" /> Remember me
                                    </label>
                                    <span className="pull-right">
                                        <a href="index.html">Forget password ? </a>
                                    </span>
                                </div>
                                <Link onClick={submitValue} className="btn btn-primary">Login Now</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login