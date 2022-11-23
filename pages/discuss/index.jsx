import React from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
const Navbarlogin = dynamic(
  () => import('../../components/Navbar/Navbarlogin'),
  { ssr: false, }
);
const Discussblock = dynamic(
  () => import('../../components/Discuss/DiscussBlock'),
  { ssr: false }
);
const UpgateAccount = dynamic(
  () => import('../../components/Sidebar/UpgateAccount'), {
  ssr: false,
});
const AvatarText = dynamic(
  () => import('../../components/staticUser/AvatarText'), {
  ssr: false,
});
const NewPost = dynamic(
  () => import('../../components/Discuss/post/NewPost'), {
  ssr: false,
});
const Community = dynamic(
  () => import('../../components/community/Community_sidebar'), {
  ssr: false,
});

const Discuss = () => {
  const [datapost, setDatapost] = React.useState([]);
  const [token, setToken] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [hasChange, setHasChange] = React.useState(false);

  React.useEffect(() => {
    const host = process.env.NEXT_PUBLIC_API_URL;
    const usertoken = localStorage.getItem('access_token')
    setToken(usertoken);
    const postData = async () => {
      setLoading(true);
      const postGet = await axios.get(`${host}/api/v1/discusses/post?limit=100`,{ headers: { Authorization: usertoken, }, })
      setDatapost(postGet.data.data)
      console.log(postGet.data.data);
      setLoading(false);
    }
    postData();
  }, [hasChange]);



  return (
    <>
      <div className=''>
        <Navbarlogin />
      </div>
      <div className='mt-4 w-full h-auto  px-2'>

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

          {
            loading ?
              <div className="flex w-full sm:w-[75%] md:w-[50%] h-screen justify-center items-center">
                <div className="loading"></div>
              </div>
              :
              <div className="w-full sm:w-[75%] md:w-[50%] h-screen mx-3 md:mx-0 flex-col justify-center items-center px-2 overflow-scroll scroll-none ">
                {
                  ! token ? <></> : <NewPost setHasChange={setHasChange} />
                }
                

                {
                  datapost.map((data, index) =>
                    <div key={index}>
                      <Discussblock postData={data} />
                    </div>
                  )
                }
              </div>
          }



          <div className=' w-[0] invisible md:w-[25%] md:visible ml-1'>
            <div className='w-full h-auto text-[#1C658C] text-[1.375rem] ml-2'>ชุมชนแนะนำ</div>
            <Community />
            <Community />
            <Community />
          </div>
        </div>
      </div>

    </>
  );
};

export default Discuss;
