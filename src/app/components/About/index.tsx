import Link from "next/link";
import Image from "next/image";
import CarouselTicker from "@/app/components/CarouselTicker";
import { routes } from "@/utils/routes";

const About = () => {
    return (
        <>
            <section
                id="about"
                className="section-hero-2 position-relative pb-3"
            >
                <div className="container hero-2">
                    <div className="border border-1 rounded-3">
                        <div className="box-linear-animation position-relative z-1">
                            <div className="row align-items-end py-60">
                                <div className="col-lg-5 ps-lg-5 text-lg-start text-center">
                                    <div className="position-relative mb-lg-0 mb-5">
                                        <Image
                                            src={"/assets/imgs/home-page-2/hero-1/people.png"}
                                            alt="zelio"
                                            width={500}
                                            height={500}
                                        />
                                        <div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
                                            <Image
                                                src={"/assets/imgs/home-page-2/hero-1/icon.svg"}
                                                alt="zelio"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mx-lg-auto col-md-12">
                                    <div className="p-lg-0 p-md-8 p-3">
                                        <div className="text-secondary-2 d-flex align-items-center">
                                            &lt;span&gt;
                                            <div className="text-dark">
                                                <div className="typewriter">
                                                    <h1 className="fs-6 fw-medium">
                                                        Hey, I’m rajansharmax
                                                    </h1>
                                                </div>
                                            </div>
                                            &lt;/span&gt;
                                        </div>
                                        <h1 className="fs-50 my-3">
                                            Senior{" "}
                                            <span className="text-linear-4">{`{Full Stack}`}</span>{" "}
                                            Software developer
                                            <span className="flicker">_</span>
                                        </h1>
                                        <p className="mb-6 text-secondary-2">
                                            &lt;p&gt;
                                            <span className="text-dark">
                                                With expertise in cutting-edge technologies such as
                                            </span>{" "}
                                            <span className="text-secondary-2">NodeJS</span>,{" "}
                                            <span className="text-secondary-2">React</span>,{" "}
                                            <span className="text-secondary-2">Angular</span>, and{" "}
                                            <span className="text-secondary-2">Laravel</span>
                                            <span className="text-dark">
                                                ... I deliver web solutions that are both innovative and
                                                robust.
                                            </span>
                                            &lt;/p&gt;
                                        </p>
                                        <div className="row">
                                            <div className="col-7">
                                                <CarouselTicker />
                                            </div>
                                            <div className="col-5 d-flex align-items-end">
                                                <span className="fs-6 text-300 mb-2">...and more</span>
                                            </div>
                                        </div>
                                        <Link
                                            href={routes.cvPreview}
                                            className="btn me-2 text-300 ps-0 mt-4"
                                        >
                                            <i className="ri-download-line text-primary-2"></i>[
                                            Download my CV ]
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background position-absolute top-0 start-0 w-100 h-100">
                    <Image
                        className="bg-w"
                        src={"/assets/imgs/home-page-2/hero-1/bg.png"}
                        alt="zelio"
                        width={500}
                        height={500}
                    />
                    <Image
                        className="bg-d"
                        src={"/assets/imgs/home-page-2/hero-1/bg-dark.png"}
                        alt="zelio"
                        width={500}
                        height={500}
                    />
                </div>
            </section>
        </>
    );
};

export default About;
