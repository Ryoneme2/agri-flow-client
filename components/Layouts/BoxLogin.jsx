import React from 'react';

const BoxLogin = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-[#b6dcfe] to-[#1c658c] h-screen flex justify-center items-center">
      <div className="container p-6 grid grid-cols-12 bg-[#F7FBFC] border-transparent rounded-xl justify-center items-center lg:m-[10rem] m-[2rem]">
        <div className="col-span-12 md:col-span-6 lg:block">
          <div className="bg-[#F7FBFC] rounded-full flex justify-center items-center mx-auto h-[8rem] w-[8rem] mt-[-4rem] sm:h-[10rem] sm:w-[10rem] sm:mt-[-5rem] md:h-full md:w-full md:mt-0">
            <img src="/images/png/1 2.png" alt="big-agri-flow-logo" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-center items-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BoxLogin;
