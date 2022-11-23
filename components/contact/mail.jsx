import React from 'react';
import Image from 'next/image';
import { Modal, Group } from '@mantine/core';
import { CopyButton, Button } from '@mantine/core';

const Mail = ({ DataMail }) => {
    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                withCloseButton={false}
                centered
            >
                <div>
                    <p className='w-full text-center'>{`Mail 0r Mail link`}</p>
                    <CopyButton value={`Mail 0r Mail link`}>
                        {({ copied, copy }) => (
                            <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                                {copied ? 'Copied url' : 'Copy url'}
                            </Button>
                        )}
                    </CopyButton>
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

export default Mail;
