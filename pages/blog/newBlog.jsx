import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import { MultiSelect } from '@mantine/core';
const RichTextEditor = dynamic(() => import('@mantine/rte'), { ssr: false });
import { useRouter } from 'next/router'

const NewBlog = () => {
  const router = useRouter()
  const [value, onChange] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tag, setTag] = React.useState([]);
  const editorRef = useRef();





  console.log(value);

  const people = useMemo(
    () => [
      { id: 1, value: 'Bill Horsefighter' },
      { id: 2, value: 'Amanda Hijacker' },
      { id: 3, value: 'Leo Summerhalter' },
      { id: 4, value: 'Jane Sinkspitter' },
    ],
    []
  );


  const tags = useMemo(
    () => [
      { id: 1, value: 'JavaScript' },
      { id: 2, value: 'TypeScript' },
      { id: 3, value: 'Ruby' },
      { id: 3, value: 'Python' },
    ],
    []
  );

  const mentions = useMemo(
    () => ({
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@', '#'],
      source: (searchTerm, renderList, mentionChar) => {
        const list = mentionChar === '@' ? people : tags;
        const includesSearchTerm = list.filter((item) =>
          item.value.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderList(includesSearchTerm);
      },
    }),
    [people, tags]
  );

  const publishBlog = async () => {
    try {
      const host = process.env.NEXT_PUBLIC_API_URL;
      const token = localStorage.getItem('access_token');
      const res = await axios.post(`${host}/api/v1/blogs/p`, { title, categories:tag ,content: value, }, { headers: { Authorization: token, }, });

      if (res.status !== 201) throw new Error('internal error');

      console.log('published');

      router.push('../')

    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.response.data.msg);
        return;
      }
      console.error(e);
    }
  };

  useEffect(() => {
    const host = process.env.NEXT_PUBLIC_API_URL;
    const tagData = async () => {
      const tagGet = await axios.get(`${host}/api/v1/utilities/categories?char`)
      setTag(tagGet.data.data.map(v => v.categoryName))
      console.log(tagGet.data.data.map(v => v.categoryName));
    }
    tagData();
  }, []);


  return (
    <div className="w-full md:container mx-auto mt-4">
      <div className="h-full  mb-[4rem]">
        <div className="flex items-center">
          <input
            type="text"
            className="w-full h-20 text-3xl hover:outline-none mb-2 border border-l-0 border-t-0 border-b-0 focus:outline-none"
            placeholder="หัวเรื่อง"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={publishBlog}
            className="w-[8rem] bg-[#1C658C] hover:bg-[#114c6c] transition-all h-[2rem] md:h-[3rem] ml-2 text-white text-lg rounded-r-full"
          >
            เผยแพร่
          </button>
        </div>
        <div className='my-2'>

          <MultiSelect
            data={tag}
            variant="unstyled"
            placeholder="เลือกหมวดหมู่ที่ต้องการ"
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={ (query) => {
              const item = { value: query, label: query };
              setTag((current) => [...current, item]);
              const host = process.env.NEXT_PUBLIC_API_URL;
              const token = localStorage.getItem('access_token');
              axios.post(`${host}/api/v1/utilities/categories`,{ context : query ,}, { headers: { Authorization: token, }, }).then(_ => console.log('ok')).catch(err => console.log(err));
              return item;
              
            }}
            />

        </div>
        <RichTextEditor
          value={value}
          onChange={onChange}
          ref={editorRef}
          id="rte"
          mentions={mentions}
          className="border-t-0 border-r-0 text-gray-500 border-b-0 border-gray-100 shadow-[-2px_0px_2px_0px_rgba(28,101,140,0.13)]"
        />
      </div>
    </div>
  );
};

export default NewBlog;
