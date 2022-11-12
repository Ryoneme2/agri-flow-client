import React from 'react';

const BoxLogin = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-[#b6dcfe] to-[#1c658c] h-screen flex justify-center items-center">
      <div className="container p-6 grid grid-cols-12 bg-white border-transparent rounded-xl justify-center items-center h-max-[20rem] w-max-[40rem] mx-4">
        <div className="col-span-0 hidden lg:col-span-7 lg:block">
          <div className="flex justify-center items-center h-full w-full ">
            <img src="/images/png/1 2.png" alt="big-agri-flow-logo" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="flex justify-center items-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BoxLogin;
