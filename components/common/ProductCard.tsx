// components/ProductCard.js

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToWishlist, removeFromWishlist } from "@/redux/slices/common/commonSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import {  enqueueSnackbar } from 'notistack'

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
const ProductCard = ({data}) => {
  const router=useRouter()
  const {title,discountPercentage,thumbnail,stock,brand,price,rating} = data;
  function calculateActualPrice(discountedPrice, discountPercentage) {
    var decimalDiscount = discountPercentage / 100;
    var actualPrice = discountedPrice / (1 - decimalDiscount);
    actualPrice = Math.round(actualPrice * 100) / 100;
    return actualPrice;
  }
  const {wishlist}=useAppSelector(state=>state.common)
  const dispatch=useAppDispatch()
  const handleClick = ( e) => {
    e.preventDefault();
    e.stopPropagation();
    if(wishlist.includes(data)){
      dispatch(removeFromWishlist(data))
      enqueueSnackbar("Removed to wishlist" ,{ variant: 'success' })

    }else{

      dispatch(addToWishlist(data))
      enqueueSnackbar("Added to wishlist" ,{ variant: 'success' })
    }
  };
const handledetailpage=()=>{
  router.push(`/${data.id}`)

}
  return (
    <>
    <div className="relative m-2 flex  h-[400px] max-w-xs flex-col overflow-hidden rounded-lg cursor-pointer border border-gray-100 bg-white shadow-md" onClick={handledetailpage}>
      <div
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
       
      >
        <Image
          className="object-cover"
          width={900}
          height={900}
          src={thumbnail}
          alt="product image"
          priority={true}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {discountPercentage.toFixed(1)}% OFF
        </span>
        <span className="absolute top-0 right-0 m-2  rounded-full px-2 text-center text-3xl font-medium text-primary" onClick={(e:any)=>handleClick(e)}>
       { wishlist.includes(data)? <FaHeart/> :<CiHeart/>}
        </span>
        {+stock < 30 && (
          <span className="absolute bottom-0 left-0 m-2 rounded-full bg-green-300 px-2 text-center text-sm font-medium text-black">
            STOCK LIMITED{" "}
          </span>
        )}
      </div>
      <div className=" px-4 pb-1">
        <div className="bg-gray-300 p-1 mt-2  rounded-md">
          {brand}
        </div>
        <div >
          <h5 className="text-xl tracking-tight text-slate-900 h-[55px]">{title}</h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between flex-wrap">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through">
              ${calculateActualPrice(price, discountPercentage)}
            </span>
          </p>
          <div className="flex items-center">
            {[...Array(Math.floor(rating))].map((_, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
