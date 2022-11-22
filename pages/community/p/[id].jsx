import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Narbarlogin = dynamic(
  () => import('../../../components/Navbar/Navbarlogin'),
  { ssr: false }
);
import CommuSidebar from '../../../components/Sidebar/Commu_sidebar';
import { Tabs } from '@mantine/core';
import CommunityQuestion from '../../../components/community/Community_question';
import CommunityBlog from '../../../components/community/Commuity_Blog';
import dynamic from 'next/dynamic';
import LoadingBlog from '../../../components/Blog/LoadingBlog';

const Commu = () => {
  const router = useRouter();
  const { id } = router.query;
  const [groupMember, setGroupMember] = useState(false);
  const [commu, setCommu] = useState({});
  const [loading, setLoading] = useState(false);
  const [blogSuggest, setBlogSuggest] = useState([]);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem('user')).username || '';
    if (!id) return;
    const getData = async () => {
      try {
        setLoading(true);
        const commu = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/communities/${id}`
        );
        const res2 = axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs/c/${id}`
        );
        const [blog, res] = await Promise.all([res2, commu]);

        setCommu(res.data.data);
        setBlogSuggest(blog.data?.data || []);

        const checkUser = res.data.data?.users?.find(
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
                  <CommunityBlog
                    blogSuggest={blogSuggest}
                    groupMember={groupMember}
                    id={id}
                  />
                </Tabs.Panel>

                <Tabs.Panel value="question" pt="xs">
                  <CommunityQuestion />
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
          <div className="hidden md:flex">
            <CommuSidebar
              name={'คนภาคเหนือ'}
              id={id}
              commu={commu}
              groupMember={groupMember}
              setGroupMember={setGroupMember}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Commu;
