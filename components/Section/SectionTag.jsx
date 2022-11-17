import React from 'react';

const SectionTag = ({ text , tag}) => {
  return (
    <div className="w-full h-[2.5rem] flex justify-start content-center items-center overflow-hidden">
      <div className="px-3 w-auto text-[1.5rem] absolute bg-white text-[#1C658C]">
        {text} <span>  </span> {tag}
      </div>
      <div className="h-[0.2rem] bg-[#1C658C] w-full" />
    </div>
  );
};

export default SectionTag;