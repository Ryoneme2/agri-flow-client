import React from 'react';
import dynamic from 'next/dynamic';
const Discussblock = dynamic(
  () => import('../components/Discuss/DiscussBlock'),
  { ssr: false }
);
const Discussmain = dynamic(
  () => import('../components/Discuss/Discuss'), {
  ssr: false,
});

const Discuss = () => {
  return (
    <>
      <div className="flex-col justify-center w-full h-auto">
        <Discussmain />
        <Discussblock />
      </div>
    </>
  );
};

export default Discuss;
