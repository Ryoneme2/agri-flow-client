/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import BoxLogin from '../../../components/Layouts/BoxLogin';

const ResetPassword = () => {
  // Provide a custom `fetch` implementation as an option
  const [person, setPerson] = useState({});

  if (Object.values(person).length <= 0)
    return (
      <BoxLogin>
        <h1 className="text-2xl sm:text-3xl text-red-500">Access Denied.</h1>
      </BoxLogin>
    );

  return (
    <>
      <h1>ok</h1>
      <button onClick={handlerLogout}>Logout</button>
    </>
  );
};

export default ResetPassword;
