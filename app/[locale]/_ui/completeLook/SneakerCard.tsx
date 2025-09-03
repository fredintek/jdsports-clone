import React from "react";

type Props = {
  imgOne: string;
  imgTwo: string;
  price: string;
  text: string;
};

const SneakerCard = ({ imgOne, imgTwo, price, text }: Props) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative min-w-[280px] max-w-[600px] aspect-square mb-6">
        {/* Default Image */}
        <img
          src={imgOne}
          alt=""
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={imgTwo}
          alt=""
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
      <p className="mb-3">€{price}</p>
      <p>{text}</p>
    </div>
  );
};

export default SneakerCard;
