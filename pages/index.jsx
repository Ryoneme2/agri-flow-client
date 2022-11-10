import { useState } from 'react';
import InputBox from '../components/InputBox';

export default function Home() {
  const [value, setValue] = useState('');
  const handle = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className='p-5'>
        <InputBox
          value={value}
          onChange={handle}
          // color='secondary'
          css={`w-full max-w-[10rem] h-[2.4rem]`}
        />
      </div>
      <h1 className='text-xl text-red-500'>Hello world</h1>
    </>
  );
}
