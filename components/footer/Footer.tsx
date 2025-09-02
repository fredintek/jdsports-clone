import {
  ArrowRightOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import FooterBottomLinks from "./FooterBottomLinks";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-auto">
      {/* top */}
      <div className="bg-[#2e2e2e] py-4">
        <div className="container flex items-center gap-4 text-white">
          <p className="text-[13px]">Join the conversation</p>

          <div className="flex gap-4 items-center text-3xl">
            <div className="">
              <FacebookOutlined />
            </div>
            <div className="">
              <YoutubeOutlined />
            </div>
            <div className="">
              <InstagramOutlined />
            </div>
          </div>
        </div>
      </div>

      {/* middle */}
      <div className="bg-[#f5f5f5]">
        <div className="container flex flex-col gap-8 items-center py-10">
          <p className="text-3xl font-bold text-center">
            Subrscribe to our Newsletter and get 10% off your first online order
            when you spend over 50€!
          </p>
          <p className="text-lg text-center">
            Be the first to know the latest JD Sports news, products and offers.
          </p>
          <div className="bg-red-300 h-[70px] w-full max-w-[720px] relative">
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="w-full h-full px-3 outline-none"
            />
            <ArrowRightOutlined className="absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
          <p className="text-lg text-center">
            We'll use your information in accordance with our{" "}
            <span className="font-bold">Privacy Notice</span>
          </p>
          <p className="text-lg text-center">*Terms & Conditions Apply</p>
        </div>
      </div>

      {/* bottom */}
      <div className="bg-white border-y py-10">
        <div className="container grid grid-cols-2 md:grid-cols-4">
          <FooterBottomLinks
            title="Shopping with JD"
            content={[
              "Find a Store or Pick up Point",
              "Payment Methods",
              "BOX NOW",
              "eGift Card",
            ]}
          />
          <FooterBottomLinks
            title="Customer Care"
            content={["Contact", "Help", "Delivery & Returns"]}
          />
          <FooterBottomLinks
            title="Corporate"
            content={["JD Sports Fashion Plc", "Payment Methods", "Careers"]}
          />
          <FooterBottomLinks
            title="Legal"
            content={[
              "Terms & Conditions",
              "Privacy Policy",
              "Cookies Policy",
              "Cookie Declaration",
              "Accessibility",
            ]}
          />
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-center max-w-[320px] text-[13px]">
            Visit our corporate website at www.jdplc.com Copyright © 2025 JD
            Sports All rights reserved. Developed by Sleed.
          </p>

          <div className="flex flex-col gap-1">
            <p className="text-center text-[13px]">
              We accept the following payment methods
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[32px]">
                <img
                  src="/images/card-logos.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
