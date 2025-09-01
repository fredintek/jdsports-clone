import React from "react";
import { newInData } from "./data";
import DisplayCard from "./common/DisplayCard";

const NewIn = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-6 mb-6">
        {newInData?.map((item, idx: number) => (
          <DisplayCard img={item.img} title={item.title} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default NewIn;
