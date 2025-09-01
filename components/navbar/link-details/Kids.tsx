import React from "react";
import { DataContentType, kidsData } from "./data";
import Featured from "./common/Featured";
import LinkList from "./common/LinkList";

const Kids = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-6 mb-6">
        {kidsData?.map((item, idx: number) => {
          if (item.type === "featured") {
            return <Featured key={idx} data={item.image as string} />;
          } else {
            return (
              <LinkList key={idx} data={item.content as DataContentType} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Kids;
