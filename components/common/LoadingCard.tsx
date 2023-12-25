


import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadCard = () => {


  return (
    <>
    <div className="relative m-2 flex w-full  h-[400px] max-w-xs flex-col overflow-hidden rounded-lg cursor-pointer border border-gray-100 bg-white shadow-md" >
      <a
        className="relative mx-3 mt-3 flexoverflow-hidden rounded-xl h-[250px]"
        href="#"
      >
       

      <Skeleton className="h-full" />
        
  
      </a>
      <div className=" px-5 pt-4 ">
        <a href="#" className="mb-4">
        <Skeleton  className="h-[20%] mb-5"/>
        </a>
        <a href="#" >
        <Skeleton className="h-[20%] mb-5"/>
        </a>
        <div >
        
          
            <Skeleton  className="h-[20%] mb-5"/>
       
        
        </div>
      </div>
    </div>
    </>
  );
};

export default LoadCard;
