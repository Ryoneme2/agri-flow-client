import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Tag from '../Tag';

const TagGroup = ({ tagFetch }) => {
  const [tagSuggest, setTagSuggest] = useState([]);
  const [loading, setLoading] = useState(false);
  const tagNum = 5;

  if (!tagFetch)
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

  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}${tagFetch}${tagNum}`
        );
        console.log(res.data);
        setTagSuggest(res.data?.data || []);
      };
      getData();
      console.log('here: ' + tagSuggest);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        {loading ? (
          <div className="loading"></div>
        ) : (
          tagSuggest.map((tag) => {
            return (
              <Tag
                linkto={`./category/${tag.categoryId}`}
                tagName={tag.categoryName}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default TagGroup;
