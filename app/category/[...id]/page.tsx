"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import LoadCard from "@/components/common/LoadingCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCategory } from "@/redux/slices/category/categoryAction";
import ProductCard from "@/components/common/ProductCard";
type Props = {};

const page = (props: Props) => {
  const { id } = useParams();
  const dispatch=useAppDispatch()
  const {category,loadingCategory}=useAppSelector(state=>state.category)
  useEffect(()=>{
    const cat:string=id[0]
    console.log(id)
    dispatch(getCategory(cat))
    console.log(category)
  },[])

  return (
    <div className="flex flex-col">
      <div className="px-2 py-1 text-xl  uppercase"> {id[0]}</div>
      <hr />
      <div   className="grid grid-cols-1 xs:grid-col-1 justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2 h-[82dvh] overflow-y-auto">
      
          {loadingCategory&&[...Array(15)].map((_, index) => (
            <div key={index} className=" flex justify-center">
              <LoadCard key={index} />
            </div>
          ))}
      {
        category&&category.map((data,index)=>(
          <div key={index} className=" flex justify-center">
                 <ProductCard data={data}/>
          </div>
        ))
      }
      </div>
    </div>
  );
};


export default page;
