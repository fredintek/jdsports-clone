import React from "react";
import { brandsData } from "./data";
import BrandCard from "./common/BrandCard";

const Brands = () => {
  return (
    <div className="container">
      <p className="text-[17px] font-bold mb-4">Brands</p>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {brandsData?.map((item, idx: number) => (
          <BrandCard key={idx} title={item.title} img={item.img} />
        ))}
      </div>

      <p className="text-[17px] font-bold hover:underline cursor-pointer">
        Shop All Brands
      </p>
    </div>
  );
};

export default Brands;
