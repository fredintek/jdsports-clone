import React from "react";

type Props = {};

const SneakerCard = (props: Props) => {
  return (
    <div className="">
      <div className="min-w-[280px] max-w-[600px] aspect-square bg-red-300 mb-6"></div>
      <p className="mb-3">€190.00</p>
      <p>New Balance 9060 Unisex Shoes</p>
    </div>
  );
};

export default SneakerCard;
