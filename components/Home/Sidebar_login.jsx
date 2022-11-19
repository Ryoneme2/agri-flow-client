import AvatarText from '../staticUser/AvatarText';
import UpgateAccount from '../Sidebar/UpgateAccount';
import TagGroup from './TagGroup';

const SidebarLogin = ({ tagFetch }) => {
  return (
    <>
      <div className="grid mb-6">
        <UpgateAccount />
        <div className="w-full">
          <h1 className="text-xl overflow-hidden text-[#1C658C]">
            บุคคลที่ติดตาม
          </h1>
          <div>
            <AvatarText
              imgProfile={'/images/profile/jammy.jpg'}
              name={'Pummy'}
            />
            <AvatarText
              imgProfile={'/images/profile/jammy.jpg'}
              name={'Jamie'}
            />
            <AvatarText
              imgProfile={'/images/profile/jammy.jpg'}
              name={'Fourthy'}
            />
          </div>
        </div>
      </div>
      <div className="contents mx-4 mb-5 w-full">
        <h1 className="text-xl overflow-hidden text-[#1C658C]">
          หมวดหมู่ที่เข้าชมบ่อย
        </h1>
        <TagGroup tagFetch={tagFetch} />
      </div>
    </>
  );
};

export default SidebarLogin;
