import React from "react";
import Image from "next/image";
import FastLearnLogo from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-row items-center cursor-pointer">
        <Image src={FastLearnLogo} alt="FastLearn logo" width={40} />
        <p className="ml-1 sm:text-xl text-xl text-gray-800 font-bold font-pacifico">
          FastLearn
        </p>
      </div>
    </Link>
  );
};

export default Logo;
