const Card = ({title,icon,desc}) => {
    return (
      <div className='flex items-center gap-4 bg-gray-300 px-4 mr-3 py-2 rounded-lg'>
        <div className='text-primary'>
          {icon}
        </div>
        <div className='flex flex-col'>
  <div className='font-bold'>
  {title}
  
  </div>
  <div>
   {desc}
  </div>
        </div>
      </div>
    )
  }
  export default Card;