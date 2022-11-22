import React, { useState, useEffect } from 'react';
import { Image } from '@mantine/core';

import ShowUserNum from '../staticUser/ShowUserNum';
import { Avatar } from '@mantine/core';
import Button from '../Button';
import UpgateAccount from './UpgateAccount';
import axios from 'axios';
import LoadingBlog from '../Blog/LoadingBlog';

const CommunitySidebar = ({ name, id }) => {
  const [groupMember, setGroupMember] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [commu, setCommu] = useState({});
  const [loading, setLoading] = useState(false);

  const joinGroup = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const post = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/communities/join`,
        { communityId: id },
        {
          headers: { Authorization: token },
        }
      );

      if (post.status !== 201) throw new Error('internal error');
      console.log('join success');
    } catch (e) {
      console.error(e);
      console.log('join failed!');
      return;
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem('access_token') || '');
    setUsername(JSON.parse(localStorage.getItem('user')).username || '');
    if (!id) return;
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/communities/${id}`
        );

        console.log('response', res.data.data.data);
        setCommu(res.data.data.data);

        const checkUser = res.data.data.data?.users?.find(
          (user) => user.username == username
        );
        checkUser ? setGroupMember(true) : setGroupMember(false);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  if (loading)
    return (
      <div className="w-full p-3">
        <LoadingBlog />
      </div>
    );

  return (
    <>
      <div className="flex-col py-4 mx-3">
        <div>
          <div style={{ width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image radius="md" src={commu.communityImage} alt="Page commu" />
          </div>
          <div className="w-full flex justify-center text-[1.5rem] bg-white text-[#1C658C]">
            <div>{commu.name}</div>
          </div>
        </div>

        {!groupMember ? (
          <div>
            <div className="grid grid-cols-2">
              <ShowUserNum amount={commu?.users?.length || 0} name={'บล็อก'} />
              <ShowUserNum
                amount={commu?.BlogsOnCommunity?.length || 0}
                name={'สมาชิก'}
              />
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
              <Button
                context={'เข้าร่วม'}
                css={'w-3/4 justify-center'}
                onClick={() => {
                  setGroupMember(true);
                  joinGroup();
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2">
              <ShowUserNum amount={commu?.users?.length || 0} name={'สมาชิก'} />
              <ShowUserNum
                amount={commu?.BlogsOnCommunity?.length || 0}
                name={'บล็อก'}
              />
              {/* <ShowUserNum amount={'68'} name={'คำถาม'} /> */}
              <hr className="col-span-3 w-11/12 h-[2px] bg-[#000000] border-0 mx-auto" />
            </div>
            <div className="flex justify-center">
              <Button
                context={'ออก'}
                css={'w-3/4 justify-center'}
                color={'reverse'}
                onClick={() => {
                  confirm('คุณต้องการออกจากกลุ่ม') && setGroupMember(false);
                }}
              />
            </div>
          </div>
        )}

        <div className="my-3">
          <UpgateAccount />
        </div>
        <div className="border rounded-md p-2">
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
