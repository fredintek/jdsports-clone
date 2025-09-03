import { DownOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  items: string[];
  defaultText: string;
};

const Dropdown = ({ items, defaultText }: Props) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedText, setSelectedText] = useState<string>(defaultText);

  // toggle open/close
  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };
  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className={`relative bg-white w-full h-full ${
        open ? "rounded-t-lg" : "rounded-t-lg rounded-b-lg"
      }`}
    >
      {/* top */}
      <div
        onClick={toggleDropdown}
        className={`w-full h-full flex items-center justify-between px-2 border-0 text-[13px] ${
          open ? "border-b" : ""
        }`}
      >
        <p>{selectedText}</p>
        <DownOutlined />
      </div>

      {/* bottom */}
      {open && (
        <div className="z-50 absolute w-full max-h-[200px] overflow-y-auto flex flex-col top-full bg-white">
          {items?.map((item, idx: number) => (
            <p
              key={idx}
              onClick={() => setSelectedText(item)}
              className="border-0 border-b p-2 text-[13px]"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
