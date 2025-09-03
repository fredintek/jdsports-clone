"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { navlinks, topDataLinks } from "./data";
import TopLink from "./TopLink";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  CloseOutlined,
  HeartOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

type Props = {};

const mobileNavLinks = [
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/1d5e1e5fb440824087c0b324c2f668c7c392ee4c.png",
    label: "Back to school",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/11298302e32c776334839a4757a2b6d967f49a5e.png",
    label: "Men",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/097f5e706936c53c2a1190c92e816cffc5587084.png",
    label: "Women",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/7a69849beb987528f779ef36460a9acf85439514.png",
    label: "Kids",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/e0f4106953aa71315ac341526733e49c08d50b00.png",
    label: "Accessories",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/ab9649102905139dad308c3808fb0ea6b4d3a738.png",
    label: "Brands",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/5a7a689b6cac23fb91c6a69b5babc8294b7ef738.png",
    label: "Collections",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/0090edf05d53b5903bf2d50cc71f647e8ba6f649.png",
    label: "Only at JD",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/fb3f531c102870eee41cc4b1c20bbf5d4bb36efb.png",
    label: "New In",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/7c494b70fe2985c2dba67613d90bb4cb28b0a35d.png",
    label: "eGiftcard",
  },
  {
    img: "https://www.jdsports.cy/modules/sleedmenu/views/img/94fe31714665e3c618e6e54191aa1a3fc2148b56.png",
    label: "Savings",
  },
];

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<null | string>(null);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const mobileNavBottomTexts = [
    {
      title: "Must have",
      subtitle: "Shop black sneakers",
    },
    {
      title: "Layer up",
      subtitle: "Shop hoodies & trackpants",
    },
    {
      title: "Bags & Backpacks",
      subtitle: "Level up your looks",
    },
  ];

  const [activeMobileNavBottom, setActiveMobileNavBottom] = useState(0);

  const NavComponent = useCallback(
    () => navlinks?.find((item) => item.label === hoveredLink)?.component,
    [hoveredLink]
  );

  const ComponentToRender = NavComponent();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMobileNavBottom(
        (prev) => (prev + 1) % mobileNavBottomTexts.length
      );
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, [mobileNavBottomTexts.length]);

  return (
    <nav>
      {/* desktop */}
      <div className="hidden lg:flex flex-col gap-4">
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
          <div
            className="relative"
            onMouseEnter={() => {}}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div className="flex justify-center container">
              {navlinks?.map((item, idx: number) => (
                <Navlink
                  active={hoveredLink === item.label && ComponentToRender}
                  hoveredLink={hoveredLink}
                  setHoveredLink={setHoveredLink}
                  key={idx}
                  label={item.label}
                />
              ))}
            </div>
            {hoveredLink && ComponentToRender && (
              <div className="relative bg-white border-t z-50 p-12">
                {<ComponentToRender />}
              </div>
            )}
          </div>
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

      {/* mobile */}
      <div className="flex flex-col lg:hidden">
        {/* top */}
        <div className="container bg-white flex justify-between items-center">
          <div className="flex items-center gap-3 text-xl">
            <motion.div
              onClick={() => setOpenNav(true)}
              whileTap={{ scale: 0.9 }}
            >
              <MenuOutlined className="cursor-pointer" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <SearchOutlined className="cursor-pointer" />
            </motion.div>
          </div>

          <div className="w-[58px] h-[58px]">
            <img
              src="https://www.jdsports.cy/themes/sleedex-jdsports/img/jd-mobile-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-3 text-xl">
            <motion.div whileTap={{ scale: 0.9 }}>
              <UserOutlined className="cursor-pointer" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <HeartOutlined className="cursor-pointer" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <ShoppingCartOutlined className="cursor-pointer" />
            </motion.div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex items-center justify-center bg-bg-1">
          <div className="flex flex-col items-center px-16 py-2 cursor-pointer transition-opacity duration-500">
            <p className="uppercase text-sm font-bold">
              {mobileNavBottomTexts[activeMobileNavBottom].title}
            </p>
            <p className="uppercase text-sm font-normal">
              {mobileNavBottomTexts[activeMobileNavBottom].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* active nav menu */}
      <div
        className={`${
          openNav ? "fixed" : "hidden"
        } top-0 left-0 w-full h-[80dvh] bg-white z-[60] overflow-y-auto shadow-xl`}
      >
        {/* top */}
        <div className="text-xl flex justify-between px-6 py-3 border-0 border-b">
          <motion.div whileTap={{ scale: 0.9 }}>
            <HomeOutlined className="cursor-pointer" />
          </motion.div>
          <motion.div
            onClick={() => setOpenNav(false)}
            whileTap={{ scale: 0.9 }}
          >
            <CloseOutlined className="cursor-pointer" />
          </motion.div>
        </div>

        {/* bottom */}
        <div className="flex flex-col gap-2">
          {mobileNavLinks?.map((link, idx: number) => (
            <div
              className="p-6 flex items-center justify-between bg-[#f2f2f2]"
              key={idx}
            >
              <p>{link.label}</p>
              <div className="w-[90px] h-[90px]">
                <img
                  src={link.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
