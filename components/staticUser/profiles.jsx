import Image from 'next/image';
import Profile from './profile';

const Profiles = ({ imgProfile, css }) => {
  return (
    <>
      <div className={`flex -space-x-4 justify-center ${css}`}>
        <Profile imgProfile={imgProfile} />
        <Profile imgProfile={imgProfile} />
        <Profile imgProfile={imgProfile} />
        <Profile imgProfile={imgProfile} />
        <a
          class="flex justify-center items-center w-12 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
          href="#"
        >
          +99
        </a>
      </div>
    </>
  );
};

export default Profiles;
