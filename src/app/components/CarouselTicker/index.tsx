import Swiper from "@/app/components/Swiper";
import { SliderItems } from "@/assets/data";

const CarouselTicker = () => {
	return (
		<Swiper items={SliderItems} />
	);
};

export default CarouselTicker;
