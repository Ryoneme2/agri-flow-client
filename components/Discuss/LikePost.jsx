import React from 'react';
import axios from 'axios';
const Like = ({ postData }) => {

  const [isLike, setIsLike] = React.useState(postData.isLike);
  const [likeCount, setLikeCount] = React.useState(postData.likeCount);


  const likeClick = async () => {
    try {
      isLike
        ? setLikeCount((prev) => prev - 1)
        : setLikeCount((prev) => prev + 1);
      setIsLike(!isLike);

      const numSend = isLike ? -1 : 1;
      const host = process.env.NEXT_PUBLIC_API_URL;
      const token = localStorage.getItem('access_token');
      const like = await axios.put(`${host}/api/v1/discusses/like/${postData.id}`,
        {
          num: numSend,
        },
        {
          headers: {
            Authorization: token,
          },
        })

      // if (like.status !== 200) {
      //   isLike
      //     ? setLikeCount((prev) => prev - 1)
      //     : setLikeCount((prev) => prev + 1);
      //   setIsLike(!isLike);

      //   throw new Error('failed to like');
      // }
    } catch (e) {
      console.error(e);
      return;
    }
  };


  return (
    <div className='flex mx-1'>
      <button onClick={likeClick}
        className='mx-2 bg-white'>
        {
          isLike ?
            <svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-thumb-up"
              width="25" height="25" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="#00b341" fill="none"
              strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-thumb-up"
              width="25" height="25" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="#1C658C" fill="none"
              strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
            </svg>
        }




      </button>
      <div className='mx-1'>
        {likeCount}
      </div>
    </div>
  );
}

export default Like;
