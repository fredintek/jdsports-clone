import React from "react";

type Props = {
  title: string;
  iconLabel?: any;
};

const TopLink = ({ title, iconLabel }: Props) => {
  const Icon = iconLabel;
  return (
    <div className="flex gap-1 items-center text-sm font-light text-[11px] text-color-2 cursor-pointer w-fit hover:underline">
      <p>{title}</p>
      {Icon && <Icon />}
    </div>
  );
};

export default TopLink;
