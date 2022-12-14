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
      name: 'ถกเถียง',
      to: '/discuss',
    },
    {
      name: 'ชุมชน',
      to: '/community',
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
      <div className="border-b w-full flex justify-between content-center items-center text-[16px]">
        <div className="md:invisible md:w-[0] w-[20rem] ">
          <div className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#1C658C"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </div>
        </div>

        <div className="p-2  w-full md:w-[15%] flex justify-center content-center items-center">
          <Link href="/">
            <Image
              src={'/images/png/2-2E.png'}
              width={160}
              height={100}
              alt={'logo'}
            />
          </Link>
        </div>

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

          <div className="flex w-full justify-end">
            {/* search bar */}
            <div className=" w-[full] flex justify-end content-center items-center invisible md:visible px-2">
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

            {/* Build blog */}
            <div className="h-full shrink-0  w-[6rem]  hidden md:flex justify-center items-center ">
              <Link href={'/blog/newBlog'}>
                <button className="bg-white border-2 py-2 px-3 w-auto border-[#1C658C] text-[#1C658C] text-[0.8rem] font-bold rounded-[20px]">
                  สร้างบล็อค
                </button>
              </Link>
            </div>


            {/* profile */}
            <div className=" flex justify-start shrink-0  w-[5.4rem] ">
              <Link href={`/profile/u/${user.username}`}>
                <Image
                  src={user.imageProfile}
                  className="rounded-[100px] border border-[#1C658C] mx-3"
                  width={45}
                  height={45}
                  alt="profile avatar"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarlogin;
