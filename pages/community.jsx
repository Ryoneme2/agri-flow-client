import React from 'react';

import Narbarlogin from '../components/Navbar/Navbarlogin';
import CommuSidebar from '../components/Sidebar/Commu_sidebar';
import { Tabs } from '@mantine/core';
import Blog from '../components/Blog/Blog';

const Commu = () => {
  const member = true;
  return (
    <>
      <div className="w-[90%] mx-auto pt-4">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div>
              <Tabs defaultValue="content">
                <Tabs.List>
                  <Tabs.Tab value="content">บทความภายในกลุ่ม</Tabs.Tab>
                  {member && (
                    <Tabs.Tab value="question">คำถามภายในกลุ่ม</Tabs.Tab>
                  )}
                </Tabs.List>

                <Tabs.Panel value="content" pt="xs">
                  บทความภายในกลุ่ม tab content
                  <Blog />
                </Tabs.Panel>

                <Tabs.Panel value="question" pt="xs">
                  คำถามภายในกลุ่ม tab content
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
