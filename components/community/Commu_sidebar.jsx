import { Image } from '@mantine/core';

import ShowUserNum from '../staticUser/ShowUserNum';
import Profiles from '../staticUser/Profiles';
import Profile from '../staticUser/Profile';
import { Avatar } from '@mantine/core';

const CommunitySidebar = ({ name }) => {
  return (
    <>
      <div>
        <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
          <Image
            radius="md"
            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Page commu"
          />
        </div>
        <div className="w-full flex justify-center text-[1.5rem] absolute bg-white text-[#1C658C]">
          <div>{name}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-6">
        <ShowUserNum amount={'250000'} name={'บล็อก'} />
        <ShowUserNum amount={'250000'} name={'สมาชิก'} />
        <Profiles
          profile={
            <>
              
              <Profile imgProfile={'/images/profile/jammy.jpg'} />
            </>
          }
          css={'my-5 col-span-2'}
        />
        <hr className="col-span-2 w-11/12 h-[2px] bg-[#000000] border-0 mx-auto" />
      </div>
    </>
  );
};

export default CommunitySidebar;
