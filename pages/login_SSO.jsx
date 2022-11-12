import { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import LoginButton from '../components/LoginButton'


const login_SSO = () => {
    // Provide a custom `fetch` implementation as an option
    const [person, setPerson] = useState({});
  
    useEffect(() => {
      const getData = async () => {
        const token = localStorage.getItem('google_access_token');
        if (!token) return;
        const res = await axios.get(
          `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
        );
        setPerson(res.data);
      };
      getData();
    }, []);
  
    const handlerLogout = async () => {
      await googleLogout();
      console.log('logged out');
    };

    const login = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            console.log(credentialResponse);
            const res = await axios.get(
              `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credentialResponse.credential}`
            );
            console.log(res.data);
            setPerson(res.data);
            localStorage.setItem(
              'google_access_token',
              credentialResponse.credential
            );
        },
    });
      
  
    if (Object.values(person).length <= 0)
      return (
        <div className='bg-gradient-to-r from-[#b6dcfe] to-[#1c658c] h-screen flex justify-center items-center'>
            <div className='container p-6 flex mx-auto bg-white border-transparent rounded-xl justify-center items-center'>
                <div className='flex-1 justify-center h-full'>
                    <img src="/images/png/1 2.png" alt="big-agri-flow-logo" className='h-3/6'/>
                </div>
                <div className='flex-1 flex-col flex justify-center items-center'> 
                    <h1>ลงชื่อเข้าใช้</h1>
                    <LoginButton context={ 'ลงชื่อเข้าใช้ด้วย Line' } icon={'/icon/87386-line-logo.png'} />
                    <LoginButton onClick={() => login(credentialResponse)} context={ 'ลงชื่อเข้าใช้ด้วย Google' } icon={'/icon/icons8-google.svg'}/>
                    <LoginButton context={ 'ลงชื่อเข้าใช้ด้วย Facebook' } icon={'/icon/icons8-facebook.svg'} />
                    
                    <LoginButton context={ 'ลงชื่อเข้าใช้ด้วย Email' } />
                </div>
            </div>

        </div>
      );
  
    return (
      <>
        <h1>ok</h1>
        <button onClick={handlerLogout}>Logout</button>

      </>
    );
  };



export default login_SSO;
