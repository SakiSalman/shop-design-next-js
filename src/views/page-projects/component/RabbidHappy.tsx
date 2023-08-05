'use client';
import React, { useRef, useState } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

type Props = {};

const RabbidHappy = (props: Props) => {
  const [resume, setResume] = useState(false);

  // ref video
  const video = useRef<HTMLVideoElement | null>(null);

  const handleVideoPlay = () => {
    if (video.current?.paused) {
      video.current?.play();
      setResume(true);
    } else {
      video.current?.pause();
      setResume(false);
    }
  };

  return (
    <div className="border-b py-16">
      <div className="_container ">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:px-10 mx-auto text-center"
        >
          <h3 className="text-4xl font-font650 mb-4">Rabid Hippie</h3>
          <p className="text-sm lg:text-base font-medium text-gray65 lg:px-10">
            Rabid Hippie joined HYMAN as lead cultivation since 2018 and has
            been with us every step of the way. With his exceptional knowledge
            and experience of cultivation paired with his secret soil formula,
            he is an essential part of ensuring that our team is continuously
            successful
          </p>
          <div className="lg:px-10 pt-5 relative group">
            <video
              ref={video}
              onClick={handleVideoPlay}
              src="/video/video.mp4"
              className="rounded-md w-[1078px] h-[515px]"
              width={1078}
              height={315}
              poster="/images/video-poster.png"
            ></video>
            <div
              className={`w-20 h-20 lg:w-28 lg:h-28 bg-sc rounded-full shadow shadow-sc flex justify-center items-center text-white text-3xl lg:text-5xl absolute top-1/2 left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:opacity-100 cursor-pointer group-hover:z-50 transition-all duration-1000 group-hover:scale-100 ${
                resume && 'opacity-0 -z-50 scale-50'
              }`}
            >
              <div className="w-20 h-20 lg:w-40 lg:h-40 p-4 bg-sc bg-opacity-30 rounded-full flex justify-center items-center absolute top-1/2 left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2">
                {resume && <BsPauseFill onClick={handleVideoPlay} />}
                {!resume && <BsPlayFill onClick={handleVideoPlay} />}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RabbidHappy;
