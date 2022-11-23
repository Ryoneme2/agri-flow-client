/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import Tag from '../Tag';
import { TypographyStylesProvider } from '@mantine/core';
import Link from 'next/link';

const Blog = ({ blog }) => {
  //   const [loading, setLoading] = useState(false);

  console.log({ blog });

  if (!blog)
    return (
      <>
        <div className="loading"></div>
      </>
    );

  const rawText = blog?.blogContent?.content || 'หาไม่เจอ';
  const firstImage = blog?.thumbnail[0] || '/images/png/tmp-image.png';
  const otherImage =
    blog?.thumbnail?.slice(
      1,
      3 - blog.thumbnail.length + blog.thumbnail.length
    ) || [];

  const numSplit = 450;

  const text =
    rawText.split('').length > numSplit
      ? `${rawText.split('').slice(0, numSplit).join('')}....`
      : rawText;

  return (
    <div className="w-[100%] h-[16.25rem] border-b-2 border-[#1C658C] flex mt-2 justify-center">
      <div className="w-[97%] h-auto flex pt-3">
        {/* Img */}
        <div className="w-[0] md:w-[210px] h-[210px] overflow-hidden">
          <div className="h-auto">
            <img
              src={firstImage}
              className="bg-cover bg-center border border-gray-400 w-full h-[160px] object-cover"
              alt="thumbnail image"
            />
          </div>
          <div className="w-full flex justify-start content-center items-center">
            {otherImage.map((img, i) => {
              return (
                <Image
                  key={img}
                  src={img}
                  width={40}
                  height={40}
                  className="rounded-[7px] mt-2 mr-2 border border-gray-400 w-[40px] h-[40px]"
                  alt={`sub thumbnail-${i}`}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full h-full ml-2 flex-col item-center">
          {/* Header */}
          <Link href={`/blog/p/${blog.id}`}>
            <div className="w-full flex flex-col sm:flex-row  justify-between items-center ">
              <div className="w-full">
                <p className="text-[1.75rem] ml-3 mb-0 mt-0 p-0 truncate">
                  {blog.blogContent.title}
                </p>
              </div>
              <div className="w-full sm:w-50 flex justify-start sm:justify-end">
                <Tag
                  linkto={`/category/${blog.tag.categoryId}`}
                  tagName={blog.tag.categoryName}
                />
              </div>
            </div>
            {/* detail */}

            <div className="w-full ml-3">
              <div className="h-[7rem] w-[90%] overflow-y-hidden ">
                <TypographyStylesProvider>
                  <div
                    className="text-[0.70rem] sm:text-[0.8rem] md:text-[0.9rem] text-light text-[#979797] font-light m-0 p-0 overflow-y-hidden"
                    dangerouslySetInnerHTML={{
                      __html: text,
                    }}
                  />
                </TypographyStylesProvider>
              </div>
            </div>
          </Link>
          {/* footer */}
          <div className="w-full">
            <div className="w-full  flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div>
                  <Image
                    src="https://fphftuccochbjgwngnrc.supabase.co/storage/v1/object/public/image-bucket/avatar/blank-profile.jpeg"
                    width={31}
                    height={31}
                    className="rounded-full"
                    alt={'profile author'}
                  />
                </div>
                <div className="px-3 text-[#7A7A7A]">
                  {blog.author.username}
                </div>
                <div className="px-3 text-[#7A7A7A]">{blog.create_at}</div>
              </div>
              <div className="mr-2 sm:mr-0">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
