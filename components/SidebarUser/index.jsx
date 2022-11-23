import React from 'react';
import Usersidebar from './Usersidebar';

const Index = ({data , blog}) => {
    return (
        <div>
            <Usersidebar data={data} blogcount={blog} />
        </div>
    );
}

export default Index;
