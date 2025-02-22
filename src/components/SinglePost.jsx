import React from 'react'

const SinglePost = ({ img, price, category, title, summary, slug }) => {
  return (
    <div>
        <Image src={img} width={100} height={100} alt="post image" unoptimized />
        <p>{price}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{summary}</p>
        <p>{slug}</p>
    </div>
  )
}

export default SinglePost