import React from 'react';
import Image from 'next/image';

const Iconfacebook = ({ linkfacebook }) => {
    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                withCloseButton={false}
                centered
            >
                <div>
                    <p className='w-full text-center'>{`Facebook Or Facebook Url`}</p>
                    <CopyButton value={`Facebook Or Facebook Url`}>
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
                    <Image src="/images/svg/facebook.svg" width={40} height={40} className='bg-white' />
                </button>
            </Group>
        </>
    );
}

export default Iconfacebook;
