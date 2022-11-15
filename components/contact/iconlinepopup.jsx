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

      <Group className='mx-1'>
        <button onClick={() => setOpened(true)}>
            <Image src="/images/png/line.png" width={40} height={40}  />
        </button>
      </Group>
    </>
  );
}

export default Iconlinepopup;
