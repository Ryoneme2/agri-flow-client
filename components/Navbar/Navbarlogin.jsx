import React from 'react';
import Image from 'next/image';
import Link from 'next/link.js';
import Button from '../CreateBlogB.jsx';


const Navbarlogin = () => {
  const [open, setOpen] = React.useState(false)
  const Toggle = () => open === true ? setOpen(false) : setOpen(true);
  

  const handlerLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    window.location.replace('/auth');
  };
  const menu = [
    {
      name: 'หน้าหลัก',
      to: '/',
    },
    {
      name: 'บล็อก',
      to: '/Blog',
    },
    {
      name: 'ถกเถียง',
      to: '/Discuss',
    },
    {
      name: 'ชุมชน',
      to: '/Community',
    },
  ];

  const usermenu = [
    {
      name: 'My Settings',
      to: '/setting',
    },
    {
      name: 'Log Out',
      to: '/logout',
    },
  ];

  const [user, setUser] = React.useState({})

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(localStorage.getItem('user'));
  }, [])


  return (
    <>
      <div className='w-full h-[80px] flex border-b border-gray-400'>

        <div className="md:invisible px-3 md:w-[0] w-[20rem] mt-5 absolute">
          <button className="w-auto" onClick={Toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1C658C" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>
        </div>

        { open &&
          <div className=" w-full h-auto md:w-[15%] flex justify-center content-center items-center">
            <Link href="/Home">
              <div className='w-full h-full'>
                <img src='/images/png/2-2E.png' alt={'logo'} className=' max-w-[10rem] h-full' />
              </div>
            </Link>
          </div>
        }
        <div className=" w-0 md:w-[40%]  h-full  invisible md:visible">
          <div className="md:w-[70%] flex h-full justify-evenly items-center">
            {menu.map((item, index) => (
              <div key={index}>
                <div className="h-auto overflow-y-hidden">
                  <Link href={item.to}>{item.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-full w-auto md:w-[50%] ">

        </div>
      </div>
    </>
  );
}

export default Navbarlogin;

{/* <div className="flex w-full ju">
            

            <div className=" w-[full] flex justify-end content-center items-center invisible md:visible">
              <input
                placeholder="ค้นหา"
                type="text"
                name="search"
                className="border rounded-[20px] p-2 text-[1rem] w-[100%]"
              />

              <div
                className="absolute bg-white mr-2 rounded-full border-none"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#BABABA"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </div>
            </div>

            
            <div className=" w-[0] md:w-[20%] invisible md:visible flex justify-center content-center items-center">
              <Link href={'/blog/newBlog'}>
                <button className="bg-white border-2 py-2 px-3 w-auto border-[#1C658C] text-[#1C658C] text-[0.8rem] font-bold rounded-[20px]">
                  สร้างบล็อค
                </button>
              </Link>
            </div>

            
            <div className=" w-[0] md:w-[8%] flex justify-start  items-center invisible md:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell-ringing"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#1C658C"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
              </svg>
            </div>

            
            <div className=" w-full border flex justify-center md:justify-start items-center ">

              <div className='flex-col'>
                <button className='rounded-[100px] border border-[#1C658C] bg-inherit relative '>
                  <Image
                    src={'/images/png/2-2.png'}
                    width={45}
                    height={45}
                    alt="profile avatar"
                  />
                </button>

                <div className='border absolute p-3 rounded-[10px] right-2 hidden'>
                  {
                    usermenu.map((menu, index) => (
                      <div key={index} >
                        <div>
                          {menu.name}
                        </div>
                      </div>
                    ))
                  }
                </div>

              </div>


            </div>
          </div> */}