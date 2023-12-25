'use client'
import Button from "@/components/common/Button";
import Card from "@/components/common/card";
import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
type Props = {};

const page = (props: Props) => {
  const paymetClicked = () => {
    console.log("payment clicked");
  }
  return (
    <div className="flex flex-col h-full w-full">
      <div className="px-2 py-1 text-xl  uppercase"> Shopping Cart</div>
      <hr />
      <div className="flex justify-between px-2 h-full">
        <div className="flex w-[70%] h-full">
        <div className='flex  gap-1 flex-col  '>
          <div className="flex flex-col gap-2 my-2 h-[60dvh] overflow-y-auto">
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>
<Item/>


          </div>
          <div className="flex">


<Card title={"Security policy"} icon={ <FaLock className="text-3xl"/>} desc={"Implementing robust encryption protocols and regular security audits to safeguard customer data and ensure a secure online shopping experience."}/>
<Card title={"Delivery policy"} icon={ <FaTruckFast className="text-3xl"/>} desc={"Fast and reliable doorstep delivery, ensuring your purchases reach you swiftly and securely."}/>
<Card title={"Return policy"} icon={ <GiReceiveMoney className="text-3xl"/>} desc={"Hassle-free returns: Shop with confidence knowing our e-commerce site offers a seamless and customer-friendly return policy"}/>
          </div>
          </div>
        </div>
        <div className="m-1 flex  flex-col w-[30%] rounded-md">

        <div className="flex border flex-col  ">
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">4 items</div>
            <div>$238.00</div>
          </div>
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">Shipping</div>
            <div>$238.00</div>
          </div>
        </div>
       
        <div className="flex border flex-col  ">
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">Total (tax excl.)</div>
            <div>$238.00</div>
          </div>
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">Total (tax incl.)</div>
            <div>$238.00</div>
          </div>
          <div className="flex  p-2 m-1 justify-between w-full">
            <div className="font-bold text-primary">Total (tax excl.)</div>
            <div>$238.00</div>
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



function Item() {
  return (
    <div className="border h-[25%]">page</div>
  )
}

