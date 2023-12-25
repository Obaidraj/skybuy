'use client'
import LoadCard from '@/components/common/LoadingCard'
import ProductCard from '@/components/common/ProductCard'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const {loadingSearch,searchList}=useAppSelector(state=>state.category)


  return (
    <div className="flex flex-col">
    <div className="px-2 py-1 text-xl  uppercase">Search</div>
    <hr />
    <div   className="grid grid-cols-1 xs:grid-col-1 justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2 h-[82dvh] overflow-y-auto">
    {!loadingSearch&&searchList.length<1&&<div className='px-2 py-1'>No result Found</div>}
      
      {loadingSearch&&[...Array(15)].map((_, index) => (
        <div key={index} className=" flex justify-center">
          <LoadCard key={index} />
        </div>
      ))}
  {
    searchList&&searchList.map((data,index)=>(
      <div key={index} className=" flex justify-center">
             <ProductCard data={data} />
      </div>
    ))
  }
  </div></div>
  )
}

export default page