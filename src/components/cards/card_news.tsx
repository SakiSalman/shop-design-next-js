import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  img?: any;
};

const NewsCard = (p: Props) => {
  return (
    <div className="rounded-sm">
      <div className=" rounded-md overflow-hidden">
        <Image
          className="rounded-md object-cover"
          src={`${p.img}`}
          alt=""
          width={415}
          height={298}
        />
      </div>
      <div className="p-3">
        <Link
          href={`/blog/1`}
          className="text-xl md:text-2xl font-medium py-2 hover:text-pc transition-all duration-500"
        >
          Ashley’s Pride & his story of going beyond
        </Link>
        <p className="flex gap-3 text-xs md:text-base py-3 font-font650">
          <span className="text-gray-400">by</span>
          <span> Hyman</span>
          <span className="text-gray-400">|</span>
          <span> May 29, 2023</span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
