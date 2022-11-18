import React from 'react';
import Proflie from './Profile';
import UpgateAccount from './UpgateAccount';
import MiniBlog from '../Blog/miniBlog';
import Comment from './comment/comments';
import axios from 'axios';
import { createContext } from 'react';

export const SideBarStore = createContext();

const Sidebar = ({ data, postid }) => {
  const [comment, setComment] = React.useState([]);

  React.useEffect(() => {
    const host = process.env.NEXT_PUBLIC_API_URL;
    const comment = async () => {
      const commentGet = await axios.get(
        `${host}/api/v1/blogs/p/comments/${postid}`
      );
      setComment(commentGet.data.data);
      console.log(commentGet.data.data);
    };
    comment();
  }, []);

  console.log(comment);

  return (
    <>
      <SideBarStore.Provider value={{ setComment }}>
        <div className="w-full">
          <Proflie profliedata={data.author} />
          <div className="my-5">
            <UpgateAccount />
          </div>
          <div className="w-full h-auto">
            <div className="w-full h-auto">
              <p className="text-[1.375rem] text-[#1C658C] px-2">
                บทความที่คล้ายกัน
              </p>
            </div>
            <div>
              <MiniBlog />
            </div>
          </div>
          <div className="w-full h-auto">
            <div className=" w-full h-auto">
              <p className="text-[1.375rem] text-[#1C658C] px-2">ความคิดเห็น</p>
              <Comment dataComment={comment} postid={postid} />
            </div>
          </div>
        </div>
      </SideBarStore.Provider>
    </>
  );
};

export default Sidebar;
