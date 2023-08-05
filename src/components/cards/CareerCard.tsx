import React from "react";
import ButtonPrimary from "../butttons/ButtonPrimary";
import { FiDollarSign } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";

type Props = {};

const CareerCard = (props: Props) => {
  return (
    <div className="border rounded-md px-4 py-5">
      <p className="text-lg md:text-xl font-medium ">Graphic Design</p>
      <div className="flex justify-start items-center gap-3 py-3">
        <p className="flex items-center gap-1 text-sm">
          <HiLocationMarker />
          San Fransisco
        </p>
        <p className="flex items-center gap-1 text-sm">
          <FiDollarSign />
          Negotiable
        </p>
      </div>
      <Link href={"/career/1"}>
        <ButtonPrimary primary tw={"px-4 text-sm font-medium"}>
          Apply Now
        </ButtonPrimary>
      </Link>
    </div>
  );
};

export default CareerCard;
