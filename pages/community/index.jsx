import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Narbarlogin = dynamic(
  () => import('../../components/Navbar/Navbarlogin'),
  { ssr: false }
);
import CommuCard from '../../components/community/Commu_card';
import CommumitySidebarMini from '../../components/community/Community_sidebar';
import Link from 'next/link';
import axios from 'axios';

const CommuLanding = () => {
  const [commu, setCommu] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/communities/`)
      .then((res) => {
        console.log(res.data.data);
        setCommu(res.data.data);
      });
  }, []);

  return (
    <>
      <Narbarlogin />
      <div className="w-[90%] mx-auto pt-4">
        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-3">
            <div>
              {commu.map((data, index) => (
                <div key={index}>
                  <CommuCard
                    data={data}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`../community/${data.id}`);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="w-full">
              <button className="w-11/12 mx-3 rounded-md p-1">
                <Link href="./community/create_commu">สร้างชุมชนของท่าน</Link>
              </button>
              <h1 className="px-3 text-[1.3rem] text-[#1C658C]">
                ชุมชนของท่าน
              </h1>
              <CommumitySidebarMini />
              <CommumitySidebarMini />
              <CommumitySidebarMini />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommuLanding;
