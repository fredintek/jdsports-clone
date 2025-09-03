"use client";
import React from "react";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";

const style = [
  {
    name: "Shop Men's",
    image:
      "https://www.jdsports.cy/modules/shopbycategory/img/d5fce9cc77627d353d9b6a9c0a52beaaf804af3f_midspots552x823mens.jpg",
  },
  {
    name: "Shop Women's",
    image:
      "https://www.jdsports.cy/modules/shopbycategory/img/0539fe2efa2ca6d8455f453d5d7a0991863ed018_midspots552x823womens.jpg",
  },
  {
    name: "Shop Kid's",
    image:
      "https://www.jdsports.cy/modules/shopbycategory/img/be486be876a16168e1b62f03c0f5f21ff63af3be_midspots552x823kids.jpg",
  },
];

const brandLogos = [
  "https://www.jdsports.cy/img/c/9449-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9338-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9409-medium_default.jpg",
  "https://www.jdsports.cy/img/c/44120-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9450-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9489-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9366-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9347-medium_default.jpg",
  "https://www.jdsports.cy/img/c/44124-medium_default.jpg",
  "https://www.jdsports.cy/img/c/44121-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9335-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9363-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9438-medium_default.jpg",
  "https://www.jdsports.cy/img/c/9497-medium_default.jpg",
];

type Props = {};

const BrandsYouLove = (props: Props) => {
  return (
    <section className="py-10 flex flex-col gap-6 md:gap-10">
      <div className="container">
        <p className="font-bold text-[#000] text-lg lg:text-[32px] w-fit">
          Brands you love
        </p>
      </div>

      <div className="container flex flex-wrap gap-5 md:gap-10">
        {brandLogos.map((item, idx: number) => (
          <div key={idx} className="w-[125px] h-[125px]">
            <img src={item} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div
        className="container min-h-[190px] flex items-center p-5"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(2, 6, 0, 0.5) 10%, transparent 100%), url("https://www.jdsports.cy/modules/productfinder/views/img/8_5_productfinder_main_image.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 min-[900px]:grid-cols-4 gap-4 w-full">
          <div className="w-full h-[58px] cursor-pointer rounded-t-lg">
            <Dropdown items={["Men", "Women", "Kids"]} defaultText="Gender" />
          </div>
          <div className="w-full h-[58px] cursor-pointer rounded-t-lg">
            {" "}
            <Dropdown
              items={["Shoes", "Clothes", "Accessories"]}
              defaultText="Subcategory"
            />
          </div>
          <div className="w-full h-[58px] cursor-pointer rounded-t-lg">
            {" "}
            <Dropdown
              items={[
                "Nike",
                "Jordan",
                "Hoodrich",
                "Adidas Originals",
                "The North Face",
                "New Balance",
                "Under Armour",
                "Adidas Performance",
                "Adidas Sportswear",
                "Lacoste",
                "PUMA",
                "ASICS Sportstyle",
                "FILA",
                "Birkenstock",
                "Columbia",
                "Converse",
                "Corcs",
                "On",
                "Reebook Classics",
                "Salomon",
                "Timberland",
                "Vans",
                "Hoka",
              ]}
              defaultText="Brand"
            />
          </div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer w-full h-[58px] uppercase text-white bg-black text-[13px] lg:text-[15px] font-bold flex justify-center items-center rounded-lg"
          >
            <span>Get Ready For School</span>
          </motion.div>
        </div>
      </div>

      <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {style?.map((item, idx: number) => (
          <div
            key={idx}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(2, 6, 0, 0.5) 10%, transparent 100%), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full aspect-[9/16] lg:aspect-[9/14] px-4 pb-4 flex flex-col"
          >
            <div className="mt-auto">
              <p className="text-white font-bold text-3xl lg:text-5xl mb-6 text-center">
                {item.name}
              </p>

              <div className="flex flex-col gap-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="w-full py-5 bg-white hover:bg-black hover:text-white text-black"
                >
                  Clothing
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="w-full py-5 bg-white hover:bg-black hover:text-white text-black"
                >
                  Footwear
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="w-full py-5 bg-white hover:bg-black hover:text-white text-black"
                >
                  JD Exclusive
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsYouLove;
