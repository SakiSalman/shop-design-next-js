import React from 'react';
import Image from 'next/image';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import Drower from '@/components/Drower/Drower';
import { NavItem, navData } from './Navbar';
import Link from 'next/link';

type Props = {};

const Nav_pn = (p: Props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="lg:hidden flex items-center py-2 px-3 z-50">
      <RiBarChartHorizontalLine
        className="cursor-pointer"
        size={25}
        onClick={() => setNavbarOpen(true)}
      />
      <Link href="/" className="mx-auto">
        <Image src="/images/logo.png" width={75} height={80} alt={'alt'} />
      </Link>

      <Drower
        open={navbarOpen}
        handleClose={() => setNavbarOpen(false)}
        ancor="left"
      >
        <div className="flex flex-col justify-center text-center text-sc">
          {navData.map((item, i) =>
            item.img ? (
              ''
            ) : (
              <span key={i} className="my-3">
                <NavItem href={item.link}>{item.name}</NavItem>
              </span>
            )
          )}
        </div>
      </Drower>
    </nav>
  );
};

export default Nav_pn;
