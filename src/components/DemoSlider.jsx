import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { useEffect, useRef } from "react";

const genSlides = (imageName) => (
  <SwiperSlide key={imageName}>
    <img
      className="ml-16 items-center rounded-xl"
      width={250}
      height={100}
      src={`../assests/${imageName}.png`}
      alt=""
    />
  </SwiperSlide>
);

const DemoSlider = () => {
  return (
    <div className="mx-auto flex w-96">
      <Swiper
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}>
        {Array(13)
          .fill(1)
          .map((_, index) => genSlides((index + 1).toString()))}
      </Swiper>
    </div>
  );
};

export default DemoSlider;
