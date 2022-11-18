import { Grid, Image } from '@mantine/core';

import ShowUserNum from '../staticUser/ShowUserNum';
import { Avatar } from '@mantine/core';
import Button from '../Button';
import UpgateAccount from './UpgateAccount';

const CommunitySidebar = ({ name }) => {
  const member = false;

  return (
    <>
      <div className="flex-col py-4">
        <div>
          <div style={{ width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              alt="Page commu"
            />
          </div>
          <div className="w-full flex justify-center text-[1.5rem] bg-white text-[#1C658C]">
            <div>{name}</div>
          </div>
        </div>

        {!member ? (
          <div>
            <div className="grid grid-cols-2">
              <ShowUserNum amount={'250000'} name={'บล็อก'} />
              <ShowUserNum amount={'250000'} name={'สมาชิก'} />
              <div className="flex justify-center col-span-2">
                <Avatar.Group spacing="sm">
                  <Avatar src="/images/profile/jammy.jpg" radius="xl" />
                  <Avatar src="/images/profile/jammy.jpg" radius="xl" />
                  <Avatar src="/images/profile/jammy.jpg" radius="xl" />
                  <Avatar src="/images/profile/jammy.jpg" radius="xl" />
                  <Avatar radius="xl">+5</Avatar>
                </Avatar.Group>
              </div>
              <hr className="col-span-2 w-11/12 h-[2px] bg-[#000000] border-0 mx-auto my-4 mt-6" />
            </div>
            <div className="flex justify-center">
              <Button context={'เข้าร่วม'} css={'w-3/4 justify-center'} />
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-3">
              <ShowUserNum amount={'5000'} name={'สมาชิก'} />
              <ShowUserNum amount={'245'} name={'บล็อก'} />
              <ShowUserNum amount={'68'} name={'คำถาม'} />
              <hr className="col-span-3 w-11/12 h-[2px] bg-[#000000] border-0 mx-auto" />
            </div>
          </div>
        )}

        <div className="my-3">
          <UpgateAccount />
        </div>
        <div className="border rounded-md m-2 p-2">
          <h3 className="text-[#1C658C]">วัตถุประสงค์ในการตั้งกลุ่ม</h3>
          <ol>
            <li>1.ทำให้รักพ่อ</li>
            <li>2.ทำให้รักแม่</li>
            <li>3.ทำให้รักพี่</li>
            <li>4.ให้รักน้อง</li>
            <li>5.ไม่ขายของภายในกลุ่ม</li>
            <li>6.พัฒนาประสิทธิภาพของเกษตรกรภายใน ต.โชคชัยรถแห่ อ.ทัยลักไทย</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default CommunitySidebar;