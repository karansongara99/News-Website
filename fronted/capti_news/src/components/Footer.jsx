export default function Footer() {
    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid bg-dark footer py-3">
                <div className="container py-5">
                    <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <a href="#" className="d-flex flex-column flex-wrap">
                                    <p className="text-white mb-0 display-6">Captilance News</p>
                                    <br />
                                </a>
                            </div>
                            <div className="col-lg-9">
                                <div className="d-flex position-relative rounded-pill overflow-hidden">
                                    <input className="form-control border-0 w-100 py-3 rounded-pill" type="email" placeholder="capti.news@gmail.com" />
                                    <button type="submit" className="btn btn-primary border-0 py-3 px-5 rounded-pill text-white position-absolute" style={{ top: 0, right: 0 }}>Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="row g-5">
                        <div className="col-lg-6 col-xl-3">
                            <div className="footer-item-1">
                                <h4 className="mb-4 text-white">Get In Touch</h4>
                                <p className="text-secondary line-h">Address: <span className="text-white">RK World Street , Ring Road, Rajkot, Gujarat</span></p>
                                <p className="text-secondary line-h">Email: <span className="text-white">capti.news@gmail.com</span></p>
                                <p className="text-secondary line-h">Phone: <span className="text-white">+91 9898888888</span></p>
                                <div className="d-flex line-h">
                                    <a className="btn btn-light me-2 btn-md-square rounded-circle" href><i className="fab fa-twitter text-dark" /></a>
                                    <a className="btn btn-light me-2 btn-md-square rounded-circle" href><i className="fab fa-facebook-f text-dark" /></a>
                                    <a className="btn btn-light me-2 btn-md-square rounded-circle" href><i className="fab fa-youtube text-dark" /></a>
                                    <a className="btn btn-light btn-md-square rounded-circle" href><i className="fab fa-linkedin-in text-dark" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="footer-item-2">
                                <div className="d-flex flex-column mb-4">
                                    <h4 className="mb-4 text-white">Recent Posts</h4>
                                    <a href="#">
                                    </a><div className="d-flex align-items-center"><a href="#">
                                        <div className="rounded-circle border border-2 border-primary overflow-hidden">
                                            <img src="img/footer-1.jpg" className="img-zoomin img-fluid rounded-circle w-100" alt />
                                        </div>
                                    </a><div className="d-flex flex-column ps-4"><a href="#">
                                        <p className="text-uppercase text-white mb-3">Life Style</p>
                                    </a><a href="#" className="h6 text-white">
                                                Get the best speak market, news.
                                            </a>
                                            <small className="text-white d-block"><i className="fas fa-calendar-alt me-1" /> Dec 9, 2025</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#">
                                    </a><div className="d-flex align-items-center"><a href="#">
                                        <div className="rounded-circle border border-2 border-primary overflow-hidden">
                                            <img src="img/footer-2.jpg" className="img-zoominimg-fluid rounded-circle w-100" alt />
                                        </div>
                                    </a><div className="d-flex flex-column ps-4"><a href="#">
                                        <p className="text-uppercase text-white mb-3">Sports</p>
                                    </a><a href="#" className="h6 text-white">
                                                Get the best speak market, news.
                                            </a>
                                            <small className="text-white d-block"><i className="fas fa-calendar-alt me-1" /> Dec 9, 2025</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="d-flex flex-column text-start footer-item-3">
                                <h4 className="mb-4 text-white">Categories</h4>
                                <a className="btn-link text-white" href><i className="fas fa-angle-right text-white me-2" /> Sports</a>
                                <a className="btn-link text-white" href><i className="fas fa-angle-right text-white me-2" /> Entertainment</a>
                                <a className="btn-link text-white" href><i className="fas fa-angle-right text-white me-2" /> Lifestyle</a>
                                <a className="btn-link text-white" href><i className="fas fa-angle-right text-white me-2" /> Politician</a>
                                <a className="btn-link text-white" href><i className="fas fa-angle-right text-white me-2" /> Live News</a>
                                <a className="btn-link text-white" href><i className="fas fa-angle-right text-white me-2" /> Business</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="footer-item-4">
                                <h4 className="mb-4 text-white">Our Gallary</h4>
                                <div className="row g-2">
                                    <div className="col-4">
                                        <div className="rounded overflow-hidden">
                                            <img src="img/footer-1.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="rounded overflow-hidden">
                                            <img src="img/footer-2.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="rounded overflow-hidden">
                                            <img src="img/footer-3.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="rounded overflow-hidden">
                                            <img src="img/footer-4.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="rounded overflow-hidden">
                                            <img src="img/footer-5.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="rounded overflow-hidden">
                                            <img src="img/footer-6.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Copyright Start */}
            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2" />Captilance News</a>, All right reserved.</span>
                        </div>
                        <div className="col-md-6 my-auto text-center text-md-end text-white">
                            {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                            {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                            {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                            Designed By <a className="">Captilance</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-primary border-2 border-white rounded-circle back-to-top"><i className="fa fa-arrow-up" /></a>
        </div>
    )
}