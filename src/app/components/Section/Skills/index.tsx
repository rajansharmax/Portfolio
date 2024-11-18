"use client";
import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Swiper from "swiper";

interface Item {
    id: number;
    img: string;
    href?: string;
    height?: number;
    width?: number;
}



/*************  ✨ Codeium Command ⭐  *************/
/**
 * Skills component.
 *
 * This component displays a carousel of logos representing the skills I have.
 *
 * The component uses the Swiper library to create a carousel with two rows of logos.
 * The logos are sourced from the SliderItems and SliderItems2 arrays.
 *
 * The component also includes a section of text that lists the skills I have.
 *
 * The component is responsive and will adapt to different screen sizes.
 *
 * The component is also decorated with some SVG shapes to give it a more interesting design.
 *
 * @return {JSX.Element} The JSX element representing the Skills component.
 */
/******  12061bb1-bbca-4b43-8a2f-7af20e9074b3  *******/
const Skills = () => {
    const onSwiperChange = (Swiper: Swiper) => {
        Swiper.autoplay.start();
    }
    const SliderItems: Item[] = [
        {
            id: 1,
            img: "/assets/imgs/home-page-2/hero-1/icon-4.svg",
            href: "#",
        },
        {
            id: 2,
            img: "/assets/imgs/home-page-2/hero-1/icon-1.svg",
            href: "#",
        },
        {
            id: 3,
            img: "/assets/imgs/home-page-2/hero-1/icon-2.svg",
            href: "#",
        },
        {
            id: 4,
            img: "/assets/imgs/home-page-2/hero-1/icon-3.svg",
            href: "#",
            width: 25,
            height: 25,
        },
        {
            id: 5,
            img: "/assets/imgs/home-page-2/hero-1/icon-5.svg",
            href: "#",
        },
        {
            id: 6,
            img: "/assets/imgs/home-page-2/hero-1/icon-6.svg",
            href: "#",
        },
    ];

    const SliderItems2: Item[] = [
        {
            id: 1,
            img: "/assets/imgs/home-page-2/hero-1/icon-7.svg",
            href: "#",
        },
        {
            id: 2,
            img: "/assets/imgs/home-page-2/hero-1/icon-8.svg",
            href: "#",
        },
        {
            id: 3,
            img: "/assets/imgs/home-page-2/hero-1/icon-9.svg",
            href: "#",
        },
        {
            id: 4,
            img: "/assets/imgs/home-page-2/hero-1/icon-5.svg",
            href: "#",
        },
    ];

    return (
        <>
            <section id="skills" className="section-skills-2 pt-5">
                <div className="container">
                    <div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
                        <div className="position-relative z-1 py-60">
                            <div className="position-relative z-1">
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center">
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
                                            Projects{" "}
                                        </span>
                                    </div>
                                    <h3>My Skills</h3>
                                </div>
                                <div className="container mt-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
                                                    <div className="carouselTicker carouselTicker-right position-relative z-1">
                                                        <ul className="carouselTicker__list m-0">
                                                            <SwiperSlider
                                                                spaceBetween={2}
                                                                slidesPerView={5}
                                                                loop={true}
                                                                loopAddBlankSlides={true}
                                                                loopAdditionalSlides={2}
                                                                rewind={true}
                                                                navigation={false}
                                                                breakpoints={{
                                                                    1200: {
                                                                        slidesPerView: 5,
                                                                    },
                                                                    992: {
                                                                        slidesPerView: 5,
                                                                    },
                                                                    768: {
                                                                        slidesPerView: 4,
                                                                    },
                                                                    576: {
                                                                        slidesPerView: 3,
                                                                    },
                                                                    0: {
                                                                        slidesPerView: 3,
                                                                    },
                                                                }}
                                                                autoplay={{
                                                                    delay: 1,
                                                                    disableOnInteraction: true,
                                                                }}
                                                                freeMode={true}
                                                                speed={5000}
                                                                modules={[Autoplay, Pagination, Navigation]}
                                                                onSlideChange={() => { }}
                                                                onSwiper={(swiper: Swiper) => onSwiperChange(swiper)}
                                                            >
                                                                {SliderItems.map((item, index) => (
                                                                    <SwiperSlide key={index}>
                                                                        <li className="carouselTicker__item mt-6">
                                                                            <Link
                                                                                href={item.href || "#"}
                                                                                className="brand-logo icon_80 icon-shape rounded-3"
                                                                            >
                                                                                <Image
                                                                                    src={item.img}
                                                                                    alt="brand"
                                                                                    width={item.width || 50}
                                                                                    height={item.height || 50}
                                                                                />
                                                                            </Link>
                                                                            <span className="tool-tip">NodeJS</span>
                                                                        </li>
                                                                    </SwiperSlide>
                                                                ))}
                                                            </SwiperSlider>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
                                                    <div className="carouselTicker carouselTicker-left position-relative z-1">
                                                        <ul className="carouselTicker__list m-0 ">
                                                            <SwiperSlider
                                                                spaceBetween={2}
                                                                slidesPerView={4}
                                                                loop={true}
                                                                loopAddBlankSlides={true}
                                                                loopAdditionalSlides={2}
                                                                rewind={true}
                                                                navigation={false}
                                                                breakpoints={{
                                                                    1200: {
                                                                        slidesPerView: 4,
                                                                    },
                                                                    992: {
                                                                        slidesPerView: 4,
                                                                    },
                                                                    768: {
                                                                        slidesPerView: 4,
                                                                    },
                                                                    576: {
                                                                        slidesPerView: 3,
                                                                    },
                                                                    0: {
                                                                        slidesPerView: 3,
                                                                    },
                                                                }}
                                                                autoplay={{
                                                                    delay: 1,
                                                                    disableOnInteraction: true,
                                                                }}
                                                                freeMode={true}
                                                                speed={5000}
                                                                modules={[Autoplay, Pagination, Navigation]}
                                                                onSlideChange={() => { }}
                                                                onSwiper={(swiper: Swiper) => onSwiperChange(swiper)}
                                                            >
                                                                {SliderItems2.map((item, index) => (
                                                                    <SwiperSlide key={index}>
                                                                        <li className="carouselTicker__item mt-6">
                                                                            <Link
                                                                                href={item.href || "#"}
                                                                                className="brand-logo icon_80 icon-shape rounded-3"
                                                                            >
                                                                                <Image
                                                                                    src={item.img}
                                                                                    alt="brand"
                                                                                    width={item.width || 50}
                                                                                    height={item.height || 50}
                                                                                />
                                                                            </Link>
                                                                            <span className="tool-tip">VueJS</span>
                                                                        </li>
                                                                    </SwiperSlide>
                                                                ))}
                                                            </SwiperSlider>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 border-start-md mt-lg-0 mt-5">
                                            <div className="row">
                                                <div className="col-md-10 mx-auto">
                                                    <div className="h-100 position-relative">
                                                        <ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
                                                            <li className="mb-3">
                                                                <div className="d-flex flex-column flex-md-row gap-2">
                                                                    <p className="text-dark text-nowrap mb-0">
                                                                        Front-End:
                                                                    </p>
                                                                    <span className="text-300">
                                                                        HTML, CSS, JavaScript, React, Angular
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li className="mb-3">
                                                                <div className="d-flex flex-column flex-md-row gap-2">
                                                                    <p className="text-dark text-nowrap mb-0">
                                                                        Back-End:
                                                                    </p>
                                                                    <span className="text-300">
                                                                        Node.js, Express, Python, Django
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li className="mb-3">
                                                                <div className="d-flex flex-column flex-md-row gap-2">
                                                                    <p className="text-dark text-nowrap mb-0">
                                                                        Databases:
                                                                    </p>
                                                                    <span className="text-300">
                                                                        MySQL, PostgreSQL, MongoDB
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li className="mb-3">
                                                                <div className="d-flex flex-column flex-md-row gap-2">
                                                                    <p className="text-dark text-nowrap mb-0">
                                                                        Tools & Platforms:
                                                                    </p>
                                                                    <span className="text-300">
                                                                        Git, Docker, AWS, Heroku
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li className="mb-3">
                                                                <div className="d-flex flex-column flex-md-row gap-2">
                                                                    <p className="text-dark text-nowrap mb-0">
                                                                        Others:
                                                                    </p>
                                                                    <span className="text-300">
                                                                        RESTful APIs, GraphQL, Agile Methodologies
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
            </section>
        </>
    );
};

export default Skills;
