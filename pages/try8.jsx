import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useState, useEffect } from 'react';

const Try = () => {
  const [state, setState] = useState({
    items: Array.from({ length: 20 }),
    hasMore: true,
  });

  const scrollMore = () => {
    if (state.items.length >= 80) {
      setState((prev) => {
        return {
          ...prev,
          hasMore: false,
        };
      });
    }
    setTimeout(() => {
      setState((prev) => {
        return {
          ...prev,
          items: state.items.concat(Array.from({ length: 20 })),
        };
      });
      console.log(state);
    }, 1000);
  };

  return (
    <>
      {/* <button onClick={() => scrollMore()}>show</button> */}
      <InfiniteScroll
        dataLength={state.items.length} //This is important field to render the next data
        next={() => scrollMore()}
        hasMore={state.hasMore}
        loader={
          <svg
            class="animate-bounce w-6 h-6 text-gray-900"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {console.log(state.items.length)}
        {state.items.map((a, index) => (
          <div className="p-6" key={index}>
            {index}
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Try;
