import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

  const redirect = useNavigate();

  const [userValue, setUserValue] = useState({
    name: "",
    password: ""
  });

  const { name, password } = userValue;

  const handleChange = (e) => {
    setUserValue({ ...userValue, [e.target.name]: e.target.value });
  };

  const validation = () => {
    let result = true;
    if (name === "") {
      toast.error('Name is required !');
      result = false;
    }
    if (password === "") {
      toast.error('Email is required !');
      result = false;
    }
    return result;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validation()) {
        const res = await axios.get("http://localhost:3000/user");
        const userData = await res.data;

        const isUser = userData.find(user => user.name === name && user.password === password);

        if (isUser) {
          if (isUser.status) {
            toast.success("Logged In");
            localStorage.setItem("userId", isUser.id);
            redirect("/");
          } else {
            toast.error("Account Blocked");
          }
        } else {
          toast.error("Incorrect Input");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='bg-dark' style={{ height: "100vh" }}>
        <div className='d-flex justify-content-center'>
          <div className="col-5 border border-dark p-5 mt-4 mb-2 bg-light text-dark">
            <div className="row text-center">
              <div className="col-md-12 fs-1 fw-bold">
                Login
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-9">
                <div className="panel-body">
                  <form>
                    <hr />
                    <div className="form-group input-group mb-3 ">
                      <span className="input-group-addon me-2 mt-2"><i className="fa fa-tag" /></span>
                      <input type="text" className="form-control" name='name' placeholder="Your Username" onChange={e => handleChange(e)} />
                    </div>
                    <div className="form-group input-group mb-2 ">
                      <span className="input-group-addon me-2 mt-2"><i className="fa fa-lock" /></span>
                      <input type="password" className="form-control" name='password' placeholder="Your Password" onChange={e => handleChange(e)} />
                    </div>
                    <div className="form-group mb-3" style={{ "fontSize": "0.8rem" }}>
                      <label className="checkbox me-5">
                        <input type="checkbox" /> Remember me
                      </label>
                      <span>
                        <a href="index.html">Forget password ? </a>
                      </span>
                    </div>
                    <Link onClick={e => handleSubmit(e)} className="btn btn-primary">Login Now</Link>
                    <hr />
                    <p style={{ "fontSize": "0.8rem" }}>
                      Not register ? <Link to="/signup">Sign Up </Link> or go to <Link to="/">Home</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </>
  )
}

export default Login