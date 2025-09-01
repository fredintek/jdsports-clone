import React from "react";
import { DataContentType, savingsData } from "./data";
import Featured from "./common/Featured";
import LinkList from "./common/LinkList";

const Savings = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-6 mb-6">
        {savingsData?.map((item, idx: number) => {
          if (item.type === "featured") {
            return <Featured key={idx} data={item.image as string} />;
          } else {
            return (
              <LinkList key={idx} data={item.content as DataContentType} />
            );
          }
        })}
      </div>

      <p className="text-[17px] font-bold hover:underline cursor-pointer">
        Shop All Men's
      </p>
    </div>
  );
};

export default Savings;
