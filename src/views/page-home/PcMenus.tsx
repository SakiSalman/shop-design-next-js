"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSuitHeart } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
// import { MotionOpacity } from "../about-page";

// type Props = {
//   cart: any[];
//   wishList: any[];
//   setCartOpen: (b: boolean) => void;
// };

const PcMenus = () => {
  return (
    <div>
      <nav className="body hidden relative lg:flex justify-center items-center py-3">
        <div className="flex-1 flex justify-end">
          <div>
            {data.slice(0, 3).map((item, i) => (
              <motion.span {...animation({ x: 100 + i * 10, delay: i * 0.1 })}>
                <NavItem key={item.id} href={item.link}>
                  {item.name}
                </NavItem>
              </motion.span>
            ))}
          </div>
        </div>
        <Link href="/">
          <motion.div
            initial={{ scale: 0, rotate: 45, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ ...getTransition(0.5) }}
          >
            <Image
              src="images/logo.svg"
              width={92}
              height={72}
              alt={"alt"}
              className="mx-20"
            />
          </motion.div>
        </Link>
        <div className="flex-1 flex justify-between">
          <div>
            {data.slice(3, 6).map((item, i) => (
              <motion.span
                {...animation({ x: -100 + -i * 10, delay: -i * 0.1 + 0.2 })}
              >
                <NavItem key={item.id} href={item.link}>
                  {item.name}
                </NavItem>
              </motion.span>
            ))}
          </div>
          {/* <MotionOpacity className="flex mr-[10%] text-gray-700 gap-x-3">
            <IconBtn i={[]} path="/account" icon={<RxPerson size={22} />} />
            <IconBtn
              i={p.wishList}
              path="/wishlist"
              icon={<BsSuitHeart size={22} />}
            />
            <IconBtn
              i={p.cart}
              path="#"
              onClick={() => p.setCartOpen(true)}
              icon={<HiOutlineShoppingBag size={25} />}
            />
          </MotionOpacity> */}
        </div>
      </nav>
    </div>
  );
};

export default PcMenus;

const animation = (p: any) => ({
  className: "inline-block",
  initial: { scale: 0.3, translateX: p.x, opacity: 0 },
  whileInView: { scale: 1, translateX: 0, opacity: 1 },
  transition: getTransition(p.delay),
  whileHover: { scale: 1.1, transition: { duration: 0.2 } },
});

const getTransition = (delay: number) => ({
  duration: 0.5,
  delay,
  type: "spring",
  bounce: 0.5,
  stiffness: 50,
  damping: 8,
});

export const NavItem = ({ href, children }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathname === href ? "md:border-b-4 md:border-pc" : ""
      } md:uppercase px-2 mx-1 text-lg md:text-base font-medium transition-all duration-200 pb-2 text-[#333333]`}
    >
      {children}
    </Link>
  );
};

export const data = [
  {
    id: 1,
    name: "STRAIN",
    link: "/",
  },
  {
    id: 2,
    name: "RETAILERS",
    link: "/about",
  },
  {
    id: 3,
    name: "PROJECTS",
    link: "/shop",
  },
  {
    id: 4,
    name: "ABOUT US",
    link: "/collection",
  },
  {
    id: 5,
    name: "BLOGS",
    link: "/blog",
  },
  {
    id: 6,
    name: "Contact Us",
    link: "/contact",
  },
];
