import React from "react";

type Props = {
  data: { title: string; links: string[] };
};

const LinkList = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[17px] font-bold">{data?.title}</p>

      <div className="flex flex-col gap-2 text-[13px] font-normal">
        {data?.links?.map((item, idx: number) => (
          <p key={idx} className="hover:underline cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LinkList;
