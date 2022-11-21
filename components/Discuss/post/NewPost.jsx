import React, { useState, useEffect } from 'react';
import { Avatar } from '@mantine/core';
import { Modal, Autocomplete, Button, Textarea, MultiSelect } from '@mantine/core';
import Dragfile from './Dragfile';
import { useDropzone } from 'react-dropzone';
import imgToBase64 from '../../utils/imgToBase64';
import axios from 'axios';

const NewPost = () => {
    const [opened, setOpened] = useState(false);
    const [image, setImage] = useState();
    const [file, setFile] = useState({});
    const [textValue, setTextValue] = useState('');
    const [tag, setTag] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [user,setUser] =React.useState('');

    

    console.log(textValue);
    function publicPost(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        shareHandler();
    }
    function cancelPost(e) {
        e.preventDefault();
        console.log('You clicked cancel.');
        setTextValue('');
        setImage('');
        setFile({});
    }

    const [postShow, setPostshow] = useState(false);

    const closeHandler = () => {
        setOpened(false)
    };

    const cancelImage = () => {
        setFile({});
        setImage('');
    };
    
    const textHandler = (event) => {
        setTextValue(event.target.value);
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
        let data = new FormData();
        data.append('content', textValue);
        data.append('file', file);

        console.log(textValue);
        console.log(file);

        try {
            const host = process.env.NEXT_PUBLIC_API_URL;
            const token = localStorage.getItem('access_token');
            const post = await axios.post(`${host}/api/v1/discusses/post`, data, { headers: { Authorization: token, }, });

            if (post.status !== 201) throw new Error('internal error');
            console.log('Ok');
        } catch (e) {
            console.error(e);
            console.log('On')
            return;
        }
    };

    useEffect(() => {
        const host = process.env.NEXT_PUBLIC_API_URL;
        const tagData = async () => {
            const tagGet = await axios.get(`${host}/api/v1/utilities/categories?char`)
            setTag(tagGet.data.data.map(v => v.categoryName))
            console.log(tagGet.data.data.map(v => v.categoryName));
            setUser (JSON.parse(localStorage.getItem('user'))) 
        }
        tagData();
    }, [categories]);

    return (
        <>
            {/* <Modal opened={opened} onClose={() => setOpened(false)} /> */}

            <Dragfile
                visible={opened}
                closeHandler={closeHandler}
                cancelImage={cancelImage}
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                isDragActive={isDragActive}
                image={image}
            />

            <div
                className="w-full h-[2rem] flex justify-between item-center border-[1px] 
                      shadow-md border-[#98CCFD] rounded-[10px] px-3"
            >
                <div className="pt-1 text-[0.9rem] text-[#1C658C]">
                    สร้างพื้นที่ของท่าน
                </div>
                <button
                    className="text-xl bg-white px-2 overflow-hidden"
                    onClick={() => {
                        setPostshow(!postShow);
                    }}
                >
                    +
                </button>
            </div>

            {postShow && (
                <div className="w-full h-auto shadow-lg rounded-[20px] my-3 p-4 ">
                    <div className="w-full h-auto  flex justify-between ">
                        <div className="w-full flex items-center h-auto">
                            <Avatar
                                src={user.imageProfile}
                                radius="xl"
                                className="w-[2.5rem] md:w-[3.1rem] h-auto"
                            />
                            <p className="mx-2"> {user.username} </p>
                        </div>
                        <div className="w-full flex justify-end items-center text-[0.9rem]">
                            <div
                                className="px-3 py-1 mx-1 border rounded-l-lg bg-white border-red-600 text-red-600 cursor-pointer"
                                onClick={cancelPost}
                            >
                                ยกเลิก
                            </div>
                            <div
                                className="px-3 py-1 mx-1 border rounded-r-lg bg-[#1C658C] text-white cursor-pointer"
                                onClick={publicPost}
                            >
                                เผยแพร่
                            </div>
                        </div>
                    </div>
                    <div className="flex my-2">
                        <div className="mr-1">
                            <Button
                                onClick={() => setOpened(true)}
                                className="bg-white border border-[#1C658C] hover:bg-white rounded-[10px] text-[#1C658C] font-light px-2 my-1 selection:flex justify-between "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-photo m-1"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#1C658C"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="15" y1="8" x2="15.01" y2="8" />
                                    <rect x="4" y="4" width="16" height="16" rx="3" />
                                    <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                                    <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                                </svg>
                                เพิ่มรูปภาพ
                            </Button>
                        </div>

                        <div className="w-auto my-1 border border-[#1C658C] px-2 rounded-[10px]">
                            <MultiSelect
                                onChange={setCategories}
                                data={tag}
                                maxSelectedValues={3}
                                variant="unstyled"
                                placeholder="เลือกหมวดหมู่ที่ต้องการ"
                                searchable
                                creatable
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setCategories((current) => [...current, query])
                                    setTag((current) => [...current, item]);
                                    const host = process.env.NEXT_PUBLIC_API_URL;
                                    const token = localStorage.getItem('access_token');
                                    axios.post(`${host}/api/v1/utilities/categories`, { context: query, }, { headers: { Authorization: token, }, }).then(_ => console.log('ok')).catch(err => console.log(err));
                                    return item
                                }}
                            />
                        </div>
                    </div>

                    <div className='w-full h-auto my-2'>
                        {
                            !image ? <></> :
                                <img src={image}></img>
                        }

                    </div>

                    <div className="mb-2">
                        <Textarea
                            placeholder="Your comment"
                            withAsterisk
                            autosize
                            minRows={3}
                            maxRows={6}
                            onChange={textHandler}
                            value={textValue}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default NewPost;
