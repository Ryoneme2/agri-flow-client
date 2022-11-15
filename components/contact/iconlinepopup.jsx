import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import Image from 'next/image';

function Iconlinepopup() {
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
      </Modal>

      <Group>
        <button onClick={() => setOpened(true)}>
            <img src="/images/png/line.png" className='w-[40px] h-[40px]'  />
        </button>
      </Group>
    </>
  );
}

export default Iconlinepopup;
