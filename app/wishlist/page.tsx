'use client'
import Button from "@/components/common/Button";
import ProductCard from "@/components/common/ProductCard";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const router=useRouter()
  const {wishlist}=useAppSelector(state=>state.common);
  return (
    <div className="flex flex-col">
      <div className="px-2 py-1 text-xl  uppercase">my wishlist</div>
      <hr />
      
   
      {
        wishlist&&wishlist.length===0?<div className="flex justify-center items-center flex-col gap-2 h-[82dvh]">
          <div>
          You haven't saved anything yet. 
          </div>
          <div>
            <Button title={"GO BACK"} handleClick={()=>router.push("/")}/>
          </div>
          
          </div>:
      
      <div   className="grid grid-cols-1 xs:grid-col-1 justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2 h-[82dvh] overflow-y-auto">
  {
    wishlist&&wishlist.map((data,index)=>(
      <div key={index} className=" flex justify-center">
             <ProductCard data={data} />
      </div>
    ))
  }
    </div>}
    </div>
  );
};

export default page;
