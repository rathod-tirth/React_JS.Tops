import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div>
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="font-secondary text-primary mb-4">Super Crispy</h1>
                            <h1 className="display-1 text-uppercase text-white mb-4">CakeZone</h1>
                            <h1 className="text-uppercase text-white">The Best Cake In London</h1>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                                <a href className="btn btn-primary border-inner py-3 px-5 me-5">Read More</a>
                                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                    <span />
                                </button>
                                <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">Play Video</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/* Video Modal Start */}
            <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Modal End */}
            {/* About Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: 600 }}>
                        <h2 className="text-primary font-secondary">About Us</h2>
                        <h1 className="display-4 text-uppercase">Welcome To CakeZone</h1>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" alt='img' src="img/about.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-5">
                            <h4 className="mb-4">Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo</h4>
                            <p className="mb-5">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
                            <div className="row g-5">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{ width: 90, height: 90 }}>
                                        <i className="fa fa-heartbeat fa-2x text-white" />
                                    </div>
                                    <h4 className="text-uppercase">100% Healt='img'hy</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{ width: 90, height: 90 }}>
                                        <i className="fa fa-award fa-2x text-white" />
                                    </div>
                                    <h4 className="text-uppercase">Award Winning</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Facts Start */}
            <div className="container-fluid bg-img py-5 mb-5">
                <div className="container py-5">
                    <div className="row gx-5 gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-star text-white" />
                                </div>
                                <div className="ps-4">
                                    <h6 className="text-primary text-uppercase">Our Experience</h6>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-users text-white" />
                                </div>
                                <div className="ps-4">
                                    <h6 className="text-primary text-uppercase">Cake Specialist</h6>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-check text-white" />
                                </div>
                                <div className="ps-4">
                                    <h6 className="text-primary text-uppercase">Complete Project</h6>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-mug-hot text-white" />
                                </div>
                                <div className="ps-4">
                                    <h6 className="text-primary text-uppercase">Happy Clients</h6>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}
            {/* Products Start */}
            <Product />
            {/* Products End */}
            {/* Service Start */}
            <div className="container-fluid service position-relative px-5 mt-5" style={{ marginBottom: 135 }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-primary border-inner text-center text-white p-5">
                                <h4 className="text-uppercase mb-3">Birthday Cake</h4>
                                <p>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                                <a className="text-uppercase text-dark" href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-primary border-inner text-center text-white p-5">
                                <h4 className="text-uppercase mb-3">Wedding Cake</h4>
                                <p>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                                <a className="text-uppercase text-dark" href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-primary border-inner text-center text-white p-5">
                                <h4 className="text-uppercase mb-3">Custom Cake</h4>
                                <p>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                                <a className="text-uppercase text-dark" href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6 text-center">
                            <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                            <a href className="btn btn-primary border-inner py-3 px-5">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service Start */}
            {/* Team Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: 600 }}>
                        <h2 className="text-primary font-secondary">Team Members</h2>
                        <h1 className="display-4 text-uppercase">Our Master Chefs</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-1.jpg" alt='img' />
                                    <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-twitter fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-facebook-f fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-linkedin-in fw-normal" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-dark border-inner text-center p-4">
                                    <h4 className="text-uppercase text-primary">Full Name</h4>
                                    <p className="text-white m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-2.jpg" alt='img' />
                                    <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-twitter fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-facebook-f fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-linkedin-in fw-normal" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-dark border-inner text-center p-4">
                                    <h4 className="text-uppercase text-primary">Full Name</h4>
                                    <p className="text-white m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-3.jpg" alt='img' />
                                    <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-twitter fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-facebook-f fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#home"><i className="fab fa-linkedin-in fw-normal" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-dark border-inner text-center p-4">
                                    <h4 className="text-uppercase text-primary">Full Name</h4>
                                    <p className="text-white m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
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
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: 600 }}>
                        <h2 className="text-primary font-secondary">Testimonial</h2>
                        <h1 className="display-4 text-uppercase">Our Clients Say!!!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item bg-dark text-white border-inner p-4">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid flex-shrink-0" alt='img' src="img/testimonial-1.jpg" style={{ width: 60, height: 60 }} />
                                <div className="ps-3">
                                    <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </p>
                        </div>
                        <div className="testimonial-item bg-dark text-white border-inner p-4">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" alt='img' style={{ width: 60, height: 60 }} />
                                <div className="ps-3">
                                    <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </p>
                        </div>
                        <div className="testimonial-item bg-dark text-white border-inner p-4">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" alt='img' style={{ width: 60, height: 60 }} />
                                <div className="ps-3">
                                    <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </p>
                        </div>
                        <div className="testimonial-item bg-dark text-white border-inner p-4">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid flex-shrink-0" alt='img' src="img/testimonial-4.jpg" style={{ width: 60, height: 60 }} />
                                <div className="ps-3">
                                    <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </div>

    )
}

export default Home