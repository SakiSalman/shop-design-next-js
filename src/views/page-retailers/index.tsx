'use client';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Slider from 'react-slick';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useRouter } from 'next/navigation';




let containerHeight = ''
if (typeof window !== 'undefined') {
  containerHeight = window.innerWidth > 650 ? 'calc(100vh - 250px)' : '100%'
} 
const containerStyle = {
  width: '100%',
  height: containerHeight,
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const RetailerUi = () => {
  const router = useRouter()
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:
      'AIzaSyDCXiBEohsiIq47at86HyjVLIBnc1qTxrA' || 'Map not ready',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative lg:p-5">
      <div className="md:col-span-2 h-screen md:h-auto">
        <div className='text-sc flex items-center font-medium '>
          <button onClick={() => router.back()} className='flex items-center font-medium cursor-pointer'>
          <span className='text-2xl' ><BsArrowLeftShort/></span> <span className='text-base'>Find a Store</span>
          </button>
        </div>
        <div className="flex items-center  bg-[#FAFAFA] rounded-full my-3">
          <BiSearch size={20} className="text-[#C5C5C5] ms-4" />
          <input
            type="text"
            placeholder="Enter your location"
            className="bg-transparent outline-none p-3"
          />
        </div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
            
         {/* mobile view  cards*/}
      <div className=" lg:hidden w-full overflow-y-scroll rtl absolute bottom-[200px]">
        <Slider {...settings}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="border flex justify-center items-start gap-3 p-6 mb-3 rounded-md bg-transparent hover:bg-pc bg-white"
            >
              <div>
                <p className="text-xl font-medium line-clamp-1 mb-3">
                  Bacco Farms
                </p>
                <p className="text-base font-medium line-clamp-2">
                  1301 S Main St, Adrian, Michigan 49221, U.S. Michigan 49221,
                  U.S. Michigan 49221, U.S.
                </p>
              </div>
              <p className="text-xs text-medium whitespace-nowrap">
                2.19 miles
              </p>
            </div>
          ))}
        </Slider>
      </div>
         {/* mobile view cards end */}
      </div>

      <div className="hidden lg:block w-full overflow-y-scroll mt-16 rtl" style={{
        height: containerStyle.height
      }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="border flex justify-center items-start gap-3 p-6 mb-3 rounded-md bg-transparent hover:bg-pc bg-white cursor-pointer ltr"
          >
            <div>
              <p className="text-xl font-medium line-clamp-1 mb-3 text-[#000000]">
                Bacco Farms
              </p>
              <p className="text-base font-medium line-clamp-2 text-[#000000">
                1301 S Main St, Adrian, Michigan 49221, U.S. Michigan 49221,
                U.S. Michigan 49221, U.S.
              </p>
            </div>
            <p className="text-xs text-medium whitespace-nowrap text-[#000000">2.19 miles</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RetailerUi;

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1.2,
        initialSlide: 1.2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1.2,
      },
    },
  ],
};
