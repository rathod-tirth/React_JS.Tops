import React from 'react'
import { Link } from 'react-router-dom';

function Logout() {
    return (
        <div>
            <div className="col-md-12">
                <h1 className="page-head-line">LOGGED OUT</h1>
                <h1 className="page-subhead-line">Thanks for Visiting out site.</h1>
                <h1 className="page-subhead-line">Want to login again?? <Link to="/">Login</Link></h1>
            </div>
        </div>
    )
}

export default Logout