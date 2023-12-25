"use client";
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import dynamic from "next/dynamic";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SnackbarProvider } from "notistack";
import Category from "./common/Category";
import { useWindowSize } from "usehooks-ts";
import Button from "./common/Button";
import { HiBars3CenterLeft } from "react-icons/hi2";
import Drawer from "./common/Drawer";
type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">

      <SnackbarProvider />
      <div className="lg:px-[10%] px-[2%] py-1">
        <Header />
      </div>
      <hr />
      <div className="flex-1 lg:px-[10%] px-[2%]">
        <main className="flex gap-4 py-2 h-full">    {width > 900 && (
        <div className="w-56 border rounded-md">
          <span className="text-2xl px-1 py-2 ">Categories</span>
          <hr/>
          <Category />
        </div>
      )} {children}
      {width < 900 &&        <div className="absolute left-1 top-[50%]">
          <Button
            title={<HiBars3CenterLeft className="text-2xl z-10" />}
            handleClick={() => setIsOpen(true)}
          />
        </div>}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title={"Categories"}>
          <Category setIsOpen={setIsOpen}/>
        </Drawer></main>
      </div>
      <hr />

      <div className="lg:px-[10%] px-[2%] flex justify-between flex-row  gap-3">
        <div>
          <p className="sm:text-md text-xs">
            Discover quality deals at Sky Buy. Happy shopping!
          </p>
        </div>
        <div className="flex justify-end gap-4 items-center  py-1 ">
          <div>
            <FaFacebook />
          </div>
          <div>
            <RiInstagramFill />
          </div>
          <div>
            <FaSquareXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(MainLayout), { ssr: false });
