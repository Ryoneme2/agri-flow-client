import React from 'react';
import { Avatar } from '@mantine/core';

const CommumitySidebar = ({ data, onClick }) => {
  return (
    <>
      <div
        className="flex h-[12rem] items-center my-3 mx-3 p-3 shadow-md rounded-[10px]"
        onClick={onClick}
      >
        <div className="h-auto px-1 w-[10rem] ">
          <img
            src={data.image}
            className="bg-cover bg-center border border-gray-400 h-full w-full object-cover"
            alt="thumbnail image"
          />
        </div>
        <div className="mx-2 flex-col item-center h-full py-2 grid content-between">
          <div className="my-1 w-full">
            <div className="text-[1.5rem] font-light truncate">
              {data.title}
            </div>
            <div className="text-[0.8rem] font-light truncate">
              {data.description}
            </div>
          </div>
          <div className="">
            <div>
              <Avatar.Group spacing="sm">
                <Avatar src="image.png" radius="xl" />
                <Avatar src="image.png" radius="xl" />
                <Avatar radius="xl">+5</Avatar>
              </Avatar.Group>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommumitySidebar;
