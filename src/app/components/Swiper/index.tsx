"use client";
import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {Swiper as SwiperClass} from "swiper";

interface Item {
    id: number;
    img: string;
    href?: string;
    height?: number;
    width?: number;
}

const Swiper = ({items}: {items: Item[]}) => {

    const onSwiperChange = (Swiper: SwiperClass) => {
        Swiper.autoplay.start();
    };
    return (
        <>
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
                        slidesPerView: 5
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
                    disableOnInteraction: true
                }}
                freeMode={true}
                speed={5000}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={() => {
                    
                }}
                onSwiper={(swiper: SwiperClass) => onSwiperChange(swiper)}
            >
			{items.map((item, index) => (
				<SwiperSlide key={index}>
						<Link href={item.href || "#"} key={item.id} className="brand-logo icon_60 icon-shape rounded-3">
							<Image
								src={item.img}
								alt="brand"
								width={item.width || 30}
								height={item.height || 30}
							/>
						</Link>
				</SwiperSlide>
			))}
		</SwiperSlider>
        </>
    );
}

export default Swiper;