import React from 'react';

const SubHomeLayout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-12 w-full sm:w-[90%] mx-auto mt-5 pr-8 pl-4">
        {children}
      </div>
    </>
  );
};

export default SubHomeLayout;
