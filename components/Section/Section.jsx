import React from 'react';

const Section = ({ context }) => {
  return (
    <div className="w-full h-[2.5rem] flex justify-start content-center items-center overflow-hidden">
      <div className="px-3 w-auto text-[1.5rem] absolute bg-white text-[#1C658C]">
        {context}
      </div>
      <div className="h-[0.2rem] bg-[#1C658C] w-full" />
    </div>
  );
};

export default Section;
