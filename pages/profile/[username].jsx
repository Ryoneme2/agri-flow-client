import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Tabs } from '@mantine/core';

const MyProflie = () => {
    const router = useRouter();
    const { username } = router.query;
    return (
        <>
            <div className='full'>
                <div>
                    <Tabs color="teal" defaultValue="gallery">
                        <Tabs.List>
                            <Tabs.Tab value="Blog">บล็อค</Tabs.Tab>
                            <Tabs.Tab value="Discuss">ถกเถียง</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel pt="xs">
                            Blog
                        </Tabs.Panel>

                        <Tabs.Panel pt="xs">
                            Discuss
                        </Tabs.Panel>
                    </Tabs>
                </div>
                <div>

                </div>
            </div>

        </>
    );
}

export default MyProflie;
