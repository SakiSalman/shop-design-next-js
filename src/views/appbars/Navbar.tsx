"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "./StickyNav";
import Nav_pc from "./Nav_pc";
import Nav_pn from "./Nav_pn";

type Props = {};

const Navbar = (props: Props) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pn = usePathname();
  let page =
    pn.replace("/", "").charAt(0).toUpperCase() +
    pn.replace("/", "").slice(1);
  pn.startsWith("/blog/") && (page = "Blog Details");
  pn.startsWith("/projects/") && (page = "Project Details");
  pn.startsWith("/strains/") && (page = "Strains Details");

  if (pn === "/" && scrollY < 100) {
    return (
      <>
        <Nav>
          <div className={`bg-transparent fixed w-full text-sc`}>
            <div className="flex justify-center items-center">
              <Nav_pc />
            </div>
            <Nav_pn />
          </div>
        </Nav>
        {pn !== "/" && (
          <PageTitle title={page} sub_title={`Home / ${page}`} />
        )}
      </>
    );
  } else {
    return (
      <>
        <Nav>
          <div className={`bg-white text-sc `}>
            <Nav_pc />
            <Nav_pn />
          </div>
        </Nav>
        {pn !== "/" && pn !== "/retailers" && (
          <PageTitle title={page} sub_title={`Home / ${page}`} />
        )}
      </>
    );
  }
};

export default Navbar;

export const NavItem = ({ href, children }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname === href ? "md:border-b-2 md:border-pc" : ""
        } lg:px-4 lg:my-0 lg:py-1 transition-all duration-200 text-base`}
    >
      {children}
    </Link>
  );
};

export const navData = [
  {
    id: 1,
    name: "STRAIN",
    link: "/strains",
  },
  {
    id: 2,
    name: "RETAILERS",
    link: "/retailers",
  },
  {
    id: 3,
    name: "PROJECTS",
    link: "/projects",
  },
  {
    id: 4,
    img: "/images/logo.svg",
  },
  {
    id: 5,
    name: "ABOUT US",
    link: "/about",
  },
  {
    id: 6,
    name: "BLOGS",
    link: "/blog",
  },
  {
    id: 7,
    name: "CONTACT US",
    link: "/contact",
  },
];

export const PageTitle = (p: { title: string; sub_title: string }) => (
  <div className="flex justify-center items-center flex-col bg-[#333333] text-white py-3 md:py-4">
    <h1 className=" text-2xl md:text-3xl">{p.title}</h1>
    <Link href={"/"} className="text-sm md:text-base">
      {p.sub_title}
    </Link>
  </div>
);
