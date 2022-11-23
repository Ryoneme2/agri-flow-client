import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Tabs } from '@mantine/core';

const Navbar = dynamic(() => import('../../../components/Navbar/Navbarlogin'), { ssr: false, });
const Sidebar = dynamic(() => import('../../../components/SidebarUser/index'), { ssr: false });
const Blog = dynamic(() => import('../../../components/Blog/Blog'), { ssr: false });
const Discussesblock = dynamic(() => import('../../../components/Discuss/Discussminiblock'), { ssr: false });

const MyProflie = () => {
    const router = useRouter();
    const { username } = router.query;
    const [value, setValue] = useState('');
    const handle = (e) => { setValue(e.target.value); };
    const [datauser, setDatauser] = useState('');
    const [datapost, setDatapost] = useState('');
    const [datadiscuss, setDiscuss] = useState('');
    React.useEffect(() => {
        const dataget = async () => {
        try {
            if(!username) return;
            const token = localStorage.getItem('access_token');
            const host = process.env.NEXT_PUBLIC_API_URL;
            const user = JSON.parse(localStorage.getItem('user'))
          // const userdata = await axios.get(`${host}/api/v1/users/${user.username}`)
          // const postdata = await axios.get(`${host}/api/v1/blogs/p/u/${user.username}`)
          // const discussdata = await axios.get(`${host}/api/v1/discusses/post/u/${user.username}`)

            const [userdata, postdata, discussdata] = await Promise.all([axios.get(`${host}/api/v1/users/${username}`), axios.get(`${host}/api/v1/blogs/p/u/${username}`), axios.get(`${host}/api/v1/discusses/post/u/${username}`)])


            setDatauser(userdata.data.data)
            setDatapost(postdata.data.data)
            setDiscuss(discussdata.data.data)

            console.log(userdata.data.data);
            console.log(postdata.data.data);
            console.log(discussdata.data.data);

        } catch (e) {
            console.log(e);
        }
        }
        dataget();
    }, [username]);

    if (!datauser || !datapost || !datadiscuss) return <div className=" loading"></div>

    return (
        <>
        <Navbar />
        <div className='flex flex-col-reverse mt-4 w-[90%] mx-auto md:flex-row'>
            <div className='w-full md:w-[75%] m-0 p-0 h-screen overflow-scroll'>

            <Tabs defaultValue="Blog">


                <Tabs.List className='py-[0.15rem] '>

                <Tabs.Tab value="Blog">
                    <div className='text-[1rem] sm:text-[1.35rem] pt-3 mx-2 '>
                    บทความทั้งหมด
                    </div>
                </Tabs.Tab>

                <Tabs.Tab value="Discuss">
                    <div className='text-[1rem] sm:text-[1.35rem] pt-3 mx-2'>
                    คำถามทั้งหมด
                    </div>
                </Tabs.Tab>

                </Tabs.List>

                <Tabs.Panel value="Blog" pt="xs">
                {
                    datapost.map((item, id) => (
                    <div key={id}>
                        <Blog blog={item} />
                    </div>
                    ))
                }
                </Tabs.Panel>

                <Tabs.Panel value="Discuss" pt="xs">
                {
                    datadiscuss.map((item, id) => (
                    <div key={id}>
                        <Discussesblock data={item} />
                    </div>
                    ))
                }
                </Tabs.Panel>
            </Tabs>
            </div>
            <div className='w-full md:w-[25%] px-5  mx-auto'>
                <Sidebar data={datauser} blog={datapost.length} />
            </div>
        </div>
        </>
    );
}

export default MyProflie;
