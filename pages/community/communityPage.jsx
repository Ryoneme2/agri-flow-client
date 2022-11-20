import React from 'react';

import Narbarlogin from '../../components/Navbar/Navbarlogin';
import CommuSidebar from '../../components/Sidebar/Commu_sidebar';
import { Tabs } from '@mantine/core';
import Blog from '../../components/Blog/Blog';
import CommunityQuestion from '../../components/community/Community_question';
import CommunityBlog from '../../components/community/Commuity_Blog';

const Commu = () => {
  const member = true;
  return (
    <>
      <Narbarlogin />
      <div className="w-[90%] mx-auto pt-4">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div>
              <Tabs defaultValue="content">
                <Tabs.List className="pb-[2px]">
                  <Tabs.Tab value="content">บทความภายในกลุ่ม</Tabs.Tab>
                  {member && (
                    <Tabs.Tab value="question">คำถามภายในกลุ่ม</Tabs.Tab>
                  )}
                </Tabs.List>

                <Tabs.Panel value="content" pt="xs">
                  <CommunityBlog />
                </Tabs.Panel>

                <Tabs.Panel value="question" pt="xs">
                  <CommunityQuestion />
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
          <div className="hidden md:flex">
            <CommuSidebar name={'คนภาคเหนือ'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Commu;
