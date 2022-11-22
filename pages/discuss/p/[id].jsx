import React from 'react';
import { useRouter } from 'next/router';
import { DiscussStore } from '../../../context/store'
import dynamic from 'next/dynamic';
import axios from 'axios';
const UpgateAccount = dynamic(
    () => import('../../../components/Sidebar/UpgateAccount'), {
    ssr: false,
});
const Community = dynamic(
    () => import('../../../components/community/Community_sidebar'), {
    ssr: false,
});
const Navbarlogin = dynamic(
    () => import('../../../components/Navbar/Navbarlogin'), {
    ssr: false,
});
const Header = dynamic(() => import('../../../components/Discuss/header'), {
    ssr: false,
});
const CommentBlock = dynamic(() => import('../../../components/Discuss/comment/index'), {
    ssr: false,
});
const Like = dynamic(() => import('../../../components/Discuss/LikePost'), {
    ssr: false,
});
const Comment = dynamic(() => import('../../../components/Discuss/CommentPost'), {
    ssr: false,
});
import { createContext } from 'react';


const Disscuss = () => {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [comment, setComment] = React.useState([]);
    const router = useRouter();
    const { id } = router.query;

    console.log(data)

    React.useEffect(() => {
        const dataget = async () => {
            try {
                setLoading(true);
                if (!id) return;
                const token = localStorage.getItem('access_token');
                const host = process.env.NEXT_PUBLIC_API_URL;
                const postdata = await axios.get(`${host}/api/v1/discusses/post/${id}`)
                setData(postdata.data.data)
                setComment(postdata.data.data.comments);
                console.log(postdata.data.data);
                setLoading(false);

            } catch (e) {
                console.log(e);
            }
        }
        dataget();
    }, [id]);


    if (loading || !data) {
        return (
            <>
                <div className="flex w-screen h-screen justify-center items-center">
                    <div className="loading"></div>
                </div>
            </>
        );  
    }

    return (
        <>
            <DiscussStore.Provider value={{ setData, comment }}>
                <div className=''>
                    <Navbarlogin />
                </div>
                <div className='mt-2 w-full h-auto  px-2'>

                    <div className='flex'>

                        <div className='w-[0]  sm:w-[25%] h-screen '>
                            <div className='w-[100%] px-1'>
                                <UpgateAccount />
                            </div>
                            <div className='w-[80%] mx-auto mt-5 '>
                                <div>
                                    <p className='text-[1.375rem] text-[#1C658C] p-0 m-0'>บุคคลที่ติดตาม</p>
                                </div>
                            </div>

                        </div>

                        <div className="w-full sm:w-[75%] md:w-[50%] h-screen mx-3 md:mx-0 flex-col justify-center items-center px-2 ">
                            <div className='w-full h-full flex-col my-3'>
                                <div className='w-full h-auto border-b-2 border-[#1C658C]'>
                                    <div className='w-full h-full p-3'>
                                        <Header userdata={data.author} timepost={data.create_at} />

                                        {
                                            !data.post?.image ? <></>
                                                :
                                                (<div className=' w-full h-auto p-2 my-3 flex justify-center items-center rounded-[20px]'>
                                                    <img src={data.post.image} className='w-auto max-h-[20rem] md:max-h-[25rem]  bg-cover bg-center' />
                                                </div>)
                                        }



                                        <div className='px-2 w-full max-h-[8.50rem] mt-2 break-words'>
                                            <p className='text-[1.125rem] font-light m-0 p-0'>
                                                {data.post.content}
                                            </p>
                                        </div>

                                        <div className=''>
                                            <div className='p-2 flex items-center '>
                                                <Like postData={data} />
                                                <Comment commentData={data} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-auto mt-5'>
                                    <CommentBlock data={data} />
                                </div>
                            </div>
                        </div>

                        <div className=' w-[0] invisible md:w-[25%] md:visible ml-1'>
                            <div className='w-full h-auto text-[#1C658C] text-[1.375rem] ml-2'>ชุมชนแนะนำ</div>
                            <Community />
                            <Community />
                            <Community />
                        </div>
                    </div>
                </div>
            </DiscussStore.Provider>
        </>
    );
}

export default Disscuss;