import React from 'react'

const HowItWorksComp = ({header, text, image}) => {
  return (
    <div className='flex items-center justify-between w-full h-24 shadow-sm border'>
        <div className='text-left p-2'>
            <p>{header}</p>
            <p className='text-xs w-11/12'>{text}</p>
        </div>
        <div className='w-1/4'>
            <img src={image} alt='' className='' />
        </div>
       
    </div>
  )
}

export default HowItWorksComp

/* 6C63FF */