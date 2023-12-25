import Image from "next/image";
import React from "react";
import Banner from "@/public/banner.json";
import { useWindowSize } from "usehooks-ts";
import Lottie from "lottie-react";
import Body from "./body";
type Props = {};

const index = (props: Props) => {
  const { width } = useWindowSize();
  return (
    <div className="flex flex-col gap-1 ">
      <div className="border bg-primary rounded-md  h-[25%] flex justify-between items-center px-2 text-white">
        <div className="flex flex-col gap-2 justify-center ">
          <span>STARTING AT ONLY $100</span>
          <span className="text-start text-3xl">
            New Classic Clothes <br /> Collection
          </span>
        </div>
        {width > 400 && (
          <div className="w-[20%]">
            <Lottie animationData={Banner} loop={true} className="h-full" />{" "}
          </div>
        )}
      </div>
      <div className=" border rounded-md sm:h-[59dvh] h-[72dvh] overflow-y-auto ">
        {" "}
        <Body />
      </div>
    </div>
  );
};

export default index;
