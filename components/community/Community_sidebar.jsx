import React from 'react';
import { Avatar } from '@mantine/core';
import Link from 'next/link';

const CommumitySidebar = ({ data }) => {
  if (!data) return <></>;
  return (
    <>
      <Link href={`/community/p/${data.id}`}>
        <div className="flex h-[6rem] items-center my-3 mx-3 pl-2 shadow-md rounded-[10px]">
          <div className="w-[5rem] h-[5rem] rounded-[10px] border bg-center bg-cover object-cover">
            <img
              src={data.image}
              className="bg-center bg-cover object-cover w-full h-full"
            />
          </div>
          <div className="mx-1 flex-col item-center pl-2">
            <div className="my-1 w-full">
              <div className="text-[1rem] font-light truncate">
                {data.title}
              </div>
              <div className="text-[0.625rem] font-light truncate">
                {data.description}
              </div>
            </div>
            <div className="">
              <div>
                <Avatar.Group spacing="sm">
                  <Avatar src={data.user[0]} radius="xl" />
                  <Avatar src={data.user[0]} radius="xl" />
                  {data.user.length - 2 > 0 ? (
                    <Avatar radius="xl">+ {data.user.length - 2}</Avatar>
                  ) : (
                    ''
                  )}
                </Avatar.Group>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CommumitySidebar;
