import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const MyProflie = ({username}) => {
    const router = useRouter();
    const [datauser, setDatauser] = useState('');
    const { username } = router.query;

    React.useEffect(() => {
        const dataget = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const host = process.env.NEXT_PUBLIC_API_URL;
                const userdata = await axios.get(`${host}/api/v1/users/${username}`)
                setDatauser(userdata.data.data)
                console.log(userdata.data.data);
            } catch (e) {
                console.log(e);
            }
        }
        dataget();
    }, []);

    return (
        <>
            <div className='flex mt-4 w-[90%] mx-auto'>
                <div className='w-[75%] m-0 p-0 border'>
                    <Tabs defaultValue="gallery">
                        <Tabs.List className='py-[0.15rem]'>
                            <Tabs.Tab value="Blog">
                                <div className='text-[1.35rem] pt-3 mx-2 '>
                                    บทความทั้งหมด
                                </div>
                            </Tabs.Tab>
                            <Tabs.Tab value="Discuss">
                                <div className='text-[1.35rem] pt-3 mx-2'>
                                    คำถามทั้งหมด
                                </div>
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="Blog" pt="xs">

                        </Tabs.Panel>

                        <Tabs.Panel value="Discuss" pt="xs">

                        </Tabs.Panel>
                    </Tabs>
                </div>
                <div className='w-[25%] px-5 border '>
                    <Sidebar data={datauser} />
                </div>
            </div>
        </>
    );
}

export default MyProflie;
