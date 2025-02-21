import React from 'react'

const SinglePost = ({ img, price, category, title, summary, slug }) => {
  return (
    <div>
        <Image src={img}/>
        <p>{price}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{summary}</p>
        <p>{slug}</p>
    </div>
  )
}

export default SinglePost