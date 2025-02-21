import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-slate-300 fixed w-[100%] ">
    <div className="container mx-auto flex justify-between items-center p-3" >
      {/* <p>@CODE BY MANISH</p> */}
      <Image
      className="w-[50]"
        src="/mainlogo.png"
        width={100}
        height={100}
        alt="Logo"
        unoptimized
      />
      <div className="flex gap-5 text-xl text-stone-900 items-center">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/blog">
          <p>Blog</p>
        </Link>
      </div>

      <div>
        <button className="border border-gray-400 rounded-md px-6 py-2 text-slate-500 font-medium ">Login</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
