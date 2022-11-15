import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Navbarlogin = dynamic(
  () => import('../../components/Navbar/Navbarlogin'),
  { ssr: false }
);
const NavbarNonlogin = dynamic(
  () => import('../../components/Navbar/NavbarNonlogin'),
  { ssr: false }
);
import Blog from '../../components/Blog/Blog';
import CommunityBlock from '../../components/community/Community_block';

const Landing = () => {
  return (
    <>
      <Navbarlogin />
      <NavbarNonlogin />
      <CommunityBlock />
      <Blog />
    </>
  );
};

export default Landing;
