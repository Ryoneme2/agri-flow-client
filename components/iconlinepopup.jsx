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
      >
       Modal content
      </Modal>

      <Group position="center">
        <button onClick={() => setOpened(true)}>
            <img src="/images/png/line.png" className='w-[60px] h-[60px]'  />
        </button>
      </Group>
    </>
  );
}

export default Iconlinepopup;
