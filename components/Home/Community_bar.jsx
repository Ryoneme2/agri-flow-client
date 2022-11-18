import CommunityBlock from '../community/Community_block';

const CommunityBar = ({ hidden }) => {
  return (
    <>
      <div
        className={`${hidden} grid grid-flow-col justify-between auto-cols-max overflow-x-auto mb-5`}
      >
        <CommunityBlock />
        <CommunityBlock />
        <CommunityBlock />
        <CommunityBlock />
      </div>
    </>
  );
};

export default CommunityBar;
