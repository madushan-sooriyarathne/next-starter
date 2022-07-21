import { ReactNode, useEffect, useState } from "react";
import { SwiperSlide, SwiperProps, Swiper } from "swiper/react";
import SwiperInstance, {
  SwiperOptions,
  Pagination,
  FreeMode,
  Navigation,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { SwiperContainer } from "./styles";

interface Props {
  children: ReactNode[];
  swiperSettings?: SwiperProps;
  breakpoints?: { [key: number]: SwiperOptions };
  freeMode?: boolean;
  onSlideChange?: (activeSlide: number) => void;
}

const defaultBreakpoints: { [key: number]: SwiperOptions } = {
  480: {
    slidesPerView: 1,
  },
  800: {
    slidesPerView: 2,
  },
  1366: {
    slidesPerView: 3,
  },
  1800: {
    slidesPerView: 4,
  },
};

const defaultSettings: SwiperProps = {
  slidesPerView: 2,
  spaceBetween: 50,
  preloadImages: true,
  preventClicks: true,
  modules: [Pagination, Navigation],
  navigation: true,
  pagination: { type: "bullets", clickable: true },
  observer: true,
  observeParents: true,
};

const SwiperCarousel: React.FC<Props> = ({
  children,
  breakpoints = defaultBreakpoints,
  swiperSettings,
  onSlideChange = () => {},
  freeMode = false,
}: Props): JSX.Element => {
  if (freeMode) {
    defaultSettings.modules?.push(FreeMode);
  }

  return (
    <SwiperContainer id="carousel">
      <Swiper
        {...defaultSettings}
        {...swiperSettings}
        breakpoints={breakpoints}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {children.map((item, index) => (
          <SwiperSlide key={`swiper-slide-${index}`}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperCarousel;
