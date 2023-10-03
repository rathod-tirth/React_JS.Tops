import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "react-toastify";

function SignUp() {
  const redirect = useNavigate();
  const [userValue, setUserValue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    status: true
  });

  const { id, name, email, password, phone } = userValue;

  const validation = () => {
    let result = true;
    if (name === "") {
      toast.error('Name is required !');
      result = false;
    }
    if (email === "") {
      toast.error('Email is required !');
      result = false;
    }
    if (password === "") {
      toast.error('Password is required !');
      result = false;
    }
    if (phone === "") {
      toast.error('Mobile is required !');
      result = false;
    }
    return result;
  };

  const handleChange = (e) => {
    setUserValue({ ...userValue, id: new Date().getTime().toString().slice(8, 12), [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validation()) {
        const res = await axios.post("http://localhost:3000/user", userValue);
        if (res.status === 201) {
          localStorage.setItem("userId", id);
          setUserValue({ id: "", name: "", email: "", password: "", phone: "", status: true });
          toast.success("Account Created");
          redirect("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="pt-3 pb-5 mt-0 d-flex bg-dark" style={{ "height": "100vh" }}>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center d-flex-row text-center h-100">
            <div className="col-6">
              <div className="card border border-dark">
                <div className="card-body mx-auto">
                  <h4 className="card-title mt-3 mb-3 text-center">Sign Up</h4>
                  <form method="post">
                    <div className="form-group input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text p-3">
                          <i className="fa fa-user" />
                        </span>
                      </div>
                      <input name='name' className="form-control" onChange={e => handleChange(e)} placeholder="Name" type="text" value={name} />
                    </div>
                    <div className="form-group input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text p-3">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                      <input name='email' className="form-control" onChange={e => handleChange(e)} placeholder="Email address" type="email" value={email} />
                    </div>
                    <div className="form-group input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text p-3">
                          <i className="fa fa-lock" />
                        </span>
                      </div>
                      <input name="password" className="form-control" onChange={e => handleChange(e)} placeholder="Create password" type="password" value={password} />
                    </div>
                    <div className="form-group input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text p-3">
                          <i className="fa fa-mobile" />
                        </span>
                      </div>
                      <input name="phone" className="form-control" onChange={e => handleChange(e)} placeholder="Mobile" type="number" value={phone} />
                    </div>
                    <div className="form-group mb-3">
                      <Link to="/" onClick={e => handleSubmit(e)} className="btn btn-primary btn-block">
                        Create Account
                      </Link>
                    </div>
                    <p className="text-center">
                      Have an account?
                      <Link to="/login" className="ms-3">Log In</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SignUp;
