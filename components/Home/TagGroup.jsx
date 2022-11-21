import React, { useState, useContext } from 'react';
import axios from 'axios';
import { homeContext } from '../../context/store';

import Tag from '../Tag';

const TagGroup = () => {
  const { isLogin, tagSuggest } = useContext(homeContext);

  if (!isLogin)
    return (
      <>
        <div className="flex flex-wrap">
          <Tag linkto={''} tagName={'โรคในพืชยืนต้น'} />
          <Tag linkto={''} tagName={'โรคในพืชล้มลุก'} />
          <Tag linkto={''} tagName={'วัชพืช'} />
          <Tag linkto={''} tagName={'แมลงศัตรูพืช'} />
          <Tag linkto={''} tagName={'สัตว์'} />
        </div>
      </>
    );

  return (
    <>
      <div className="flex flex-wrap">
        {tagSuggest.map((tag) => {
          return (
            <Tag
              key={tag.id}
              linkto={`/category/${tag.categoryId}?tagName=${tag.categoryName}`}
              tagName={tag.categoryName}
            />
          );
        })}
      </div>
    </>
  );
};

export default TagGroup;
