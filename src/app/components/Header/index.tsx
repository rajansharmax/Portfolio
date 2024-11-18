import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header>
                <div className="container position-relative">
                    <div className="position-relative">
                        <nav className="navbar navbar-expand-lg navbar-home-2 flex-nowrap z-999 p-0 border border-1 rounded-3">
                            <Link href="#" className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex" data-bs-target="offCanvas__info" aria-controls="offCanvas__info">
                                <i className="ri-menu-2-line"></i>
                            </Link>
                            <div className="container py-3 px-4">
                                <Link className="navbar-brand d-flex main-logo align-items-center" href="/">
                                    <Image src="/assets/imgs/home-page-2/template/favicon.svg" alt="zelio" width={40} height={40} />
                                    <span className="fs-4 ms-2">rajansharmax</span>
                                </Link>
                                <div className="d-none d-lg-flex"><div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" href="#about">About me</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" href="#resume">Resume</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#services">Services</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" href="#portfolio">Portfolio</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" href="#blog">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
                                    <div className="d-md-flex d-none gap-3">
                                        <Link href="http://facebook.com/rajansharmax" target="_blank">
                                            <i className="ri-facebook-circle-fill fs-18"></i>
                                        </Link>
                                        <Link href="http://twitter.com/rajansharmax" target="_blank">
                                            <i className="ri-twitter-x-fill fs-18"></i>
                                        </Link>
                                        <Link href="http://linkedin.com/rajansharmax" target="_blank">
                                            <i className="ri-linkedin-fill fs-18"></i>
                                        </Link>
                                        <Link href="http://github.com/rajansharmax" target="_blank">
                                            <i className="ri-github-fill fs-18"></i>
                                        </Link>
                                    </div>
                                    <div className="burger-icon burger-icon-white border rounded-3">
                                        <span className="burger-icon-top"></span>
                                        <span className="burger-icon-mid"></span>
                                        <span className="burger-icon-bottom"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="dark-light-switcher pe-10 pe-lg-0 pe-0 ps-md-5 ps-0 ps-lg-4 pe-lg-4 d-flex justify-content-center align-items-center icon_80 @@classList">
                                <i className="ri-sun-fill text-warning"></i>
                                <i className="ri-contrast-2-line text-white"></i>
                            </div>
                        </nav>
                    </div>
                    {/* <!-- offCanvas-menu --> */}
                    <div className="offCanvas__info style-2" id="offCanvas__info">
                        <div className="offCanvas__close-icon menu-close">
                            <button type="button" className="close-icon" data-bs-dismiss="offcanvas" aria-label="Close"><i className="ri-close-line"></i></button>
                        </div>
                        <div className="offCanvas__logo mb-5"><h3 className="mb-0">Get in touch</h3></div>
                        <div className="offCanvas__side-info mb-30">
                            <div className="contact-list mb-30">
                                <p className="fs-6 fw-medium text-200 mb-5">Im always excited to take on new projects and collaborate with innovative minds.</p>
                                <div className="mb-3">
                                    <span className="text-400 fs-5">Phone Number</span>
                                    <p className="mb-0">+91 9023232046</p>
                                </div>
                                <div className="mb-3">
                                    <span className="text-400 fs-5">Email</span>
                                    <p className="mb-0">rajansharmaa46@gmail.com</p>
                                </div>
                                <div className="mb-3">
                                    <span className="text-400 fs-5">Skype</span>
                                    <p className="mb-0">rajansharmax</p>
                                </div>
                                <div className="mb-3">
                                    <span className="text-400 fs-5">Address</span>
                                    <p className="mb-0">127.0.0.1</p>
                                </div>
                            </div>

                            <div className="contact-list">
                                <p className="text-400 fs-5 mb-2">Social</p>
                                <div className="d-md-flex d-none gap-3">
                                    <Link href="http://facebook.com">
                                        <i className="ri-facebook-circle-fill fs-18"></i>
                                    </Link>
                                    <Link href="http://twitter.com">
                                        <i className="ri-twitter-x-fill fs-18"></i>
                                    </Link>
                                    <Link href="http://linkedin.com">
                                        <i className="ri-linkedin-fill fs-18"></i>
                                    </Link>
                                    <Link href="http://github.com">
                                        <i className="ri-github-fill fs-18"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offCanvas__overly"></div>
                    <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
                        <div className="mobile-header-wrapper-inner">
                            <div className="mobile-header-logo">
                                <Link className="d-flex main-logo align-items-center d-inline-flex" href="index.html">
                                    <Image src={"/assets/imgs/footer-1/logo.svg"} alt="zelio" width={40} height={40} />
                                    <span className="fs-4 ms-2 text-dark">rajansharmax</span>
                                </Link>
                                <div className="burger-icon burger-icon-white border rounded-3">
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>
                            <div className="mobile-header-content-area">
                                <div className="perfect-scroll">
                                    <div className="mobile-menu-wrap mobile-header-border">
                                        <nav>
                                            <ul className="mobile-menu font-heading ps-0">
                                                <li className="nav-item has-children">
                                                    <Link className="nav-link active" href="#">Home</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="index.html">Landing page</Link></li>
                                                        <li><Link href="index-1.html">Home 1 - Designer</Link></li>
                                                        <li><Link href="index-2.html">Home 2 - Developer</Link></li>
                                                        <li><Link href="index-3.html">Home 3 - Author</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className="nav-link" href="services.html">Services</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="work.html">Portfolio</Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className="nav-link" href="pricing.html">Pricing</Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className="nav-link" href="blog-list.html">Blog</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="#contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;