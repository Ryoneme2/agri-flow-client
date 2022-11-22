import React from 'react';

const Othercontact = () => {
    return (
        <>
             <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                withCloseButton={false}
                centered
            >
                <div className='w-full h-auto'>
                    
                </div>
            </Modal>

            <Group className='mx-1'>
                <button onClick={() => setOpened(true)}>
                    other contact
                </button>
            </Group>
        </>
    );
}

export default Othercontact;
