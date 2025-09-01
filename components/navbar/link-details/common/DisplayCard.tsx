import React from "react";

type Props = {
  img: string;
  title: string;
};

const DisplayCard = ({ img, title }: Props) => {
  return (
    <div className="w-full aspect-square cursor-pointer">
      <div className="w-full aspect hover:opacity-90">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="bg-[#404040] text-white text-base font-bold flex justify-center p-2">
        {title}
      </p>
    </div>
  );
};

export default DisplayCard;
