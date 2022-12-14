/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Like from './LikePost';
import Comment from './CommentPost';
import Header from './header';
import axios from 'axios';

const PostBlock = ({ postData }) => {
  if(!postData)
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="loading"></div>
      </div>
    </>
  );
  

  return (
    <div className="p-2">
      <div className="w-full h-auto shadow-lg rounded-[20px] my-3   border border-gray-300 ">
        <div className="w-full h-full p-3">
          <Header
            userdata={postData.author}
            timepost={postData.create_at}
            tag={postData.tag.categoryName}
          />
          {postData.post.file == '' ? (
            ''
          ) : (
            <div className=" w-full h-auto p-2 my-3 flex justify-center items-center rounded-[20px]">
              <img
                src={postData.post.file}
                className="w-auto max-h-[20rem] md:max-h-[25rem]  bg-cover bg-center"
                alt={''}
              />
            </div>
          )}

          {postData.post.content == '' ? (
            ''
          ) : (
            <div className="px-2 w-full max-h-[8.50rem] break-words">
              <p className="text-[1.125rem] font-light m-0 p-0">
                {postData.post.content}
              </p>
            </div>
          )}

          <div className="">
            <div className="p-2 flex items-center ">
              <Like postData={postData} />
              <Comment commentData={postData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBlock;
