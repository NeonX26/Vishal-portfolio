import React from 'react'

const Card = ({image,title,subtitle,link}) => {
  return (
    <a href={link} className='m-4 block max-w-sm overflow-hidden rounded-lg'>
        <div className="relative ">
            <img src={image} alt={title} className='w-full' />
            <div className="flex flex-col justify-between p-4">
                <h2 className='mb-2 text-2xl font-bold'>
                    {title}
                </h2>
                <p className='mb-b text-sm font-medium'>
                  {subtitle}
                </p>
            </div>
        </div>
    </a>
  )
}

export default Card