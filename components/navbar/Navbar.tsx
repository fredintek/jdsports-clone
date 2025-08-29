"use client";
import React, { useState } from "react";
import { navlinks, topDataLinks } from "./data";
import TopLink from "./TopLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navlink from "./Navlink";

type Props = {};

const Navbar = (props: Props) => {
  const [hoveredLink, setHoveredLink] = useState<null | string>(null);
  return (
    <nav>
      {/* desktop */}
      <div className="flex flex-col gap-4">
        {/* top */}
        <div className="container flex items-center gap-4 justify-end py-[10px]">
          {topDataLinks?.map((item, idx: number) => (
            <TopLink
              key={idx}
              title={item.title}
              iconLabel={item.icon ?? undefined}
            />
          ))}
          <LanguageSwitcher />
        </div>

        {/* middle */}
        <div className="container flex items-center justify-between">
          <div className="w-[225px] h-10">
            <img
              src="/images/jd-desktop-logo.png"
              alt=""
              className="w-full object-contain"
            />
          </div>

          <div className="flex gap-4">
            <div className="h-10 border w-[385px] flex items-center gap-2 px-2">
              <SearchOutlined className="text-[#2a8272] text-lg" />
              <input
                type="text"
                className="flex-1 h-full outline-none text-[15px] text-[#757575]"
                placeholder="Search among 5000+  products"
              />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon
                icon={faMicrophone}
                className="text-[#2a8272] text-lg"
              />
            </div>
            <div className="bg-[#cccccc] text-[#000000] w-[143px] h-10 grid place-items-center">
              <p className="text-[13px]">Basket is empty</p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div>
          <div className="flex justify-center container">
            {navlinks?.map((item, idx: number) => (
              <Navlink
                active={hoveredLink === item.label}
                hoveredLink={hoveredLink}
                setHoveredLink={setHoveredLink}
                key={idx}
                label={item.label}
              />
            ))}
          </div>
          {hoveredLink && (
            <div className="relative bg-white border-t z-50 p-12">
              <p>fredintek</p>
              <p>fredintek</p>
              <p>fredintek</p>
              <p>fredintek</p>
              <p>fredintek</p>
              <p>fredintek</p>
              <p>fredintek</p>
              <p>fredintek</p>
              <p>fredintek</p>
              <p>fredintek</p>
            </div>
          )}
          <div className="flex items-center justify-center bg-bg-1">
            <div className="flex flex-col items-center px-16 py-2 cursor-pointer">
              <p className="uppercase text-sm font-bold">Must have</p>
              <p className="uppercase text-sm font-normal">
                Shop black sneakers
              </p>
            </div>
            <div className="flex flex-col items-center px-16 py-2 cursor-pointer">
              <p className="uppercase text-sm font-bold">Layer up</p>
              <p className="uppercase text-sm font-normal">
                Shop hoodies & trackpants
              </p>
            </div>
            <div className="flex flex-col items-center px-16 py-2 cursor-pointer">
              <p className="uppercase text-sm font-bold">Bags & Backpacks</p>
              <p className="uppercase text-sm font-normal">
                Level up your looks
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
