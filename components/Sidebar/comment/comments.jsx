import React from 'react';
import Comment from './commentBlock';
import Addcomment from './addcomment';

const Comments = ({ dataComment }) => {
  return (
    <>
      <div className="w-full h-auto">
          {
            !dataComment ? <div className='w-full flex justify-center text-red-600'>No Comment</div> :
              <div className="w-full h-[30rem] selection:border overflow-y-scroll">
                {dataComment.map((comment) => {
                  return <Comment data={comment} key={comment.id} />
                })}
              </div>
          }
        <div>
          <Addcomment />
        </div>
      </div>
    </>
  );
};

export default Comments;
