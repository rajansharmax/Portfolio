import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="section-footer-2 position-relative">
                    <div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
                        <div className="text-center">
                            <Link
                                className="d-flex main-logo align-items-center justify-content-center mb-3"
                                href=""
                            >
                                <Image
                                    src="/assets/imgs/home-page-2/template/favicon.svg"
                                    alt="zelio"
                                    width={40}
                                    height={40}
                                />
                                <span className="fs-4 ms-2">rajansharmax</span>
                            </Link>
                            <div className="d-flex justify-content-center gap-3">
                                <Link href="https://linktr.ee/rajansharmax" target="_blank">
                                    <i className="ri-facebook-circle-fill fs-18"></i>
                                </Link>
                                <Link href="http://twitter.com/rajansharmax" target="_blank">
                                    <i className="ri-twitter-x-fill fs-18"></i>
                                </Link>
                                <Link href="http://linkedin.com/in/rajansharmax" target="_blank">
                                    <i className="ri-linkedin-fill fs-18"></i>
                                </Link>
                                <Link href="http://github.com/rajansharmax" target="_blank">
                                    <i className="ri-github-fill fs-18"></i>
                                </Link>
                            </div>
                            <div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
                                <Link href="#about" className="fs-6">
                                    {" "}
                                    About me{" "}
                                </Link>
                                <Link href="#resume" className="fs-6">
                                    {" "}
                                    Resume{" "}
                                </Link>
                                <Link href="#services" className="fs-6">
                                    {" "}
                                    Services{" "}
                                </Link>
                                <Link href="#portfolio" className="fs-6">
                                    {" "}
                                    Portfolio{" "}
                                </Link>
                                <Link href="#blog" className="fs-6">
                                    {" "}
                                    Blog{" "}
                                </Link>
                                <Link href="#contact" className="fs-6">
                                    {" "}
                                    Contact{" "}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="btn-scroll-top style-btn-2">
                <svg
                    className="progress-square svg-content"
                    width="100%"
                    height="100%"
                    viewBox="0 0 40 40"
                >
                <path d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z" />
                </svg>
            </div>
        </>
    );
}

export default Footer;