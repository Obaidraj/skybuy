'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import Lottie from "lottie-react";
import ErrorAnim from "@/public/error.json"
import Button from '@/components/common/Button';
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="h-[50vh] pt-10">

    <Lottie animationData={ErrorAnim} loop={true} className="h-full"/>
    <div className="flex justify-center">
  <Button title={"GO BACK"} handleClick={()=>reset()}/>
  
    </div>
  </div>
  )
}