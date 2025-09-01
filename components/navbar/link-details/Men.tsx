import React from "react";
import LinkList from "./common/LinkList";
import Featured from "./common/Featured";
import { menData, DataContentType } from "./data";

const Men = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-6 mb-6">
        {menData?.map((item, idx: number) => {
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

export default Men;
