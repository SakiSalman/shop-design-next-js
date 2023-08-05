'use client'
import SeriesCard from "@/components/cards/SeriesCard";
import { Motion1 } from "@/utils/framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

type Props = {};

const StrainsUi = (p: Props) => {
  return (
    <Fragment>
      <div className=" _container py-10">
        <div className="text-center mb-5">
          <div>
            <p className="text-[#F5A800] text-base font-[500]">
              The Categories
            </p>
            <h3 className="text-[#333333] font-[650] text-[36px]">
              Browse by Strain
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:w-3/4 mx-auto gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <SeriesCard key={i} notLearnMore={true} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-4 gap-y-8 mt-16">
          {[...Array(12)].map((data, i) => (
            <Motion1 key={i} delay={i * 0.1}>
              <Link
                href={`/strains/${i + 1}`}
                className="hover:scale-95 transition-all duration-200"
              >
                <Image
                  src={`/images/strains/strains-${i + 1}.png`}
                  width={306}
                  height={306}
                  className="w-auto h-auto object-cover rounded-t-md"
                  alt="slider"
                />
              </Link>
            </Motion1>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default StrainsUi;
