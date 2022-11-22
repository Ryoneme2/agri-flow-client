import React from 'react';
import CommentBlock from './CommentBlock';
import Addcomment from './Addcomment';

const Index = ({ data }) => {
    return (
        <>
            <div className='h-[15rem]  overflow-y-scroll'>
                {
                    data.comments.map((data, index) =>
                        <div key={index}>
                            <CommentBlock data={data} />
                        </div>
                    )
                }
            </div>
            <div>
                <Addcomment postid={data.id}/>
            </div>

        </>
    );
}

export default Index;
