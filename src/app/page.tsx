import Link from "next/link";
import Image from "next/image";
import CarouselTicker from "./components/CarouselTicker";
import Cooperation from "@/app/components/Section/Cooperation";
import Skills from "@/app/components/Section/Skills"

export default function Home() {
  return (
    <>
      <main>
        <section id="about" className="section-hero-2 position-relative pt-130 pb-3">
          <div className="container hero-2">
            <div className="border border-1 rounded-3">
              <div className="box-linear-animation position-relative z-1">
                <div className="row align-items-end py-60">
                  <div className="col-lg-5 ps-lg-5 text-lg-start text-center">
                    <div className="position-relative mb-lg-0 mb-5">
                      <Image src={"/assets/imgs/home-page-2/hero-1/people.png"} alt="zelio" width={500} height={500} />
                      <div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
                        <Image src={"/assets/imgs/home-page-2/hero-1/icon.svg"} alt="zelio" width={100} height={100} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-lg-auto col-md-12">
                    <div className="p-lg-0 p-md-8 p-3">
                      <div className="text-secondary-2 d-flex align-items-center">
                        &lt;span&gt;
                        <div className="text-dark">
                          <div className="typewriter"><h1 className="fs-6 fw-medium">Hey, I’m rajansharmax</h1></div>
                        </div>
                        &lt;/span&gt;
                      </div>
                      <h1 className="fs-50 my-3">
                        Senior <span className="text-linear-4">{`{Full Stack}`}</span> Software developer
                        <span className="flicker">_</span>
                      </h1>
                      <p className="mb-6 text-secondary-2">&lt;p&gt;<span className="text-dark">With expertise in cutting-edge technologies such as</span> <span className="text-secondary-2">NodeJS</span>, <span className="text-secondary-2">React</span>, <span className="text-secondary-2">Angular</span>, and <span className="text-secondary-2">Laravel</span><span className="text-dark">... I deliver web solutions that are both innovative and robust.</span>&lt;/p&gt;</p>
                      <div className="row">
                        <div className="col-7">
                          <CarouselTicker />
                        </div>
                        <div className="col-5 d-flex align-items-end">
                          <span className="fs-6 text-300 mb-2">...and more</span>
                        </div>
                      </div>
                      <Link href="assets/resume.pdf" className="btn me-2 text-300 ps-0 mt-4" target="_blank">
                        <i className="ri-download-line text-primary-2"></i>
                        [ Download my CV ]
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background position-absolute top-0 start-0 w-100 h-100">
            <img className="bg-w" src={"/assets/imgs/home-page-2/hero-1/bg.png"} alt="zelio" />
            <img className="bg-d" src={"/assets/imgs/home-page-2/hero-1/bg-dark.png"} alt="zelio" />
          </div>
        </section>


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
                          <span className="odometer text-dark fw-medium" data-count="12"></span>
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
                          <span className="odometer text-dark fw-medium" data-count="250"></span>
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
                          <span className="odometer text-dark fw-medium" data-count="680"></span>
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
                          <span className="odometer text-dark fw-medium" data-count="18"></span>
                          <span className="fs-50 text-300 mb-0">+</span>
                        </h2>
                        <p className="fs-6 mb-0 text-dark">Awards Winner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="background position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="/assets/imgs/home-page-2/static/bg.png"></div>
            </div>
          </div>
        </div>


        <section className="section-coporation">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="rounded-3 border border-1 position-relative overflow-hidden">
                  <div className="box-linear-animation">
                    <div className="p-lg-8 p-md-6 p-3">
                      <div className="d-flex align-items-center">
                        <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                          <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                        </svg>
                        <span className="text-linear-4 d-flex align-items-center"> Cooperation </span>
                      </div>
                      <h3 className="fw-medium">
                        More than +168 <span className="text-300">companies <br /></span> trusted <span className="text-300">worldwide_</span>
                      </h3>
                      <div className="my-5 border border-1 rounded-2 p-3">
                        <Cooperation />
                      </div>
                      <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                        <div className="">
                          <div className="circle-1 position-relative z-0">
                            <div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
                              <div className="position-absolute top-50 start-50 translate-middle z-2">
                                <img className="w-100 h-100 rounded-circle" src="/assets/imgs/coporation/avatar.png" alt="zelio" />
                                <svg className="text-primary-2 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 5 6" fill="none">
                                  <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <Link href="#">
                            <i className="ri-skype-fill"></i>
                            <span className="text-300"> <span className="text-secondary-2">rajansharmax</span></span>
                          </Link>
                          <Link href="#">
                            <i className="ri-phone-fill"></i>
                            <span className="text-300"> <span className="text-secondary-2">+1-234-567-8901</span></span>
                          </Link>
                          <Link href="#">
                            <i className="ri-mail-fill"></i>
                            <span className="text-300"> <span className="text-secondary-2">contact@rajansharmax</span></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute d-none d-md-block decorate">
                      <div className="rotateme">
                        <div className="circle-1-1"></div>
                        <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                          <svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                          </svg>
                        </div>
                        <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                          <svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
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
                    <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                      <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                    </svg>
                    <span className="text-linear-4 d-flex align-items-center"> Git Journaling </span>
                  </div>
                  <div className="h-100 position-relative">
                    <ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
                      <li className="position-relative z-1">
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-300 text-nowrap">15 Jul:</p>
                          <span className="text-dark">Muzzilla-streaming-API-services-for-Python</span>
                        </div>
                      </li>
                      <li className="position-relative z-1">
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-300 text-nowrap">30 Jun:</p>
                          <span className="text-dark">ChatHub-Chat-application-VueJs-Mongodb</span>
                        </div>
                      </li>
                      <li className="position-relative z-1">
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-300 text-nowrap">26 May:</p>
                          <span className="text-dark">DineEasy-coffee-tea-reservation-system</span>
                        </div>
                      </li>
                      <li className="position-relative z-1">
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-300 text-nowrap">17 Apr:</p>
                          <span className="text-dark">FinanceBuddy-Personal-finance-tracker</span>
                        </div>
                      </li>
                      <li className="position-relative z-1">
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-300 text-nowrap">05 Mar:</p>
                          <span className="text-dark">TuneStream-Music-streaming-service-API</span>
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


        <section id="services" className="section-service-2 pt-5">
          <div className="container">
            <div className="rounded-3 border border-1 position-relative overflow-hidden">
              <div className="box-linear-animation position-relative z-1 p-lg-5 p-1 p-md-4">
                <div className="position-relative z-1">
                  <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                        <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                      </svg>
                      <span className="text-linear-4 d-flex align-items-center"> Cooperation </span>
                    </div>
                    <h3>
                      Designing solutions
                      <span className="text-300">
                        customized<br />
                        to meet your requirements
                      </span>
                    </h3>
                  </div>
                  <div className="container mt-5">
                    <div className="row g-4">
                      <div className="col-lg-4 col-md-6">
                        <div className="card-servies-2 rounded-2 h-100 hover-up">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" fill="#1F1F24" />
                          </svg>
                          <h6 className="my-3 fw-medium">Web & App Development</h6>
                          <p className="fs-7 text-300 fw-regular">Crafting visually appealing and user-friendly interfaces using <span className="text-secondary-2">HTML</span>, <span className="text-secondary-2">CSS</span>, <span className="text-secondary-2">JavaScript</span>, and modern frameworks like React and Angular.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="card-servies-2 rounded-2 h-100 hover-up">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 2.9918C3 2.44405 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM19 11V4H5V11H19ZM19 13H5V20H19V13ZM9 6H15V8H9V6ZM9 15H15V17H9V15Z" fill="#1F1F24" />
                          </svg>
                          <h6 className="my-3 fw-medium">Database Management</h6>
                          <p className="fs-7 text-300 fw-regular">Designing and managing databases with SQL and NoSQL technologies such as <span className="text-secondary-2">MySQL</span>, <span className="text-secondary-2">PostgreSQL</span>, and <span className="text-secondary-2">MongoDB</span>.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="card-servies-2 rounded-2 h-100 hover-up">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z" fill="#1F1F24" />
                          </svg>
                          <h6 className="my-3 fw-medium">API Development</h6>
                          <p className="fs-7 text-300 fw-regular">Creating and integrating <span className="text-secondary-2">RESTful APIs</span> to enable smooth communication between front-end and back-end systems.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="card-servies-2 rounded-2 h-100 hover-up">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 13.3336L2.77735 19.482C2.54759 19.6352 2.23715 19.5731 2.08397 19.3434C2.02922 19.2612 2 19.1647 2 19.066V4.93457C2 4.65842 2.22386 4.43457 2.5 4.43457C2.59871 4.43457 2.69522 4.46379 2.77735 4.51854L12 10.6669V4.93457C12 4.65842 12.2239 4.43457 12.5 4.43457C12.5987 4.43457 12.6952 4.46379 12.7774 4.51854L23.376 11.5842C23.6057 11.7374 23.6678 12.0479 23.5146 12.2776C23.478 12.3325 23.4309 12.3797 23.376 12.4163L12.7774 19.482C12.5476 19.6352 12.2372 19.5731 12.084 19.3434C12.0292 19.2612 12 19.1647 12 19.066V13.3336ZM10.3944 12.0003L4 7.73734V16.2632L10.3944 12.0003ZM14 7.73734V16.2632L20.3944 12.0003L14 7.73734Z" fill="#1F1F24" />
                          </svg>
                          <h6 className="my-3 fw-medium">Performance Optimization</h6>
                          <p className="fs-7 text-300 fw-regular">Improving the speed and performance of web applications to provide a better user experience. Work with <span className="text-secondary-2">Nodejs</span>, <span className="text-secondary-2">Express</span></p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="card-servies-2 rounded-2 h-100 hover-up">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45013 21.6603 6.00241C21.6603 6.09973 21.6461 6.19654 21.6182 6.28976L19.2182 14.2898C19.0913 14.7128 18.7019 15.0025 18.2603 15.0025H6.00436V17.0025H17.0044V19.0025H5.00436C4.45207 19.0025 4.00436 18.5547 4.00436 18.0025V6.41662ZM6.00436 7.00241V13.0025H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0025C4.67593 23.0025 4.00436 22.3309 4.00436 21.5025C4.00436 20.674 4.67593 20.0025 5.50436 20.0025C6.33279 20.0025 7.00436 20.674 7.00436 21.5025C7.00436 22.3309 6.33279 23.0025 5.50436 23.0025ZM17.5044 23.0025C16.6759 23.0025 16.0044 22.3309 16.0044 21.5025C16.0044 20.674 16.6759 20.0025 17.5044 20.0025C18.3328 20.0025 19.0044 20.674 19.0044 21.5025C19.0044 22.3309 18.3328 23.0025 17.5044 23.0025Z"
                              fill="#1F1F24"
                            />
                          </svg>
                          <h6 className="my-3 fw-medium">E-commerce Solutions</h6>
                          <p className="fs-7 text-300 fw-regular">Developing scalable and secure payment solutions for <span className="text-secondary-2">e-commerce platforms</span> tailored to your business needs.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="card-servies-2 rounded-2 h-100 hover-up">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M16.9337 8.96494C16.426 5.03562 13.0675 2 9 2C4.58172 2 1 5.58172 1 10C1 11.8924 1.65707 13.6313 2.7555 15.0011C3.56351 16.0087 4.00033 17.1252 4.00025 18.3061L4 22H13L13.001 19H15C16.1046 19 17 18.1046 17 17V14.071L18.9593 13.2317C19.3025 13.0847 19.3324 12.7367 19.1842 12.5037L16.9337 8.96494ZM3 10C3 6.68629 5.68629 4 9 4C12.0243 4 14.5665 6.25141 14.9501 9.22118L15.0072 9.66262L16.5497 12.0881L15 12.7519V17H11.0017L11.0007 20H6.00013L6.00025 18.3063C6.00036 16.6672 5.40965 15.114 4.31578 13.7499C3.46818 12.6929 3 11.3849 3 10ZM21.1535 18.1024L19.4893 16.9929C20.4436 15.5642 21 13.8471 21 12.0001C21 10.153 20.4436 8.4359 19.4893 7.00722L21.1535 5.89771C22.32 7.64386 23 9.74254 23 12.0001C23 14.2576 22.32 16.3562 21.1535 18.1024Z"
                              fill="#1F1F24"
                            />
                          </svg>
                          <h6 className="my-3 fw-medium">Integrating AI</h6>
                          <p className="fs-7 text-300 fw-regular">Boost your applications with AI for improved efficiency, automation, and enhanced user experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center pt-60">
                      <p className="text-300">
                        Excited to take on <span className="text-dark">new projects</span> and collaborate. <br />
                        Let&apos;s chat about your ideas. <Link href="#" className="text-primary-2">Reach out!</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <img className="position-absolute top-0 start-0 z-0" src="/assets/imgs/home-page-2/services/bg.png" alt="zelio" />
              </div>
            </div>
          </div>
        </section>


        <section id="portfolio" className="section-experience pt-5">
          <div className="container">
            <div className="rounded-3 border border-1 position-relative overflow-hidden">
              <div className="box-linear-animation position-relative z-1">
                <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                  <div className="d-flex align-items-center">
                    <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                      <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                    </svg>
                    <span className="text-linear-4 d-flex align-items-center"> Expericence </span>
                  </div>
                  <h3>
                    +12
                    <span className="text-300">years of </span>
                    passion
                    <span className="text-300">
                      for <br />
                      programming techniques
                    </span>
                  </h3>
                  <div className="row mt-5">
                    <div className="col-lg-4">
                      <div className="d-flex flex-column gap-2">
                        <Link href="#" className="technology border border-1 rounded-3 p-3">
                          <div className="d-flex align-items-center gap-2">
                            <img src="/assets/imgs/home-page-2/experience/google.svg" alt="zelio" />
                            <div className="d-flex flex-column ms-2">
                              <h5 className="mb-1">Google</h5>
                              <span className="text-300">2018 - Present</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="#" className="technology border border-1 rounded-3 p-3">
                          <div className="d-flex align-items-center gap-2">
                            <img src="/assets/imgs/home-page-2/experience/twitter.svg" alt="zelio" />
                            <div className="d-flex flex-column ms-2">
                              <h5 className="mb-1">Twitter (X)</h5>
                              <span className="text-300">2012 - 2015</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="#" className="technology border border-1 rounded-3 p-3">
                          <div className="d-flex align-items-center gap-2">
                            <img src="/assets/imgs/home-page-2/experience/amazon.svg" alt="zelio" />
                            <div className="d-flex flex-column ms-2">
                              <h5 className="mb-1">Amazon</h5>
                              <span className="text-300">2018 - Present</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="#" className="technology border border-1 rounded-3 p-3">
                          <div className="d-flex align-items-center gap-2">
                            <img src="/assets/imgs/home-page-2/experience/payPal.svg" alt="zelio" />
                            <div className="d-flex flex-column ms-2">
                              <h5 className="mb-1">PayPal</h5>
                              <span className="text-300">2010 - 2012</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                      <h6 className="text-linear-4">Senior Software Engineer</h6>
                      <ul className="mt-4">
                        <li className="text-dark mb-3">Led development of scalable web applications, <span className="text-secondary-2">improving performance</span> and user experience for millions of users.</li>
                        <li className="text-dark mb-3">Implemented machine learning algorithms to enhance search functionality.</li>
                        <li className="text-dark mb-3">Collaborated with cross-functional teams to integrate new features seamlessly.</li>
                      </ul>
                      <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                        <Link href="#" className="text-300 border border-1 px-3 py-1">Python</Link>
                        <Link href="#" className="text-300 border border-1 px-3 py-1">TensorFlow</Link>
                        <Link href="#" className="text-300 border border-1 px-3 py-1">Angular</Link>
                        <Link href="#" className="text-300 border border-1 px-3 py-1">Kubernetes</Link>
                        <Link href="#" className="text-300 border border-1 px-3 py-1">GCP</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="position-absolute top-0 start-0 z-0" src="/assets/imgs/home-page-2/services/bg.png" alt="zelio" />
              </div>
            </div>
          </div>
        </section>


        <section id="resume" className="section-education">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-3">
                <div className="rounded-3 border border-1 position-relative h-100 overflow-hidden">
                  <div className="box-linear-animation p-md-6 p-3 ">
                    <div className="d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                        <path className="fill-primary-2" d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667ZM21.3333 24.667V20.667H4.66667C3.56209 20.667 2.66667 21.5625 2.66667 22.667C2.66667 23.7715 3.56209 24.667 4.66667 24.667H21.3333ZM9.33333 3.33366H4C3.26363 3.33366 2.66667 3.93062 2.66667 4.66699V18.4494C3.27284 18.1614 3.95093 18.0003 4.66667 18.0003H21.3333V3.33366H18.6667V14.0003L14 11.3337L9.33333 14.0003V3.33366Z" fill="#62A92B" />
                      </svg>
                      <h2 className="mb-0 ms-2">Education</h2>
                    </div>
                    <div className="d-flex flex-column h-100 position-relative mt-5">
                      <ul className="ps-3">
                        <li className="position-relative z-1 mb-3">
                          <div className="d-flex gap-2">
                            <p className="text-300 text-nowrap fw-regular mb-0">2020-2024:</p>
                            <div>
                              <span className="text-primary-2">MIT</span>
                              <p className="text-dark">Bachelor’s Degree in Computer Science</p>
                            </div>
                          </div>
                        </li>
                        <li className="position-relative z-1 mb-3">
                          <div className="d-flex gap-2">
                            <p className="text-300 text-nowrap fw-regular mb-0">2018-2019:</p>
                            <div>
                              <span className="text-primary-2">Harvard University</span>
                              <p className="text-dark">Certification in React and Redux, Node.js Developer Course</p>
                            </div>
                          </div>
                        </li>
                        <li className="position-relative z-1 mb-3">
                          <div className="d-flex gap-2">
                            <p className="text-300 text-nowrap fw-regular mb-0">2015-2016:</p>
                            <div>
                              <span className="text-primary-2">Stanford University</span>
                              <p className="text-dark">Certification in Full Stack Web Development</p>
                            </div>
                          </div>
                        </li>
                        <li className="position-relative z-1 mb-3">
                          <div className="d-flex gap-2">
                            <p className="text-300 text-nowrap fw-regular mb-0">2013-2015:</p>
                            <div>
                              <span className="text-primary-2">University of Washington</span>
                              <p className="text-dark">Certification in React and Redux, Node.js Developer Course</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="line-left position-absolute top-0 border-start z-0"></div>
                    </div>
                    <div className="bg-overlay position-absolute bottom-0 start-0 z-1"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-3">
                <div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
                  <div className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path className="fill-primary-2" d="M20 4H28V10.6667H25.3333V6.66667H20V4ZM12 4V6.66667H6.66667V10.6667H4V4H12ZM20 28V25.3333H25.3333V21.3333H28V28H20ZM12 28H4V21.3333H6.66667V25.3333H12V28ZM4 14.6667H28V17.3333H4V14.6667Z" fill="#A8FF53" />
                    </svg>
                    <h2 className="mb-0 ms-2">Researched</h2>
                  </div>
                  <div className="d-flex flex-column h-100 position-relative mt-5">
                    <ul className="ps-3">
                      <li className="position-relative z-1 mb-3">
                        <div className="d-flex gap-2">
                          <p className="text-300 text-nowrap fw-regular mb-0">2023-2024:</p>
                          <div>
                            <span className="text-primary-2">Advanced Data Analytics with Big Data Tools</span>
                            <p className="text-dark">Utilized big data tools for advanced analytics and insights.</p>
                          </div>
                        </div>
                      </li>
                      <li className="position-relative z-1 mb-3">
                        <div className="d-flex gap-2">
                          <p className="text-300 text-nowrap fw-regular mb-0">2021-2013:</p>
                          <div>
                            <span className="text-primary-2">Cloud-Native Application Architectures</span>
                            <p className="text-dark">Studied best practices for designing cloud-native applications.</p>
                          </div>
                        </div>
                      </li>
                      <li className="position-relative z-1 mb-3">
                        <div className="d-flex gap-2">
                          <p className="text-300 text-nowrap fw-regular mb-0">2019-2020:</p>
                          <div>
                            <span className="text-primary-2">AI-Driven User Experience Personalization</span>
                            <p className="text-dark">Leveraged AI to personalize user experiences based on behavior.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="line-left position-absolute top-0 border-start z-0"></div>
                  </div>
                  <div className="bg-overlay position-absolute bottom-0 start-0 z-1"></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-projects-2 pt-5">
          <div className="container">
            <div className="rounded-3 border border-1 position-relative overflow-hidden">
              <div className="box-linear-animation position-relative z-1">
                <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                  <div className="d-flex align-items-center">
                    <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                      <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                    </svg>
                    <span className="text-linear-4 d-flex align-items-center"> Projects </span>
                  </div>
                  <h3>My Recent Works</h3>
                  <div className="position-relative">
                    <div className="swiper slider-two pb-3 position-relative">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
                            <div className="row">
                              <div className="col-lg-5">
                                <img className="w-100" src="/assets/imgs/home-page-2/projects/img-1.png" alt="zelio" />
                              </div>
                              <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                                <h4 className="text-linear-4">
                                  Integrate AI into the <br />
                                  ecommerce system
                                </h4>
                                <p>Developed an online learning platform with course management, quizzes, and progress tracking.</p>
                                <ul className="mt-4 list-unstyled">
                                  <li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
                                  <li className="text-dark mb-3 border-bottom pb-3">
                                    <div className="d-flex justify-content-between">
                                      <p className="text-dark mb-0 text-end">Client</p>
                                      <p className="text-300 mb-0 text-end">Conceptual JSC</p>
                                    </div>
                                  </li>
                                  <li className="text-dark mb-3 border-bottom pb-3">
                                    <div className="d-flex justify-content-between">
                                      <p className="text-dark mb-0 text-end">Completion Time</p>
                                      <p className="text-300 mb-0 text-end">6 months</p>
                                    </div>
                                  </li>
                                  <li className="text-dark mb-3 border-bottom pb-3">
                                    <div className="d-flex justify-content-between">
                                      <p className="text-dark mb-0 text-end">Technologies</p>
                                      <p className="text-300 mb-0 text-end">Node.js, React, MongoDB, Stripe</p>
                                    </div>
                                  </li>
                                </ul>
                                <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                                  <Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                      <path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
                                    </svg>
                                    Live Demo
                                  </Link>
                                  <Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                      <path
                                        d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z"
                                        fill="#8F8F92"
                                      />
                                    </svg>
                                    View on Github
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
                            <div className="row">
                              <div className="col-lg-5">
                                <img className="w-100" src="/assets/imgs/home-page-2/projects/img-1.png" alt="zelio" />
                              </div>
                              <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                                <h4 className="text-linear-4">
                                  Integrate AI into the <br />
                                  ecommerce system
                                </h4>
                                <p>Developed an online learning platform with course management, quizzes, and progress tracking.</p>
                                <ul className="mt-4 list-unstyled">
                                  <li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
                                  <li className="text-dark mb-3 border-bottom pb-3">
                                    <div className="d-flex justify-content-between">
                                      <p className="text-dark mb-0 text-end">Client</p>
                                      <p className="text-300 mb-0 text-end">Conceptual JSC</p>
                                    </div>
                                  </li>
                                  <li className="text-dark mb-3 border-bottom pb-3">
                                    <div className="d-flex justify-content-between">
                                      <p className="text-dark mb-0 text-end">Completion Time</p>
                                      <p className="text-300 mb-0 text-end">6 months</p>
                                    </div>
                                  </li>
                                  <li className="text-dark mb-3 border-bottom pb-3">
                                    <div className="d-flex justify-content-between">
                                      <p className="text-dark mb-0 text-end">Technologies</p>
                                      <p className="text-300 mb-0 text-end">Node.js, React, MongoDB, Stripe</p>
                                    </div>
                                  </li>
                                </ul>
                                <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                                  <Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                      <path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
                                    </svg>
                                    Live Demo
                                  </Link>
                                  <Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                      <path
                                        d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z"
                                        fill="#8F8F92"
                                      />
                                    </svg>
                                    View on Github
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
                      <div className="swiper-button-prev end-0 shadow position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
                        </svg>
                      </div>
                      <div className="swiper-button-next end-0 shadow position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="position-absolute top-0 start-0 z-0" src="/assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
              </div>
            </div>
          </div>
        </section>

        <Skills />

        <section id="blog" className="section-blog-2 position-relative pt-60 pb-60">
          <div className="container">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center">
                <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                  <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                </svg>
                <span className="text-linear-4 d-flex align-items-center"> Latest Posts </span>
              </div>
              <h3>From Blog</h3>
            </div>
            <div className="row mt-8">

              <div className="col-lg-4">
                <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
                  <div className="blog-card__image position-relative">
                    <div className="zoom-img rounded-2 overflow-hidden">
                      <img className="w-100" src="/assets/imgs/home-page-2/blog/img-1.png" alt="zelio" />
                      <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2" href="#">CEO</Link>
                      <Link href="#" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-card__content position-relative text-center mt-4">
                    <span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
                    <h6 className="blog-card__title mt-2">Optimize Your Web Application for Speed</h6>
                    <p className="blog-card__description fs-7">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
                    <Link href="#" className="link-overlay position-absolute top-0 start-0 w-100 h-100"></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
                  <div className="blog-card__image position-relative">
                    <div className="zoom-img rounded-2 overflow-hidden">
                      <img className="w-100" src="/assets/imgs/home-page-2/blog/img-2.png" alt="zelio" />
                      <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2" href="#">Development</Link>
                      <Link href="#" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-card__content position-relative text-center mt-4">
                    <span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
                    <h6 className="blog-card__title mt-2">Best Practices for Secure Web Development</h6>
                    <p className="blog-card__description fs-7">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
                    <Link href="#" className="link-overlay position-absolute top-0 start-0 w-100 h-100"></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
                  <div className="blog-card__image position-relative">
                    <div className="zoom-img rounded-2 overflow-hidden">
                      <img className="w-100" src="/assets/imgs/home-page-2/blog/img-3.png" alt="zelio" />
                      <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2" href="#">Trending</Link>
                      <Link href="#" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-card__content position-relative text-center mt-4">
                    <span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
                    <h6 className="blog-card__title mt-2">10 JavaScript Frameworks for Web Development in 2024</h6>
                    <p className="blog-card__description fs-7">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
                    <Link href="#" className="link-overlay position-absolute top-0 start-0 w-100 h-100"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
          <div className="container position-relative z-1">
            <div className="row align-items-center">
              <div className="col-lg-7 pb-5 pb-lg-0">
                <div className="position-relative">
                  <div className="position-relative z-2">
                    <h3 className="text-primary-2 mb-3">Let’s connect</h3>
                    <form action="#">
                      <div className="row g-3">
                        <div className="col-md-6 ">
                          <input type="text" className="form-control bg-3 border border-1 rounded-3" id="name" name="name" placeholder="Your name" aria-label="username" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control bg-3 border border-1 rounded-3" id="phone" name="phone" placeholder="Phone" aria-label="phone" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control bg-3 border border-1 rounded-3" id="email" name="email" placeholder="Emaill" aria-label="email" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control bg-3 border border-1 rounded-3" id="subject" name="subject" placeholder="Subject" aria-label="subject" />
                        </div>
                        <div className="col-12">
                          <textarea className="form-control bg-3 border border-1 rounded-3" id="message" name="message" placeholder="Message" aria-label="With textarea"></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary-2 rounded-2">
                            Send Message
                            <i className="ri-arrow-right-up-line"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3"></div>
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column ps-lg-8">
                <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                  <div className="d-inline-block">
                    <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                      <i className="ri-phone-fill text-primary-2 fs-26"></i>
                    </div>
                  </div>
                  <div className="ps-3 h-100">
                    <span className="text-400 fs-6">Phone Number</span>
                    <h6 className="mb-0">+1-234-567-8901</h6>
                  </div>
                  <Link href="tel:+1-234-567-8901" className="position-absolute top-0 start-0 w-100 h-100"></Link>
                </div>
                <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                  <div className="d-inline-block">
                    <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                      <i className="ri-mail-fill text-primary-2 fs-26"></i>
                    </div>
                  </div>
                  <div className="ps-3 h-100">
                    <span className="text-400 fs-6">Email</span>
                    <h6 className="mb-0">rajansharmaa46@gmail.com</h6>
                  </div>
                  <Link href="mailto:someone@example.com" className="position-absolute top-0 start-0 w-100 h-100"></Link>
                </div>
                <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                  <div className="d-inline-block">
                    <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                      <i className="ri-skype-fill text-primary-2 fs-26"></i>
                    </div>
                  </div>
                  <div className="ps-3 h-100">
                    <span className="text-400 fs-6">Skype</span>
                    <h6 className="mb-0">rajansharmax</h6>
                  </div>
                  <Link href="skype:SKYPENAME?add" className="position-absolute top-0 start-0 w-100 h-100"></Link>
                </div>
                <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
                  <div className="d-inline-block">
                    <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                      <i className="ri-map-2-fill text-primary-2 fs-26"></i>
                    </div>
                  </div>
                  <div className="ps-3 h-100">
                    <span className="text-400 fs-6">Address</span>
                    <h6 className="mb-0">127.0.0.1 - Chandigarh</h6>
                  </div>
                  <Link href="https://maps.google.com/maps?q=1st+avenue,New+York" className="position-absolute top-0 start-0 w-100 h-100"></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>


      <footer>
        <div className="section-footer-2 position-relative">
          <div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
            <div className="text-center">
              <Link className="d-flex main-logo align-items-center justify-content-center mb-3" href="">
                <img src="/assets/imgs/home-page-2/template/favicon.svg" alt="zelio" />
                <span className="fs-4 ms-2">rajansharmax</span>
              </Link>
              <div className="d-flex justify-content-center gap-3">
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
              <div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
                <Link href="#about" className="fs-6"> About me </Link>
                <Link href="#resume" className="fs-6"> Resume </Link>
                <Link href="#services" className="fs-6"> Services </Link>
                <Link href="#portfolio" className="fs-6"> Portfolio </Link>
                <Link href="#blog" className="fs-6"> Blog </Link>
                <Link href="#contact" className="fs-6"> Contact </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>


      <div className="btn-scroll-top style-btn-2">
        <svg className="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
          <path d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z" />
        </svg>
      </div>
    </>
  );
}
