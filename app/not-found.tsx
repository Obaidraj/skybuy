'use client'
import Lottie from "lottie-react";
import Opps from "@/public/404page.json"

import Link from "next/link";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
function NotFoundPage() {
const router=useRouter()
	return(
<div className="h-[50vh] pt-10">

  <Lottie animationData={Opps} loop={true} className="h-full"/>
  <div className="flex justify-center">
<Button title={"GO BACK"} handleClick={()=>router.push('/')}/>

  </div>
</div>
    
  )

}

export default NotFoundPage