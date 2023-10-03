import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';

function Header() {
    useEffect(() => { fetch() });
    const fetch = async () => {
        try {
            if (localStorage.getItem("userId")) {
                const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("userId")}`);
                const data = res.data;
                if (data.status) {
                    localStorage.removeItem("userId");
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid px-0 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-4 text-center bg-secondary py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <i className="bi bi-envelope fs-1 text-primary me-3" />
                            <div className="text-start">
                                <h6 className="text-uppercase mb-1">Email Us</h6>
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center bg-primary border-inner py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <NavLink to="/" className="navbar-brand">
                                <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-dark me-3" />CakeZone</h1>
                            </NavLink>
                        </div>
                    </div>
                    {localStorage.getItem("userId") ? (
                        <NavLink to="/profile" className="col-lg-4 text-center bg-secondary py-3">
                            <div className="d-inline-flex align-items-center justify-content-center">
                                <i className="bi bi-person fs-1 text-primary me-3" />
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">Profile</h6>
                                </div>
                            </div>
                        </NavLink>
                    ) : (
                        <NavLink to="/login" className="col-lg-4 text-center bg-secondary py-3">
                            <div className="d-inline-flex align-items-center justify-content-center">
                                <i className="bi bi-person fs-1 text-primary me-3" />
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">Login/SignUp</h6>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                <NavLink to="/" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-primary me-3" />CakeZone</h1>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto mx-lg-auto py-0">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About Us</NavLink>
                        <NavLink to="/menu" className="nav-item nav-link">Menu &amp; Pricing</NavLink>
                        <NavLink to="/team" className="nav-item nav-link">Master Chefs</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </div>

    )
}

export default Header