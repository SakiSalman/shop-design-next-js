'use client';
import React from 'react';
import Image from 'next/image';
import ButtonPrimary from '../butttons/ButtonPrimary';
import { useRouter } from 'next/navigation';

type Props = {
  imgs?: any;
  tw?: string;
};

const SliderCard = (p: Props) => {
  const router = useRouter();

  return (
    <div
      className={`overflow-hidden transition-all duration-500 rounded-t-md rounded-r-md card_shadow w-[20rem]`}
    >
      <div
        className={`min-h-[250px] flex justify-center items-center ${
          p.tw ? p.tw : 'bg-[#986BA0]'
        }`}
      >
        <Image
          width={200}
          height={200}
          src={p.imgs ? p.imgs : '/images/dankos-2.png'}
          className="object-cover"
          alt=""
        />
      </div>
      <div className=" bg-white px-5 py-5 text-center h-[200px]">
        <div className="mx-auto">
          <h3 className="text-[25px] md:text-2xl font-nedium md:font-medium text-center pb-3 text-sc">
            Dankaroos
          </h3>
          <p className="text-xs font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ButtonPrimary
            onClick={() => router.push('/strains/1')}
            primary
            tw={'px-4 py-3 mx-auto mt-5'}
          >
            Check Details
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
