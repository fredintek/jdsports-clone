"use client";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const sliderImages = [
  "https://www.jdsports.cy/modules/bannersslider/images/1b31a4e221a33a61ff2a1f508c25f0dbf5805b31_Desktop_Middle_Banner.jpg",
  "https://www.jdsports.cy/modules/bannersslider/images/286449971ed304b458f8ae35d5f5ab869c1dfe6a_Desktop_Middle_Banner_1704x740.jpg",
  "https://www.jdsports.cy/modules/bannersslider/images/9fa16ae8965d4b6e39192a4e1eb3793ebc58676e_dm.jpg",
];

type Props = {};

const ShopNow = (props: Props) => {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params?.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();

      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, []);

  return (
    <div className="relative container flex gap-6 w-full aspect-video md:aspect-[16/7]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        spaceBetween={20}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper !w-full !h-full"
        pagination={{
          clickable: true,
          el: ".shop-now-slider",
          renderBullet(index, className) {
            return `<span class="${className} shop-now-slider__bullet"></span>`;
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {sliderImages.map((obj, index: number) => (
          <SwiperSlide
            key={index}
            className="w-full aspect-video md:aspect-[16/7]"
          >
            <img
              src={obj}
              alt="slider-images"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="z-50 !absolute !bottom-6 !left-1/2 !-translate-x-1/2 shop-now-slider"></div>

      <button
        ref={prevRef}
        className={`${
          isBeginning ? "hidden" : "absolute"
        } group z-30 top-1/2 -translate-y-1/2 breakpoint-500:bottom-[120px] left-5 md:left-10 -translate-x-1/2 bg-white/60 w-9 h-9 md:w-12 md:h-12 rounded-full flex justify-center items-center`}
      >
        <LeftOutlined className="text-white group-hover:text-dark text-sm md:text-lg" />
      </button>
      <button
        ref={nextRef}
        className={`${
          isEnd ? "hidden" : "absolute"
        } group z-30 top-1/2 -translate-y-1/2 breakpoint-500:bottom-[120px] right-5 md:right-10 translate-x-1/2 bg-white/60 w-9 h-9 md:w-12 md:h-12 rounded-full flex justify-center items-center`}
      >
        <RightOutlined className="text-white group-hover:text-dark text-sm md:text-lg" />
      </button>

      <motion.div
        whileTap={{ scale: 0.9 }}
        className="z-30 absolute bottom-5 right-5 cursor-pointer flex justify-center items-center w-[200px] h-[60px] bg-white text-black hover:text-white hover:bg-black"
      >
        <span>Shop Now</span>
      </motion.div>
    </div>
  );
};

export default ShopNow;
