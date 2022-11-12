import { useState } from 'react';
import InputBox from '../components/InputBox';
import Button from '../components/Button';

export default function Home() {
  const [value, setValue] = useState('');
  const handle = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='loading'></div>
        <Button color='danger' context={ 'hello, world!' }/>
      </div>
    </>
  );
}
