import React, { useState, useEffect } from 'react';
import { Textarea, Input } from '@mantine/core';
import Dragfile from '../../components/Discuss/post/Dragfile';
import { useDropzone } from 'react-dropzone';
import imgToBase64 from '../../components/utils/imgToBase64';
import axios from 'axios';
import ButtonSubmit from '../../components/Button';
import dynamic from 'next/dynamic';

const Narbarlogin = dynamic(
  () => import('../../components/Navbar/Navbarlogin'),
  { ssr: false }
);

const CreateCommu = () => {
  const [opened, setOpened] = useState(false);
  const [image, setImage] = useState();
  const [file, setFile] = useState({});
  const [name, setName] = useState('');
  const [textValue, setTextValue] = useState('');

  console.log(textValue);
  function publicPost(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    shareHandler();
  }

  const closeHandler = () => {
    setOpened(false);
  };

  const cancelImage = () => {
    setFile({});
    setImage('');
  };

  const textHandler = (event) => {
    setTextValue(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const onDrop = React.useCallback(async (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setImage(await imgToBase64(acceptedFiles[acceptedFiles.length - 1]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const shareHandler = async () => {
    setTextValue('');
    setImage('');
    setFile({});
    setName('');
    let data = new FormData();
    data.append('name', name);
    data.append('description', textValue);
    data.append('file', file);

    console.log(name, textValue, file);

    try {
      const host = process.env.NEXT_PUBLIC_API_URL;
      const token = localStorage.getItem('access_token');
      const post = await axios
        .post(`${host}/api/v1/communities`, data, {
          headers: { Authorization: token },
        })
        .then((res) => {
          console.log(res);
        });
      console.log(post);

      if (post.status !== 201) throw new Error('internal error');
      console.log('Ok');
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return (
    <>
      <Narbarlogin />
      <div className="w-[90%] mx-auto pt-4 flex-col justify-center text-[#1C658C]">
        <h1 className="text-[1.4rem] text-center">สร้างชุมชน</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="col">
            <Dragfile
              visible={opened}
              closeHandler={closeHandler}
              cancelImage={cancelImage}
              getInputProps={getInputProps}
              getRootProps={getRootProps}
              isDragActive={isDragActive}
              image={image}
            />
            <div className="p-3 h-full">
              <div
                onClick={() => setOpened(true)}
                className="border border-[#1C658C] bg-white rounded-[10px] text-[#1C658C] font-light h-full flex items-center"
              >
                {image ? (
                  <div className="w-full h-auto">
                    {!image ? <></> : <img src={image}></img>}
                  </div>
                ) : (
                  <div className="w-full h-auto">
                    <h1 className="text-center h-full">เพิ่มโปรไฟล์ของชุมชน</h1>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col p-3">
            <div>
              <div>
                <h2 className="text-[1.2rem] ">ชื่อชุมชน </h2>
                <Input
                  placeholder="ชื่อชุมชน"
                  withAsterisk
                  autosize
                  onChange={nameHandler}
                  value={name}
                />
              </div>
              <div>
                <h2 className="text-[1.2rem] ">รายละเอียด</h2>
                <Textarea
                  placeholder="รายละเอียด"
                  withAsterisk
                  autosize
                  minRows={3}
                  maxRows={6}
                  onChange={textHandler}
                  value={textValue}
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex justify-center">
            <ButtonSubmit
              context={'ยืนยัน'}
              css={'px-[2rem]'}
              onClick={publicPost}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCommu;
