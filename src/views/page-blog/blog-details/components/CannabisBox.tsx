import React from "react";
import CraveCannabis from "./CraveCannabis";
import { BsEnvelope } from "react-icons/bs";

type Props = {};

const CannabisBox = (props: Props) => {
  return (
    <>
      {/* Desktop view  */}
      <div className="border p-5 rounded-md hidden lg:block">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 lg:gap-y-4 mb-10">
          {[...Array(10)].map((_, i) => (
            <CraveCannabis key={i} />
          ))}
        </div>

        <div>
          <hr />
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 py-4 relative">
        <MailBox />
        </div>
      </div>
      {/* Desktop view  end */}

      {/* mobile view  start */}
      <div className="rounded-md lg:hidden">
        <div className=" border grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-3 lg:gap-y-4 mb-4 py-6 pb-12 p-4 relative rounded-md">
          {[...Array(10)].map((_, i) => (
            <CraveCannabis key={i} />
          ))}
          <button className="flex justify-center items-center bg-pc py-3 px-4 rounded-md gap-2 absolute right-1/2 -bottom-6 translate-x-1/2 ">
            <span>See More</span>{" "}
            <span className="tetx-4xl">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9.5" cy="9.5" r="9.5" fill="white" />
                <path
                  d="M5.00001 7.50232C4.99963 7.56804 5.01224 7.6332 5.03711 7.69405C5.06199 7.7549 5.09865 7.81024 5.14498 7.85691L9.14406 11.8523C9.19053 11.8991 9.24582 11.9362 9.30674 11.9616C9.36765 11.9869 9.43299 12 9.49898 12C9.56497 12 9.63031 11.9869 9.69123 11.9616C9.75214 11.9362 9.80743 11.8991 9.8539 11.8523L13.853 7.85691C13.9471 7.76286 14 7.63531 14 7.50232C14 7.36932 13.9471 7.24177 13.853 7.14773C13.7589 7.05369 13.6312 7.00085 13.4981 7.00085C13.3649 7.00085 13.2373 7.05369 13.1431 7.14773L9.49898 10.7935L5.85481 7.14773C5.80834 7.10092 5.75305 7.06376 5.69214 7.03841C5.63122 7.01305 5.56589 7 5.49989 7C5.4339 7 5.36857 7.01305 5.30765 7.03841C5.24673 7.06376 5.19145 7.10092 5.14498 7.14773C5.09865 7.19439 5.06199 7.24974 5.03711 7.31059C5.01224 7.37143 4.99963 7.43659 5.00001 7.50232Z"
                  fill="black"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-3 mt-16">
          <MailBox />
        </div>
      </div>
      {/* mobile view  end */}
    </>
  );
};

export default CannabisBox;

const MailBox = () => (
  <div className='pu-2 lg:py-5'>
    <h3 className='text-sm lg:text-3xl font-medium inline-block border-b'>Media Contact: Ryli</h3>
    <div className='flex items-center gap-2 text-sm lg:text-base text-gray65 mt-2'>
      <BsEnvelope /> <span>nbogan@hotmail.com</span>
    </div>
  </div>
)