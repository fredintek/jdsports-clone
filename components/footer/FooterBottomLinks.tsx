import React from "react";

type Props = {
  title: string;
  content: string[];
};

const FooterBottomLinks = ({ title, content }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#1a1a1a] text-sm">{title}</p>
      <div className="flex flex-col gap-1">
        {content?.map((item, idx: number) => (
          <p
            key={idx}
            className="cursor-pointer hover:underline text-[11px] text-[#0d0d0d]"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterBottomLinks;
