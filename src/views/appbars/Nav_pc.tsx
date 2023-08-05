'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem, navData } from './Navbar';

type Props = {};

const Nav_pc = (p: Props) => {
  return (
    <nav className="hidden relative lg:flex justify-center items-center py-5">
      <div className="flex-1 flex justify-center items-center">
        {navData.map((item, i) =>
          item.img ? (
            <Link key={i} href="/">
              <Image
                src="/images/logo.png"
                width={92}
                height={72}
                alt="logo"
                className="mx-14"
              />
            </Link>
          ) : (
            <NavItem key={i} href={item.link}>
              {item.name}
            </NavItem>
          )
        )}
      </div>
    </nav>
  );
};

export default Nav_pc;
