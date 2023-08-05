import Image from "next/image";
import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import Icon from "../logoicon/logoIcon";
import style from "./card.module.css";

type Props = {
  img: any;
  bg: string;
};

const CannabisCard = (p: Props) => {
  return (
    <div className={`overflow-hidden rounded-t-md rounded-r-md shadow-lg mx-1`}>
      <div className={`${p.bg} min-h-[200px] flex justify-center items-center`}>
        <Image
          width={200}
          height={200}
          src={`${p.img}`}
          className="object-cover"
          alt=""
        />
      </div>
      <div className=" bg-white">
        <h3 className="text-base font-font650 md:font-medium text-center py-5 text-[#333]">
          Supreme New York Cheesecake
        </h3>
        <div className="flex items-center justify-between gap-0 border-b border-t p-8 ">
          <div className="">
            <ul className="flex flex-col gap-3">
              <li className="text-gray65 text-xs font-medium flex items-center gap-2 lowercase">
                {" "}
                <BsFillCircleFill size={6} /> 1g hash rosin
              </li>
              <li className="text-gray65 text-xs font-medium flex items-center gap-2 lowercase">
                {" "}
                <BsFillCircleFill size={6} /> 3.5G PRE PACK
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-3">
              <li className="text-gray65 text-xs font-medium flex items-center gap-2 lowercase">
                {" "}
                <BsFillCircleFill size={6} /> 1.5G ECLAIR
              </li>
              <li className="text-gray65 text-xs font-medium flex items-center gap-2 lowercase">
                {" "}
                <BsFillCircleFill size={6} /> 1G HAND CRAFT
              </li>
            </ul>
          </div>
        </div>
        <div className="py-3 flex gap-3 items-center  p-8">
          <Icon />
          <h6 className="text-base font-medium">Series IV</h6>
        </div>
      </div>
    </div>
  );
};

export default CannabisCard;
