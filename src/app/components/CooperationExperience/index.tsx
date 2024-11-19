import Cooperation from "../Section/Cooperation";
import Link from "next/link";

const CooperationExperience = () => {
    return (
        <>
            <section className="section-coporation">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="rounded-3 border border-1 position-relative overflow-hidden">
                                <div className="box-linear-animation">
                                    <div className="p-lg-8 p-md-6 p-3">
                                        <div className="d-flex align-items-center">
                                            <svg
                                                className="text-primary-2 me-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="5"
                                                height="6"
                                                viewBox="0 0 5 6"
                                                fill="none"
                                            >
                                                <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                                            </svg>
                                            <span className="text-linear-4 d-flex align-items-center">
                                                {" "}
                                                Cooperation{" "}
                                            </span>
                                        </div>
                                        <h3 className="fw-medium">
                                            More than +168{" "}
                                            <span className="text-300">
                                                companies <br />
                                            </span>{" "}
                                            trusted <span className="text-300">worldwide_</span>
                                        </h3>
                                        <div className="my-5 border border-1 rounded-2 p-3">
                                            <Cooperation />
                                        </div>
                                        <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                                            <div className="">
                                                <div className="circle-1 position-relative z-0">
                                                    <div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
                                                        <div className="position-absolute top-50 start-50 translate-middle z-2">
                                                            <img
                                                                className="w-100 h-100 rounded-circle"
                                                                src="/assets/imgs/coporation/avatar.png"
                                                                alt="zelio"
                                                            />
                                                            <svg
                                                                className="text-primary-2 position-absolute bottom-0 end-0"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="9"
                                                                height="9"
                                                                viewBox="0 0 5 6"
                                                                fill="none"
                                                            >
                                                                <circle
                                                                    cx="2.5"
                                                                    cy="3"
                                                                    r="2.5"
                                                                    fill="#A8FF53"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                                <Link href="#">
                                                    <i className="ri-skype-fill"></i>
                                                    <span className="text-300">
                                                        {" "}
                                                        <span className="text-secondary-2">
                                                            rajansharmax
                                                        </span>
                                                    </span>
                                                </Link>
                                                <Link href="#">
                                                    <i className="ri-phone-fill"></i>
                                                    <span className="text-300">
                                                        {" "}
                                                        <span className="text-secondary-2">
                                                            +1-234-567-8901
                                                        </span>
                                                    </span>
                                                </Link>
                                                <Link href="#">
                                                    <i className="ri-mail-fill"></i>
                                                    <span className="text-300">
                                                        {" "}
                                                        <span className="text-secondary-2">
                                                            contact@rajansharmax
                                                        </span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-absolute d-none d-md-block decorate">
                                        <div className="rotateme">
                                            <div className="circle-1-1"></div>
                                            <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                                                <svg
                                                    className="mb-5 position-absolute bottom-0 start-0"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="9"
                                                    height="9"
                                                    viewBox="0 0 9 9"
                                                    fill="none"
                                                >
                                                    <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                                                </svg>
                                            </div>
                                            <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                                                <svg
                                                    className="mb-3 position-absolute bottom-0 end-0"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="9"
                                                    height="9"
                                                    viewBox="0 0 9 9"
                                                    fill="none"
                                                >
                                                    <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-lg-0 pt-5">
                            <div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
                                <div className="d-flex align-items-center">
                                    <svg
                                        className="text-primary-2 me-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="5"
                                        height="6"
                                        viewBox="0 0 5 6"
                                        fill="none"
                                    >
                                        <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                                    </svg>
                                    <span className="text-linear-4 d-flex align-items-center">
                                        {" "}
                                        Git Journaling{" "}
                                    </span>
                                </div>
                                <div className="h-100 position-relative">
                                    <ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
                                        <li className="position-relative z-1">
                                            <div className="d-flex align-items-center gap-2">
                                                <p className="text-300 text-nowrap">15 Jul:</p>
                                                <span className="text-dark">
                                                    Muzzilla-streaming-API-services-for-Python
                                                </span>
                                            </div>
                                        </li>
                                        <li className="position-relative z-1">
                                            <div className="d-flex align-items-center gap-2">
                                                <p className="text-300 text-nowrap">30 Jun:</p>
                                                <span className="text-dark">
                                                    ChatHub-Chat-application-VueJs-Mongodb
                                                </span>
                                            </div>
                                        </li>
                                        <li className="position-relative z-1">
                                            <div className="d-flex align-items-center gap-2">
                                                <p className="text-300 text-nowrap">26 May:</p>
                                                <span className="text-dark">
                                                    DineEasy-coffee-tea-reservation-system
                                                </span>
                                            </div>
                                        </li>
                                        <li className="position-relative z-1">
                                            <div className="d-flex align-items-center gap-2">
                                                <p className="text-300 text-nowrap">17 Apr:</p>
                                                <span className="text-dark">
                                                    FinanceBuddy-Personal-finance-tracker
                                                </span>
                                            </div>
                                        </li>
                                        <li className="position-relative z-1">
                                            <div className="d-flex align-items-center gap-2">
                                                <p className="text-300 text-nowrap">05 Mar:</p>
                                                <span className="text-dark">
                                                    TuneStream-Music-streaming-service-API
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="line-left position-absolute border-start z-0"></div>
                                </div>
                                <div className="bg-overlay position-absolute bottom-0 start-0 z-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CooperationExperience;