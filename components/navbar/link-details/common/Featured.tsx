import React from "react";

type Props = {
  data: string;
};

const Featured = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[17px] font-bold">Featured</p>

      <div className="w-full aspect-square">
        <img src={data} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Featured;
