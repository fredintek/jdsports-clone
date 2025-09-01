import React from "react";

type Props = {
  img: string;
  title: string;
};

const BrandCard = ({ title, img }: Props) => {
  return (
    <div className="flex items-center gap-2 w-fit cursor-pointer hover:underline">
      <div className="w-6 h-6">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default BrandCard;
