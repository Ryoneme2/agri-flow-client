import { useState } from 'react';
import InputBox from '../components/InputBox';

export default function Home() {
  const [value, setValue] = useState('');
  const handle = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='loading'></div>
      </div>
    </>
  );
}
