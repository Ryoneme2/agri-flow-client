import { useRouter } from 'next/router';
import React from 'react';

const Narbarlogin = dynamic(
  () => import('../../../components/Navbar/Navbarlogin'),
  { ssr: false }
);
import CommuSidebar from '../../../components/Sidebar/Commu_sidebar';
import { Tabs } from '@mantine/core';
import CommunityQuestion from '../../../components/community/Community_question';
import CommunityBlog from '../../../components/community/Commuity_Blog';
import dynamic from 'next/dynamic';

const Commu = (data) => {
  const router = useRouter();
  const { id } = router.query;

  const member = true;
  return (
    <>
      <Narbarlogin />
      <div className="w-[90%] mx-auto pt-4">
        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-3">
            <div>
              <Tabs defaultValue="content">
                <Tabs.List className="pb-[2px]">
                  <Tabs.Tab value="content">บทความภายในกลุ่ม</Tabs.Tab>
                  {
                    /*member*/ false && (
                      <Tabs.Tab value="question">คำถามภายในกลุ่ม</Tabs.Tab>
                    )
                  }
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
            <CommuSidebar name={'คนภาคเหนือ'} id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Commu;
