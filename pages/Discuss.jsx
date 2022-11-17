import React from 'react';
import dynamic from 'next/dynamic';
const Discussblock = dynamic(() => import('../components/Discuss/Disscuss'), {
  ssr: false,
});

const Discuss = () => {
  return (
    <>
      {/* <Navbar />
            <NavbarNonlogin /> */}
      <Discussblock />
    </>
  );
};

export default Discuss;
