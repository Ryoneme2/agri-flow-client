import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import CommunityBlock from '../community/Community_block';
import { homeContext } from '../../context/store';
import { useRouter } from 'next/router';

const CommunityBar = ({ hidden }) => {
  const { communities } = useContext(homeContext);
  console.log(communities);
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/community/p/${id}`);
  };

  return (
    <>
      <div
        className={`${hidden} grid grid-flow-col justify-between auto-cols-max overflow-x-auto mb-5`}
      >
        {communities.map((v, i) => (
          <div
            className="cursor-pointer"
            onClick={() => handleClick(v.id)}
            key={v.id}
          >
            <CommunityBlock
              Rang={i + 1}
              Communityimg={v.image}
              CommunityName={v.title}
              CommunityDetail={v.description}
              CommunityMember={v.userCount}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CommunityBar;
