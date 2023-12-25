'use client'
import Button from "@/components/common/Button";
import Card from "@/components/common/card";
import React, { useEffect, useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FaRegTrashCan } from "react-icons/fa6";

import Image from "next/image";
import { removeFromWishlist, removefromcart } from "@/redux/slices/common/commonSlice";
type Props = {};

const page = (props: Props) => {
  const {cartItems}=useAppSelector(state=>state.common)
  const [total,setTotal]=useState(0)
  const paymetClicked = () => {
    console.log("payment clicked");
  }
  useEffect(()=>{
    let localtotal:number=0
    for (const iterator of cartItems) {
      localtotal+=iterator.price*iterator.quantity
      
    }
    setTotal(localtotal)
  },[cartItems])
 
  return (
    <div className="flex flex-col h-full w-full">
      <div className="px-2 py-1 text-xl  uppercase"> Shopping Cart</div>
      <hr />
      <div className="flex justify-between lg:flex-col md:flex-row sm:flex-col xs:flex-col xl:flex-row px-2 h-full">
        <div className="flex lg:w-full xl:w-[70%] md:w-[70%] sm:w-full xs:w-full  h-full">
        <div className='flex  gap-1 flex-col  '>
          <div className="flex flex-col gap-2 my-2 h-[60dvh] overflow-y-auto">
{cartItems&&cartItems.map((item,index)=><Item item={item} key={index}/>)

}
{cartItems.length<1&& <p>Your shopping cart is empty.</p>}

          </div>
          <div className="flex">


<Card title={"Security policy"} icon={ <FaLock className="text-3xl"/>} desc={"Implementing robust encryption protocols and regular security audits to safeguard customer data and ensure a secure online shopping experience."}/>
<Card title={"Delivery policy"} icon={ <FaTruckFast className="text-3xl"/>} desc={"Fast and reliable doorstep delivery, ensuring your purchases reach you swiftly and securely."}/>
<Card title={"Return policy"} icon={ <GiReceiveMoney className="text-3xl"/>} desc={"Hassle-free returns: Shop with confidence knowing our e-commerce site offers a seamless and customer-friendly return policy"}/>
          </div>
          </div>
        </div>
        <div className="m-1 flex  flex-col  lg:w-full xl:w-[30%] md:w-[30%] sm:w-full xs:w-full rounded-md">

        <div className="flex border flex-col  ">
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">{cartItems.length} items</div>
            <div>${total}</div>
          </div>
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">Shipping</div>
            <div>$7.00</div>
          </div>
        </div>
       
        <div className="flex border flex-col  ">
         
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">Total (tax incl.)</div>
            <div>${total+7}</div>
          </div>
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">Total (tax excl.)</div>
            <div>${total+7}</div>
          </div>
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">Taxes</div>
            <div>$0</div>
          </div>
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="underline cursor-pointer text-primary">Have a promo code?</div>
           
          </div>
          <div className="flex  p-2 m-1 justify-center w-full">
         <Button title={"PROCEED TO CHECKOUT"} handleClick={()=>paymetClicked()}/>
           
          </div>
        </div>
   
        </div>
      </div>
    </div>
  );
};

export default page;



function Item({item}) {
  const dispatch=useAppDispatch()
  const handleDelete=()=>{
    dispatch(removefromcart(item))

  }
  return (
    <div className="flex justify-between items-center border rounded-md h-[25%] px-2">
      <div><Image
      src={item.thumbnail}
      alt="image"
      height={200}
      width={100}
      className="h-[80px] object-fit"
      /></div>
      <div className="flex flex-col justify-center text-center">
        <div className="text-xl">{item.title}</div>
        <div className="text-primary font-bold">${item.price}</div>
      </div>
      <div className="text-primary font-bold">{item.quantity}</div>
      <div className="text-primary font-bold">${item.price*item.quantity}</div>
      <div><FaRegTrashCan className="cursor-pointer text-red-600" onClick={handleDelete}/></div>
    </div>
  )
}

