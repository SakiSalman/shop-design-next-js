'use client';
import React from 'react';
import ButtonPrimary from '../butttons/ButtonPrimary';
import Icon from '../logoicon/logoIcon';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {
  notLearnMore?: boolean;
  shadow?: boolean;
  tw?: string;
};

const SeriesCard = (props: Props) => {
  const router = useRouter();

  return (
    <div className="px-2 py-5 md:p-4 border border-gray-200 rounded-md flex gap-2 justify-between items-center _card-hover group cursor-pointer">
      <div className="flex items-center gap-2 ">
        {/* <Icon width="w-12" height="h-12" iw="35" ih="35" /> */}
        <Image
          src="/images/series-icon.svg"
          width={44}
          height={44}
          className="w-auto h-auto object-cover"
          alt="slider"
        />
        <div className="">
          <h3 className="text-base font-medium text-sc group-hover:text-white transition duration-500">
            Series I
          </h3>
          <p className="text-sc text-xs font-medium mb-3 group-hover:text-white transition duration-500">
            Product <span>(10)</span>
          </p>
        </div>
      </div>
      {!props.notLearnMore && (
        <ButtonPrimary
          onClick={() => router.push('/strains')}
          tw="px-4 py-3 md:py-2 md:px-2 text-base text-sm"
        >
          Learn More
        </ButtonPrimary>
      )}
    </div>
  );
};

export default SeriesCard;
