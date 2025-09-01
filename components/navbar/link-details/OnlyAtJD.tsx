import React from "react";
import DisplayCard from "./common/DisplayCard";
import { onlyAtJdData } from "./data";

const OnlyAtJD = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-6 mb-6">
        {onlyAtJdData?.map((item, idx: number) => (
          <DisplayCard img={item.img} title={item.title} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default OnlyAtJD;
