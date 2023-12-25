"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/public/images/main_logo.svg";
import MiniLogo from "@/public/images/logo.png";
import Image from "next/image";
import Input from "./common/Input";
import Button from "./common/Button";

import { CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import { LuUserCircle } from "react-icons/lu";
import { useWindowSize } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { searchProduct } from "@/redux/slices/category/categoryAction";

type Props = {};

const Header = (props: Props) => {
  const[search,setSearch]=useState("")
  const dispatch=useAppDispatch()
  const router = useRouter();
  const { width } = useWindowSize();
  const handleSearch = () => {
    dispatch(searchProduct(search));
    router.push("/search");
  };
const handleChangeSaerch=(e)=>{
  setSearch(e.target.value);

}
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between gap-2">
        <div>
          <Image
            src={Logo}
            height={100}
            width={110}
            alt="logo"
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
        </div>
        {width > 900 && (
          <div className="flex items-center flex-1 justify-center ">
            <div className="xs:w-[100%] sm:w-[70%] md:w-[40%] lg:w-[40%] mx-2">
              <Input placeholder={"Search products here..."} handleChange={handleChangeSaerch} value={search}/>
            </div>
            <Button title={"SEARCH"} handleClick={handleSearch} />
          </div>
        )}
        <div className="flex items-center justify-end">
          <div className="flex justify-between gap-4 ">
            <div
              className="px-2 border-r-2 cursor-pointer hover:text-primary"
              onClick={() => router.push("/auth")}
            >
              Login / Register
            </div>
            <div  >
              <CiHeart
                className="text-3xl cursor-pointer hover:text-primary"
                title="Wishlist"
                onClick={() => router.push("/wishlist")}
              />
          
            </div>
            <div>
              {" "}
              <CiShoppingCart
                className="text-3xl cursor-pointer hover:text-primary"
                title="Cart"
                onClick={() => router.push("/cart")}

              />
            </div>
            <div>
              <LuUserCircle
                className="text-3xl cursor-pointer hover:text-primary"
                title="User"
                onClick={() => router.push("/profile")}
              />
            </div>
          </div>
        </div>
      </div>
      {width < 900 && (
        <div className="flex items-center flex-1 justify-center ">
          <div className="w-[100%]">
            <Input placeholder={"Search products here..."} handleChange={handleChangeSaerch} value={search}/>
          </div>
          <Button title={"SEARCH"} handleClick={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default Header;
