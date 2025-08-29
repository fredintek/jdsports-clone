import { DownOutlined } from "@ant-design/icons";
import React from "react";

type Props = {};

const LanguageSwitcher = (props: Props) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-6 h-4 bg-red-500">
        <img
          src="/images/eng-flag.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <DownOutlined className="text-xs text-color-4" />
    </div>
  );
};

export default LanguageSwitcher;
