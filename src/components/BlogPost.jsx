import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogPost({ img, price, category, title, summary, slug }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="text-state-500  flex flex-col gap-2 shadow-sm bg-slate-200"
    >
      <Image
        className="w-[100%] aspect-[1] object-cover"
        src={img}
        width={100}
        height={100}
        alt="blog image"
        unoptimized
      />
      <div className="p-4 flex flex-col gap-2">
      <div className="flex text-slate-600 text-sm  justify-between">
        <p>{category}</p>
        <p className=" font-bold ">${price}</p>
      </div>
      <h2 className="text-xl font-semibold text-slate-900 leading-[1.3] ">
        {title}
      </h2>
      <p className="text-md text-slate-700 leading-[1.3]">{summary}</p>
      </div>
    </Link>
  );
}

export default BlogPost;
