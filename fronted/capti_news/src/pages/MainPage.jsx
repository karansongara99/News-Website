export default function MainPage() {
    return (
        <div>
            {/* Modal Search Start */}
            <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}
            {/* Features Start */}
            <div className="container-fluid features mb-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="row g-4 align-items-center features-item">
                                <div className="col-4">
                                    <div className="rounded-circle position-relative">
                                        <div className="overflow-hidden rounded-circle">
                                            <img src="img/features-sports-1.jpg" className="img-zoomin img-fluid rounded-circle w-100" alt />
                                        </div>
                                        <span className="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute" style={{ top: '10%', right: '-10px' }}>3</span>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="features-content d-flex flex-column">
                                        <p className="text-uppercase mb-2">Sports</p>
                                        <a href="#" className="h6">
                                            Get the best speak market, news.
                                        </a>
                                        <small className="text-body d-block"><i className="fas fa-calendar-alt me-1" /> December 9, 2024</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="row g-4 align-items-center features-item">
                                <div className="col-4">
                                    <div className="rounded-circle position-relative">
                                        <div className="overflow-hidden rounded-circle">
                                            <img src="img/features-technology.jpg" className="img-zoomin img-fluid rounded-circle w-100" alt />
                                        </div>
                                        <span className="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute" style={{ top: '10%', right: '-10px' }}>3</span>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="features-content d-flex flex-column">
                                        <p className="text-uppercase mb-2">Technology</p>
                                        <a href="#" className="h6">
                                            Get the best speak market, news.
                                        </a>
                                        <small className="text-body d-block"><i className="fas fa-calendar-alt me-1" /> December 9, 2024</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="row g-4 align-items-center features-item">
                                <div className="col-4">
                                    <div className="rounded-circle position-relative">
                                        <div className="overflow-hidden rounded-circle">
                                            <img src="img/features-fashion.jpg" className="img-zoomin img-fluid rounded-circle w-100" alt />
                                        </div>
                                        <span className="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute" style={{ top: '10%', right: '-10px' }}>3</span>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="features-content d-flex flex-column">
                                        <p className="text-uppercase mb-2">Fashion</p>
                                        <a href="#" className="h6">
                                            Get the best speak market, news.
                                        </a>
                                        <small className="text-body d-block"><i className="fas fa-calendar-alt me-1" /> December 9, 2024</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="row g-4 align-items-center features-item">
                                <div className="col-4">
                                    <div className="rounded-circle position-relative">
                                        <div className="overflow-hidden rounded-circle">
                                            <img src="img/features-life-style.jpg" className="img-zoomin img-fluid rounded-circle w-100" alt />
                                        </div>
                                        <span className="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute" style={{ top: '10%', right: '-10px' }}>3</span>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="features-content d-flex flex-column">
                                        <p className="text-uppercase mb-2">Life Style</p>
                                        <a href="#" className="h6">
                                            Get the best speak market, news.
                                        </a>
                                        <small className="text-body d-block"><i className="fas fa-calendar-alt me-1" /> December 9, 2024</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Main Post Section Start */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-7 col-xl-8 mt-0">
                            <div className="position-relative overflow-hidden rounded">
                                <img src="img/news-1.jpg" className="img-fluid rounded img-zoomin w-100" alt />
                                <div className="d-flex justify-content-center px-4 position-absolute flex-wrap" style={{ bottom: 10, left: 0 }}>
                                    <a href="#" className="text-white me-3 link-hover"><i className="fa fa-clock" /> 06 minute read</a>
                                    <a href="#" className="text-white me-3 link-hover"><i className="fa fa-eye" /> 3.5k Views</a>
                                    <a href="#" className="text-white me-3 link-hover"><i className="fa fa-comment-dots" /> 05 Comment</a>
                                    <a href="#" className="text-white link-hover"><i className="fa fa-arrow-up" /> 1.5k Share</a>
                                </div>
                            </div>
                            <div className="border-bottom py-3">
                                <a href="#" className="display-4 text-dark mb-0 link-hover">Captilance News</a>
                            </div>
                            <p className="mt-3 mb-4">NewsPaper of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley standard dummy text ever since the 1500s, when an unknown printer took a galley...
                            </p>
                            <div className="bg-light p-4 rounded">
                                <div className="news-2">
                                    <h3 className="mb-4">Top Story</h3>
                                </div>
                                <div className="row g-4 align-items-center">
                                    <div className="col-md-6">
                                        <div className="rounded overflow-hidden">
                                            <img src="img/news-2.jpg" className="img-fluid rounded img-zoomin w-100" alt />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex flex-column">
                                            <a href="#" className="h3">Stoneman Clandestine Ukrainian claims successes against Russian.</a>
                                            <p className="mb-0 fs-5"><i className="fa fa-clock"> 06 minute read</i> </p>
                                            <p className="mb-0 fs-5"><i className="fa fa-eye"> 3.5k Views</i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="bg-light rounded p-4 pt-0">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="rounded overflow-hidden">
                                            <img src="img/news-3.jpg" className="img-fluid rounded img-zoomin w-100" alt />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex flex-column">
                                            <a href="#" className="h4 mb-2">Get the best speak market, news.</a>
                                            <p className="fs-5 mb-0"><i className="fa fa-clock"> 06 minute read</i> </p>
                                            <p className="fs-5 mb-0"><i className="fa fa-eye"> 3.5k Views</i></p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-5">
                                                <div className="overflow-hidden rounded">
                                                    <img src="img/news-3.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="features-content d-flex flex-column">
                                                    <a href="#" className="h6">Get the best speak market, news.</a>
                                                    <small><i className="fa fa-clock"> 06 minute read</i> </small>
                                                    <small><i className="fa fa-eye"> 3.5k Views</i></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-5">
                                                <div className="overflow-hidden rounded">
                                                    <img src="img/news-4.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="features-content d-flex flex-column">
                                                    <a href="#" className="h6">Get the best speak market, news.</a>
                                                    <small><i className="fa fa-clock"> 06 minute read</i> </small>
                                                    <small><i className="fa fa-eye"> 3.5k Views</i></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-5">
                                                <div className="overflow-hidden rounded">
                                                    <img src="img/news-5.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="features-content d-flex flex-column">
                                                    <a href="#" className="h6">Get the best speak market, news.</a>
                                                    <small><i className="fa fa-clock"> 06 minute read</i> </small>
                                                    <small><i className="fa fa-eye"> 3.5k Views</i></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-5">
                                                <div className="overflow-hidden rounded">
                                                    <img src="img/news-6.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="features-content d-flex flex-column">
                                                    <a href="#" className="h6">Get the best speak market, news.</a>
                                                    <small><i className="fa fa-clock"> 06 minute read</i> </small>
                                                    <small><i className="fa fa-eye"> 3.5k Views</i></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-5">
                                                <div className="overflow-hidden rounded">
                                                    <img src="img/news-7.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="features-content d-flex flex-column">
                                                    <a href="#" className="h6">Get the best speak market, news.</a>
                                                    <small><i className="fa fa-clock"> 06 minute read</i> </small>
                                                    <small><i className="fa fa-eye"> 3.5k Views</i></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-5">
                                                <div className="overflow-hidden rounded">
                                                    <img src="img/news-7.jpg" className="img-zoomin img-fluid rounded w-100" alt />
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="features-content d-flex flex-column">
                                                    <a href="#" className="h6">Get the best speak market, news.</a>
                                                    <small><i className="fa fa-clock"> 06 minute read</i> </small>
                                                    <small><i className="fa fa-eye"> 3.5k Views</i></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Post Section End */}
            {/* Banner Start */}
            <div className="container-fluid py-5 my-5" style={{ background: 'linear-gradient(rgba(202, 203, 185, 1), rgba(202, 203, 185, 1))' }}>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7">
                            <h1 className="mb-4 text-primary">Newsers</h1>
                            <h1 className="mb-4">Get Every Weekly Updates</h1>
                            <p className="text-dark mb-4 pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            </p>
                            <div className="position-relative mx-auto">
                                <input className="form-control w-100 py-3 rounded-pill" type="email" placeholder="Your Busines Email" />
                                <button type="submit" className="btn btn-primary py-3 px-5 position-absolute rounded-pill text-white h-100" style={{ top: 0, right: 0 }}>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="rounded">
                                <img src="img/banner-img.jpg" className="img-fluid rounded w-100 rounded" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}
        </div>
    )
}