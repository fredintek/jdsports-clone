import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import React from "react";

const images = [
  "/images/follow-1.jpg",
  "/images/follow-2.jpg",
  "/images/follow-3.jpg",
  "/images/follow-4.jpg",
  "/images/follow-5.jpg",
  "/images/follow-6.jpg",
  "/images/follow-7.jpg",
  "/images/follow-8.jpg",
  "/images/follow-9.jpg",
];

type Props = {};

const FollowUs = (props: Props) => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <p className="font-bold text-[#000] text-[22px]">
            Follow Us On Instagram @JDSportsCY
          </p>
          <p className="text-lg">Share your style #JDFit</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {images?.map((img, idx: number) => {
            const spanOnMobile = [0];
            const spanOnTablet = [0, 4];
            const spanOnDesktop = [0, 5];
            return (
              <div
                key={idx}
                className={`aspect-square group relative cursor-pointer ${
                  spanOnMobile.includes(idx)
                    ? "col-span-2 row-span-2 sm:col-span-1 sm:row-span-1"
                    : ""
                }
          ${
            spanOnTablet.includes(idx)
              ? "sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-1"
              : ""
          }
          ${spanOnDesktop.includes(idx) ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
                <div className="hidden absolute w-full h-full top-0 left-0 bg-black/25 group-hover:flex justify-center items-center gap-3 text-white">
                  <div className="flex items-center gap-2">
                    <HeartOutlined />
                    <p>123</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CommentOutlined />
                    <p>123</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
