import Image from "next/image";
import React from "react";

const SinglePost = ({ img, price, category, title, summary, slug }) => {
  return (
      <div className="max-w-[768px]">
        <Image
          className="max-w-[300px] w-[100%] "
          src={img}
          width={100}
          height={100}
          alt="post image"
          unoptimized
        />
        <div className="max-w-[300px] flex justify-between mt-3">
          <p className="text-slate-700">{category}</p>
          <p className="font-bold text-slate-900">{price}</p>
        </div>
        <p className="text-3xl font-bold text-slate-900 my-3 ">{title}</p>
        <p className="text-lg font-thin text-slate-700 text-justify">{summary}</p>
        {/* <p>{slug}</p> */}
      </div>
  );
};

export default SinglePost;
