"use client";
import Button from "@/components/common/Button";
import Category from "@/components/common/Category";
import Drawer from "@/components/common/Drawer";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { HiBars3CenterLeft } from "react-icons/hi2";
import Dashboard from "@/components/dashboard/index" 
export default function Home() {

  return (
 
      <div className="flex-1  h-full">
      <Dashboard/>
      </div>


  );
}
