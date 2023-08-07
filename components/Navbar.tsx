import Link from "next/link";
import React from "react";

const Navbar = () => {
  return <nav className=" flex justify-between p-2 bg-slate-200">
    <Link href="/" >
      Home
    </Link>
    <Link href="/login" className=" text-blue-600">
      Login
    </Link>
  </nav>;
};

export default Navbar;
