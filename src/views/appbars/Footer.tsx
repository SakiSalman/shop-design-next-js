'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BsTelephoneInbound } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';
import { usePathname } from 'next/navigation';

type Props = {};

const Footer = (props: Props) => {
  const pn = usePathname()
  if (pn === "/retailers") {
    return <div></div>
  }

  return (
    <div className=" ">
      <FooterCard />
      <div className=" bg-[#333]">
        <footer className="mt-6 md:mt-0 md:pb-16 pb-8 pt-8 md:pt-2 _container">
          <div className="">
            <div className="md:pt-16 pt-5 grid md:grid-cols-12 grid-cols-1 gap-y-5 md:gap-y-0">
              <div className=" flex flex-col gap-5 items-center col-span-3 ">
                <Image
                  src="/images/Footerlogo.svg"
                  width={150}
                  height={117}
                  className="object-contain"
                  alt="logo"
                />

                <div className="flex gap-5 text-white md:mt-3 ">
                  <Link href="/">
                    <FaFacebookF size={24} className="cursor-pointe" />
                  </Link>
                  <Link href="/">
                    <AiOutlineInstagram size={24} className="cursor-pointer" />
                  </Link>
                  <Link href="/">
                    <AiFillYoutube size={24} className="cursor-pointer" />
                  </Link>
                  <Link href="/">
                    <AiOutlineTwitter size={24} className="cursor-pointer" />
                  </Link>
                  <Link href="/">
                    <FaPinterestP size={24} className="cursor-pointer" />
                  </Link>
                </div>
              </div>

              {/* {/* For Desktop */}
              <div className="flex-1 w-full justify-between flex-wrap col-span-9 items-center flex-row hidden md:flex pt-5">
                {footerLinks.slice(0, 1).map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 text-base min-w-[170px] md:h-[200px] flex-wrap md:gap-x-10 _quick-link"
                  >
                    <h3 className="font-[500] text-xl text-white">
                      {item.title}
                    </h3>
                    {item.links.map((item: any) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className={`text-white font-medium text-base h-[1.8rem] ${
                          item.icon ? 'flex gap-2 items-center' : ''
                        }`}
                      >
                        {item?.icon}
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
                <Image
                  src={'/images/image 335.svg'}
                  width={107}
                  height={103}
                  alt="logo"
                  className=" md:ml-10 md:-mt-[5rem]"
                />

                {footerLinks.slice(2, 4).map((item, i) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 text-base min-w-[170px] md:h-[200px] flex-wrap md:gap-x-10"
                  >
                    <h3 className=" font-[500] text-xl text-white">
                      {item.title}
                    </h3>
                    {item.links.map((item: any) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className={`text-white font-medium text-base ${
                          item.icon ? 'flex gap-2 items-center' : ''
                        }`}
                      >
                        {item?.icon}
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              {/* For Mobile */}
              <div className="grid justify-items-center mb-5 md:hidden">
                <div className=" flex justify-between text-left">
                  {footerLinks.slice(0, 1).map((item, i) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-2 text-base min-w-[170px]  "
                    >
                      <h3 className=" font-[500] text-xl text-white">
                        {item.title}
                      </h3>
                      {item.links.map((item: any) => (
                        <Link
                          key={item.title}
                          href={item.url}
                          className={`text-white font-medium text-base ${
                            item.icon ? 'flex gap-2 items-center' : ''
                          }`}
                        >
                          {item?.icon}
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}

                  {footerLinks.slice(2, 3).map((item, i) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-2 text-base min-w-[170px] "
                    >
                      <h3 className=" font-[500] text-xl text-white">
                        {item.title}
                      </h3>
                      {item.links.map((item: any) => (
                        <Link
                          key={item.title}
                          href={item.url}
                          className={`text-white font-medium text-base ${
                            item.icon ? 'flex gap-2 items-center' : ''
                          }`}
                        >
                          {item?.icon}
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="me-auto flex items-center gap-x-5 py-5 ml-4 md:ml-12">
                  <IoMdCall size={40} className=" text-[#F5A800]" />
                  <div>
                    <p className="text-lg font-normal text-white leading-[21.58px] mb-1">
                      1-800-724-6800
                    </p>
                    <p className="text-sm font-normal text-white">Call Now</p>
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                  <Image
                    src={'/images/image 335.svg'}
                    width={157}
                    height={152}
                    alt="logo"
                    className=" object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Last Footer */}
          </div>
          <div className=" flex justify-center items-center flex-col gap-y-3 ">
            <p className="text-xs text-[#FFFFFF] font-medium text-center md:text-left">
              <Link href="/terms-and-services" className="underline">
                Terms & Conditions
              </Link>{' '}
              I{' '}
              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>{' '}
              I ©2023 HYMAN, Inc. All Rights Reserved
            </p>
            <p className="text-xs text-[#FFFFFF] font-medium text-center md:text-left">
              For use by registered qualifying patients or adults, 21 and over
              only. Keep out of reach of children. It is illegal to drive a
              motor vehicle while under the influence of marihuana.
            </p>
            <p className=" text-sm font-normal text-center text-white">
              © 2023 Neutrix.co. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

export const footerLinks = [
  {
    title: 'Quick Link',
    links: [
      { title: 'Stains ', url: '/strains' },
      { title: 'Projects', url: '/projects' },
      { title: ' About', url: '/about' },
      { title: ' Blogs', url: '/blog' },
      { title: 'Retailers ', url: '/retailers' },
      { title: 'Find a Store', url: '/' },
    ],
  },
  {
    title: '',
    links: [
      { title: ' Retailers', url: '/retailers' },

      { title: 'Find a Store', url: '/retailers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', url: '/about' },

      { title: 'Career', url: '/career' },
      { title: 'Contact Us', url: '/contact' },
    ],
  },
  {
    title: 'Exclusive Services',
    links: [
      { title: 'Call Us: +1 666 8888', url: '/', icon: <BsTelephoneInbound /> },
    ],
  },
];

const FooterCard = () => {
  return (
    <div className=" _container">
      <div className=" md:w-[100%] md:h-[309px] w-[341px] h-[259px] mx-auto bg-white rounded-md flex items-center justify-center shadow-2xl flex-col md:translate-y-[3rem] p-8 mb-8 md:mb-0">
        <h2 className=" md:text-[36px] font-[650] md:leading-[43.2px] text-[#333] text-[25px] leading-[30px]">
          Never miss a drop !
        </h2>
        <p className=" md:text-base font-medium text-[#333] mt-3 text-sm text-center md:text-left">
          Subscribe to our ultra-exclusive drop list and be the first to know
          about upcoming drops.
        </p>
        <div className=" flex items-center md:mt-8 mt-4">
          <div className="flex items-center border rounded-md px-2 py-3 rounded-r-none ">
            <HiOutlineMail className="text-[#C5C5C5] mr-2" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:outline-none md:w-[450px] w-[180px]"
            />
          </div>
          <button className="px-4 py-3 bg-[#F5A800] text-[#333333] rounded-r-md -ml-1">
            Subscribe
          </button>
        </div>

        <p className=" text-xs font-medium text-[#333] mt-3 text-center md:text-left">
          *Receive early discount offers, updates and new products info.
        </p>
      </div>
    </div>
  );
};
