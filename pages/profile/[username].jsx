import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const MyProflie = () => {
    const router = useRouter();
    const { username } = router.query;
    return (
        <div>
            
        </div>
    );
}

export default MyProflie;
