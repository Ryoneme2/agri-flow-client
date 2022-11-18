import React from 'react';
import Comment from './commentBlock';
import Addcomment from './addcomment';


const Comments = ({ dataComment ,postid}) => {
  return (
    <>
      <div className="w-full h-auto">
          {
            dataComment.length == 0 ? <div className='w-full'></div> :
              <div className="w-full h-[30rem] selection:border overflow-y-scroll">
                {dataComment.map((comment) => {
                  return <Comment data={comment} key={comment.id} />
                })}
              </div>
          }
        <div>
          <Addcomment postid={postid}/>
        </div>
      </div>
    </>
  );
};

export default Comments;
