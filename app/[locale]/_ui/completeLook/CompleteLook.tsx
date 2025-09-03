"use client";
import React, { useEffect, useRef, useState } from "react";
import SneakerCard from "./SneakerCard";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import ShopNow from "@/components/ShopNow";
import { motion } from "framer-motion";

type Props = {};

const sneakersArr = [
  {
    price: "190.00",
    text: "New Balance 9060 Unisex Shoes",
    "img-1":
      "https://www.jdsports.cy/2689752-product_medium/new-balance-9060.jpg",
    "img-2":
      "https://www.jdsports.cy/2689753-product_medium/new-balance-9060.jpg",
  },
  {
    price: "190.00",
    text: "New Balance 9060 Unisex Shoes",
    "img-1": "https://www.jdsports.cy/2767526-product_medium/on-cloudtilt.jpg",
    "img-2": "https://www.jdsports.cy/2767527-product_medium/on-cloudtilt.jpg",
  },
  {
    price: "190.00",
    text: "New Balance 9060 Unisex Shoes",
    "img-1":
      "https://www.jdsports.cy/2698122-product_medium/nike-air-force-1-07.jpg",
    "img-2":
      "https://www.jdsports.cy/2698123-product_medium/nike-air-force-1-07.jpg",
  },
  {
    price: "190.00",
    text: "New Balance 9060 Unisex Shoes",
    "img-1":
      "https://www.jdsports.cy/2667739-product_medium/nike-air-vapormax-plus.jpg",
    "img-2":
      "https://www.jdsports.cy/2667740-product_medium/nike-air-vapormax-plus.jpg",
  },
  {
    price: "190.00",
    text: "New Balance 9060 Unisex Shoes",
    "img-1":
      "https://www.jdsports.cy/2753735-product_medium/asics-sportstyle-gel-1130.jpg",
    "img-2":
      "https://www.jdsports.cy/2753736-product_medium/asics-sportstyle-gel-1130.jpg",
  },
  {
    price: "190.00",
    text: "New Balance 9060 Unisex Shoes",
    "img-1":
      "https://www.jdsports.cy/2765141-product_medium/adidas-originals-campus-00s.jpg",
    "img-2":
      "https://www.jdsports.cy/2765142-product_medium/adidas-originals-campus-00s.jpg",
  },
  {
    price: "190.00",
    text: "New Balance 9060 Unisex Shoes",
    "img-1":
      "https://www.jdsports.cy/2767102-product_medium/jordan-air-1-low-gs.jpg",
    "img-2":
      "https://www.jdsports.cy/2767103-product_medium/jordan-air-1-low-gs.jpg",
  },
  {
    price: "190.00",
    text: "New Balance 9060 Unisex Shoes",
    "img-1":
      "https://www.jdsports.cy/2768049-product_medium/adidas-originals-superstar-ii.jpg",
    "img-2":
      "https://www.jdsports.cy/2768050-product_medium/adidas-originals-superstar-ii.jpg",
  },
];

const tabs = [
  {
    key: "sneakers",
    label: "Shop Sneakers",
  },
  {
    key: "tops",
    label: "Shop Tops",
  },
  {
    key: "bottoms",
    label: "Shop Bottoms",
  },
];

const CompleteLook = (props: Props) => {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState("sneakers");
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
    <section className="py-10 flex flex-col gap-6 md:gap-10">
      <div className="container flex flex-col gap-4 lg:flex-row lg:gap-8 lg:items-center">
        <p className="font-bold text-[#000] text-lg lg:text-[32px]">
          Complete The Look
        </p>
        <div className="flex items-center gap-4">
          {tabs?.map((tab, idx: number) => (
            <motion.button
              whileTap={{ scale: 0.9 }}
              key={idx}
              onClick={() => setActiveTab(tab.key)}
              className={`w-[165px] h-[52px] flex justify-center items-center border border-[#000] ${
                activeTab === tab.key
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              } text-base`}
            >
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="relative container flex gap-6">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          className="mySwiper !w-full !h-full"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
        >
          {sneakersArr.map((obj, index: number) => (
            <SwiperSlide key={index} className="">
              <SneakerCard
                imgOne={obj["img-1"]}
                imgTwo={obj["img-2"]}
                price={obj.price}
                text={obj.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>

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
      </div>

      <ShopNow />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-square border">
            <img
              src="https://www.jdsports.cy/modules/sleedbannerswithtext/img/9fae26143b1da9c9207e8279ff572144.jpg"
              alt=""
              className="w-full h-full object cover"
            />
          </div>
          <div className="flex items-center gap-3 w-fit cursor-pointer hover:scale-95 transition-transform duration-500 text-lg md:text-xl">
            <p>Shop Backpacks</p>
            <ArrowRightOutlined />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full aspect-square border">
            <img
              src="https://www.jdsports.cy/modules/sleedbannerswithtext/img/9be7ce0aa281d163f3ffca3c27bf465c.jpg"
              alt=""
              className="w-full h-full object cover"
            />
          </div>
          <div className="flex items-center gap-3 w-fit cursor-pointer hover:scale-95 transition-transform duration-500 text-lg md:text-xl">
            <p>Shop Track Pants</p>
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteLook;
