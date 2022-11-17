import { Avatar } from '@mantine/core';

const AvatarText = ({ imgProfile, name }) => {
  return (
    <>
      <div class="flex items-center my-1">
        <Avatar radius="xl" src={imgProfile} alt="it's me" />
        <div class="font-medium text-black ml-3">{name}</div>
      </div>
    </>
  );
};

export default AvatarText;
