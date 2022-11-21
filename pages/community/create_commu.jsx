import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

import InputBox from '../../components/InputBox';

const CreateCommu = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="w-[90%] mx-auto pt-4">
        <h1 className="text-[1.4rem]">สร้างชุมชน</h1>
        <label>ชื่อชุมชน</label>
      </div>
    </>
  );
};

export default CreateCommu;
