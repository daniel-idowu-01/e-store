import React from 'react'

const HowItWorks = (props) => {
  return (
    <div className='flex items-center justify-between w-full md:w-60 h-24 shadow-sm border m-2'>
        <div className='p-2 ml-2 md:ml-0'>
            <p>{props.header}</p>
            <p className='text-xs'>{props.text}</p>
        </div>
        <div className='w-1/4'>
            <img src={props.image} alt='' className='' />
        </div>
       
    </div>
  )
}

export default HowItWorks

/* 6C63FF */