import React, { useRef, useEffect } from 'react';
import Comment from './commentBlock';
import Addcomment from './addcomment';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Comments = ({ dataComment, postid }) => {
  console.log(dataComment);

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  return (
    <>
      <div className="w-full h-auto">
        {dataComment.length == 0 ? (
          <div className="w-full"></div>
        ) : (
          <div
            ref={parent}
            className="w-full max-h-[30rem] selection:border overflow-y-scroll"
          >
            {dataComment.map((comment) => {
              return <Comment data={comment} key={comment.id} />;
            })}
          </div>
        )}
        <div>
          <Addcomment postid={postid} />
        </div>
      </div>
    </>
  );
};

export default Comments;
