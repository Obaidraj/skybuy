'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllCategories } from '@/redux/slices/category/categoryAction'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
interface IProps{
  setIsOpen?:(isOpen:boolean)=>void

}

const Category = ({setIsOpen}:IProps) => {
const router=useRouter()

  const {categories,loadingCategories}=useAppSelector(state=>state.category)
  const dispatch=useAppDispatch()
 

  useEffect(()=>{
    dispatch(getAllCategories())
  },[])
  const hanldeClick=(category:string)=>{
    if(setIsOpen){

      setIsOpen(false)
    }
    router.push(`/category/${category}`)
   
  }
  return (
    <main>
{ loadingCategories?
<div  className="p-[6.5px] ">
<Skeleton count={22} height={30}/>
</div>
:     <>

    <div className="overflow-y-auto h-full">
      {categories.map((category, index) => (
        <React.Fragment key={index}>
        <div  className="p-[6.5px] cursor-pointer hover:bg-gray-300 hover:text-primary"  onClick={()=>hanldeClick(category)}>
          <span>{category}</span>
        </div>
       {index!==categories.length-1&& <hr />}
        </React.Fragment>
      ))}
    </div>
      </>}
    </main>
  )
}

export default Category