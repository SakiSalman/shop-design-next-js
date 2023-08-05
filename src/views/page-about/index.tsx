"use client";
import Accordion from "@/components/Accordion/Accordion";
import ButtonPrimary from "@/components/butttons/ButtonPrimary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Motion1 } from "@/utils/framer-motion";

type Props = {};

const AboutUi = (props: Props) => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="_container">
        {AboutData.map((about, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="py-8"
          >
            <Image
              src={`/images/about/card-${i + 1}.png`}
              width={1296}
              height={500}
              className="h-[325px] sm:h-auto object-cover transition-opacity blur-sm"
              onLoadingComplete={image => image.classList.remove("blur-sm")}
              alt="slider"
              // placeholder="blur"
              // blurDataURL={`/images/about/card-${i + 1}.png`}
            />
            <h2 className="text-xl md:text-4xl text-sc font-font650 my-5">
              {about.title}
            </h2>
            <p className="font-medium text-gray65 text-justify">{about.desc}</p>
            {about.isButton && (
              <ButtonPrimary
                onClick={() => router.push("/strains")}
                primary
                tw="text-sc rounded-[2px] mt-6"
              >
                See Strains
              </ButtonPrimary>
            )}
          </motion.div>
        ))}
        <Motion1 delay={0.3}>
          <div className="text-center">
            <h2 className="text-xl md:text-4xl text-sc font-font650 pt-8 pb-5">
              Be The Highest Person In The Room
            </h2>
            <p className="md:px-6 text-gray65 text-xs md:text-base text-justify md:text-center font-medium mb-12">
              At HYMAN, we imperiously curate, hand-craft, and exclusively
              produce extraordinary smoke, destined to inspire. Our lineup of
              luxury products are fit to suit any connoisseur, ready to be the
              highest person in the room. If you support HYMAN, you don’t settle
              for anything but the best.
            </p>
            <Image
              src={`/images/about/girls.png`}
              width={1296}
              height={500}
              alt="slider"
              className="w-auto h-[325px] md:h-auto object-cover rounded-lg mx-auto transition-opacity blur-sm"
              onLoadingComplete={image => image.classList.remove("blur-sm")}
            />
            <p className="my-8 md:px-6 text-gray65 text-xs md:text-base text-justify md:text-center">
              At HYMAN, we imperiously curate, hand-craft, and exclusively
              produce extraordinary smoke, destined to inspire. Our lineup of
              luxury products are fit to suit any connoisseur, ready to be the
              highest person in the room. If you support HYMAN, you don’t settle
              for anything but the best.
            </p>
          </div>
        </Motion1>
        {/* Accordion Start */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full md:w-3/4 mx-auto"
        >
          <h2 className="text-2xl md:text-4xl text-sc font-font650 mt-8 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-[#A0A0A0] font-medium mb-12">
            Summary of the most frequently asked questions
          </p>
          {AccordionData.map((accordion, i) => (
            <Accordion key={i} title={accordion.title}>
              <p className="text-justify md:text-left text-sm md:text-base p-4">
                {accordion.content}
              </p>
            </Accordion>
          ))}
        </motion.div>
        {/* Accordion End */}
      </div>
    </Fragment>
  );
};

export default AboutUi;

const AboutData = [
  {
    title: "A LUXURY LIFESTYLE BRAND",
    desc: "At HYMAN, we value creativity and innovation throughout our entire cultivation process. We are able to ensure HYMAN products are the highest quality by focusing on every aspect of operations. Our dedicated team of experts continuously strive to create extraordinary smoke, destined to inspire. Through collectable packaging, luxury products and an unmatchable user experience you can count on our brand to be as unique as you. At HYMAN, we believe in creating products you need at the higher standard you want",
  },
  {
    title: "CULTIVATING THE HIGHEST QUALITY CANNABIS",
    desc: "Our team strategically works with licensed retailers throughout the state of Michigan to distribute and educate their community on our limited HYMAN flower.  Patient appreciation days allow us to stay connected, educate and give back to the community who is our top priority. These relationships are an integral part in our efforts towards breaking the stigma of cannabis leading to a powerful and positive change.",
    isButton: true,
  },
  {
    title: "CULTIVATING THE HIGHEST QUALITY CANNABIS",
    desc: "Our team strategically works with licensed retailers throughout the state of Michigan to distribute and educate their community on our limited HYMAN flower. Patient appreciation days allow us to stay connected, educate and give back to the community who is our top priority. These relationships are an integral part in our efforts towards breaking the stigma of cannabis leading to a powerful and positive change.",
    isButton: true,
  },
];
const AccordionData = [
  {
    title: "WHAT DOES HYMAN MEAN?",
    content:
      " All of our products are locally sourced and grown in Michigan. Our cultivation team consists of over 50 industry professionals led by our Head Cultivator, Rabid Hippie. The team at HYMAN Farms dedicates time daily to properly tend to our 30,000 sq. ft. of Canopy space. Our team continues to source the latest and greatest genetics through rigorous phenohunts and by connecting with industry leaders",
  },
  {
    title: "WHERE IS HYMAN FLOWER GROWN?",
    content:
      " All of our products are locally sourced and grown in Michigan. Our cultivation team consists of over 50 industry professionals led by our Head Cultivator, Rabid Hippie. The team at HYMAN Farms dedicates time daily to properly tend to our 30,000 sq. ft. of Canopy space. Our team continues to source the latest and greatest genetics through rigorous phenohunts and by connecting with industry leaders",
  },
];
