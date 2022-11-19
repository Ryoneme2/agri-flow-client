import { Avatar } from '@mantine/core';
import ShowUserNum from '../staticUser/ShowUserNum';
import TagGroup from './TagGroup';

const SidebarNonLogin = ({ tagFetch }) => {
  return (
    <>
      <div className="grid grid-cols-2 mb-3">
        <ShowUserNum amount={'250000'} name={'บล็อก'} />
        <ShowUserNum amount={'250000'} name={'บัญชีผู้ใช้'} />
        <div className="flex justify-center col-span-2 mb-3">
          <Avatar.Group spacing="sm">
            <Avatar src="/images/profile/jammy.jpg" radius="xl" />
            <Avatar src="/images/profile/jammy.jpg" radius="xl" />
            <Avatar src="/images/profile/jammy.jpg" radius="xl" />
            <Avatar src="/images/profile/jammy.jpg" radius="xl" />
            <Avatar radius="xl">+5</Avatar>
          </Avatar.Group>
        </div>
        <hr className="col-span-2 w-11/12 h-[2px] bg-[#000000] border-0 m-1" />
      </div>
      <div className="contents mx-4 mb-5 w-full">
        <h1 className="text-xl overflow-hidden text-[#1C658C]">หมวดหมู่</h1>
        <div className="flex flex-wrap">
          <TagGroup tagFetch={tagFetch} />
        </div>
      </div>
    </>
  );
};

export default SidebarNonLogin;
