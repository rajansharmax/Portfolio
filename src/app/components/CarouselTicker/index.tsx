import Image from "next/image";
import Link from "next/link";
const CarouselTicker = () => {
return (
	<>
	<div className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
		<ul className="carouselTicker__list ">
		<li className="carouselTicker__item">
			<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
			<Image
				src="/assets/imgs/home-page-2/hero-1/icon-1.svg"
				alt="brand"
				width={30}
				height={30}
			/>
			</Link>
		</li>
		<li className="carouselTicker__item">
			<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
			<Image
				src="/assets/imgs/home-page-2/hero-1/icon-2.svg"
				alt="brand"
				width={30}
				height={30}
			/>
			</Link>
		</li>
		<li className="carouselTicker__item">
			<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
			<Image
				src="/assets/imgs/home-page-2/hero-1/icon-3.svg"
				alt="brand"
				width={20}
				height={20}
			/>
			</Link>
		</li>
		<li className="carouselTicker__item">
			<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
			<Image
				src="/assets/imgs/home-page-2/hero-1/icon-4.svg"
				alt="brand"
				width={30}
				height={30}
			/>
			</Link>
		</li>
		<li className="carouselTicker__item">
			<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
			<Image
				src="/assets/imgs/home-page-2/hero-1/icon-5.svg"
				alt="brand"
				width={30}
				height={30}
			/>
			</Link>
		</li>
		</ul>
	</div>
	</>
);
};

export default CarouselTicker;
