'use client'
import React from 'react'
import Comming from "@/public/commingSoon.json"
import Lottie from 'lottie-react'
import Link from 'next/link'
type Props = {}

const page = (props: Props) => {
  return (
    <div className="h-[50vh] pt-10">

    <Lottie animationData={Comming} loop={true} className="h-full"/>
    <div className="flex justify-center">
  <Link href="/" scroll={false} className="bg-primary text-white px-4 py-2 rounded-md">GO BACK</Link>
  
    </div>
  </div>
  )
}

export default page