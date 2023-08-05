import React from "react";
import ButtonPrimary from "../butttons/ButtonPrimary";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {};

const Strains = (props: Props) => {
  const router = useRouter();

  return (
    <div className="p-4 border border-gray-200 rounded-md flex gap-5">
      <div className="">
        {/* <img src="/images/strains-1.png" alt="" /> */}
        <Image
          src={"/images/strains-1.png"}
          alt="img"
          width={120}
          height={120}
          className=" object-cover"
        />
      </div>

      <div>
        <h3 className="text-xl font-medium text-sc">Molotov</h3>
        <p className="text-base font-medium mb-3 text-[#8D8D8D]">Series I</p>
        <ButtonPrimary onClick={() => router.push("/strains/1")}>
          Details
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Strains;
