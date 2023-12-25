
import React from 'react'

type Props = {
    title:any
    handleClick?:any
}

const Button = ({title,handleClick}: Props) => {
  return (
 
        <button className='bg-primary py-2 px-5 rounded-md text-white ' onClick={()=>handleClick()}>
            {title}
        </button>

  )
}

export default Button