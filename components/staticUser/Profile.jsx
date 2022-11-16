import Image from 'next/image';

const Profile = ({ imgProfile }) => {
  return (
    <Image
      src={imgProfile}
      className={'rounded-full border-2 border-white dark:border-gray-800'}
      width={50}
      height={50}
      alt={'profile'}
    />
  );
};

export default Profile;
