import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import CommunityBlock from '../community/Community_block';
import { homeContext } from '../../context/store';

const CommunityBar = ({ hidden }) => {
  const { communities } = useContext(homeContext);
  console.log(communities);
  return (
    <>
      <div
        className={`${hidden} grid grid-flow-col justify-between auto-cols-max overflow-x-auto mb-5`}
      >
        {communities.map((v, i) => (
          <CommunityBlock
            key={v.id}
            Rang={i + 1}
            Communityimg={v.image}
            CommunityName={v.title}
            CommunityDetail={v.description}
            CommunityMember={v.userCount}
          />
        ))}
      </div>
    </>
  );
};

export default CommunityBar;
