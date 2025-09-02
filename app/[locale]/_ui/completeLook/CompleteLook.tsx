"use client";
import React, { useState } from "react";
import SneakerCard from "./SneakerCard";

type Props = {};

const tabs = [
  {
    key: "sneakers",
    label: "Shop Sneakers",
  },
  {
    key: "tops",
    label: "Shop Tops",
  },
  {
    key: "bottoms",
    label: "Shop Bottoms",
  },
];

const CompleteLook = (props: Props) => {
  const [activeTab, setActiveTab] = useState("sneakers");

  return (
    <section className="py-10 flex flex-col gap-6">
      <div className="container flex flex-col gap-4 lg:flex-row lg:gap-8 lg:items-center">
        <p className="font-bold text-[#000] text-lg lg:text-[32px]">
          Complete The Look
        </p>
        <div className="flex items-center gap-4">
          {tabs?.map((tab, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab.key)}
              className={`w-[165px] h-[52px] flex justify-center items-center border border-[#000] ${
                activeTab === tab.key
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              } text-base`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="container flex gap-6 overflow-x-scroll">
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
      </div>
    </section>
  );
};

export default CompleteLook;
