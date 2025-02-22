import Image from 'next/image'
import React from 'react'

const SinglePost = ({ img, price, category, title, summary, slug }) => {
  return (
    <div className="container max-w-[768px] ">
        <Image className="max-w-[500px] w-[100%] " src={img} width={100} height={100} alt="post image" unoptimized />
        <div className="flex- justify-between">
        <p>{category}</p>
        <p className="font-bold">{price}</p>
        </div>
        <p className="text-lg font-bold ">{title}</p>
        <p className="text-sm font-medium" >{summary}</p>
        {/* <p>{slug}</p> */}
    </div>
  )
}

export default SinglePost