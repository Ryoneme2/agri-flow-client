import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { SideBarStore } from '../Sidebar';
import dayjs from 'dayjs';

const Addcomment = ({ postid }) => {
  const [contentcomment, setContentComment] = React.useState('');
  const { setComment } = useContext(SideBarStore);

  const clickComment = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const user = JSON.parse(localStorage.getItem('user'));
      const host = process.env.NEXT_PUBLIC_API_URL;

      setComment((prev) => [
        ...prev,
        {
          id: Math.floor(Math.random() * 9999),
          author: {
            username: user.username,
            imageProfile: user.imageProfile,
          },
          comment: {
            content: contentcomment,
          },
          create_at: dayjs().toString(),
        },
      ]);

      setContentComment('')
      
      const res = await axios.post(
        `${host}/api/v1/blogs/p/comments/`,
        {
          blogId: postid,
          content: contentcomment,
        },
        {
          headers: { Authorization: token },
        }
      );

      if (res.status !== 201) throw new Error('internal error');
      console.log('commented');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="w-full h-[2.813rem] border border-[#B6DCFE] rounded-[20px] flex justify-between items-center overflow-hidden mt-2">
        <input
          className="placeholder-[#4788C7] h-full w-full px-3 focus:outline-none"
          type="text"
          placeholder="ความคิดเห็นของท่าน"
          value={contentcomment}
          onChange={(e) => setContentComment(e.target.value)}
        />
        <button className="p-3 bg-white" onClick={clickComment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-messages"
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
            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Addcomment;
