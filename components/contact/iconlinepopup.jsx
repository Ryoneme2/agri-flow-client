import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import Image from 'next/image';

function Iconlinepopup({ QrLine }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        centered
      >
        <p className='w-full text-center'>LINE QR CODE</p>
        <div className=' w-full h-full flex justify-center items-center'>
          <Image src={QrLine} width={300} height={300}  />
        </div>
        
      </Modal>

      <Group className='mx-1'>
        <button onClick={() => setOpened(true)}>
          <Image src="/images/svg/line.svg" width={40} height={40} className='bg-white' />
        </button>
      </Group>
    </>
  );
}

export default Iconlinepopup;
