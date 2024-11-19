import Image from "next/image";

const Experience = () => {
    return (
        <>
            <div className="section-static-1 z-0">
                <div className="container position-relative z-1">
                    <div className="bg-3 py-60 border border-1 rounded-3 position-relative overflow-hidden">
                        <div className="inner">
                            <div className="row align-items-center justify-content-lg-around justify-content-center">
                                <div className="col-lg-auto col-md-6 text-center text-lg-start">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content mx-auto">
                                            <i className="ri-shape-line text-primary-2"></i>
                                            <h2 className="text-300 my-0 fs-50">
                                                <span
                                                    className="odometer text-dark fw-medium"
                                                    data-count="12"
                                                ></span>
                                                <span className="fs-50 text-300 mb-0">+</span>
                                            </h2>
                                            <p className="fs-6 mb-0 text-dark">Year Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-6 text-center text-lg-start">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content mx-auto">
                                            <i className="ri-computer-line text-primary-2"></i>
                                            <h2 className="text-300 my-0 fs-50">
                                                <span
                                                    className="odometer text-dark fw-medium"
                                                    data-count="250"
                                                ></span>
                                                <span className="fs-50 text-300 mb-0">+</span>
                                            </h2>
                                            <p className="fs-6 mb-0 text-dark">Projects Completed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-6 text-center text-lg-start">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content mx-auto">
                                            <i className="ri-service-line text-primary-2"></i>
                                            <h2 className="text-300 my-0 fs-50">
                                                <span
                                                    className="odometer text-dark fw-medium"
                                                    data-count="680"
                                                ></span>
                                                <span className="fs-50 text-300 mb-0">+</span>
                                            </h2>
                                            <p className="fs-6 mb-0 text-dark">Satisfied Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-6 text-center text-lg-start">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content mx-auto">
                                            <i className="ri-award-line text-primary-2"></i>
                                            <h2 className="text-300 my-0 fs-50">
                                                <span
                                                    className="odometer text-dark fw-medium"
                                                    data-count="18"
                                                ></span>
                                                <span className="fs-50 text-300 mb-0">+</span>
                                            </h2>
                                            <p className="fs-6 mb-0 text-dark">Awards Winner</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="background position-absolute top-0 start-0 w-100 h-100 filter-invert">
                            <Image
                                src="/assets/imgs/home-page-2/static/bg.png"
                                alt="Background"
                                quality={100}
                                priority
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;