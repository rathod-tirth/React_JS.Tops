import React from 'react'
import Product from './Product'

function Menu() {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid bg-dark bg-img p-5 mb-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="display-4 text-uppercase text-white">Menu &amp; Pricing</h1>
                        <a href>Home</a>
                        <i className="far fa-square text-primary px-2" />
                        <a href>Menu &amp; Pricing</a>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            <Product />
            {/* Offer Start */}
            <div className="container-fluid bg-offer my-5 py-5">
                <div className="container py-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title position-relative text-center mx-auto mb-4 pb-3" style={{ maxWidth: 600 }}>
                                <h2 className="text-primary font-secondary">Special Kombo Pack</h2>
                                <h1 className="display-4 text-uppercase text-white">Super Crispy Cakes</h1>
                            </div>
                            <p className="text-white mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.</p>
                            <a href className="btn btn-primary border-inner py-3 px-5 me-3">Shop Now</a>
                            <a href className="btn btn-dark border-inner py-3 px-5">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Offer End */}
        </div>

    )
}

export default Menu