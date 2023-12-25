import React from 'react'

type Props = {
    placeholder:string
    type?:string
    handleChange:any
    value:string | number
}

const Input = ({placeholder,type="text",handleChange,value}: Props) => {
  return (
    <div className='w-full'>
        <input type={type} placeholder={placeholder} className='border border-1 p-2 w-full rounded-md' onChange={handleChange} value={value} />
    </div>
  )
}

export default Input