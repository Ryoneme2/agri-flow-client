import { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

const TestGoogleLogin = () => {
  // Provide a custom `fetch` implementation as an option
  const [person, setPerson] = useState({});

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('google_access_token');
      if (!token) return;
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
      );
      setPerson(res.data);
    };
    getData();
  }, []);

  const handlerLogout = async () => {
    await googleLogout();
    console.log('logged out');
  };

  if (Object.values(person).length <= 0)
    return (
      <>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
            const res = await axios.get(
              `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credentialResponse.credential}`
            );
            console.log(res.data);
            setPerson(res.data);
            localStorage.setItem(
              'google_access_token',
              credentialResponse.credential
            );
          }}
          onError={async () => {
            console.log('Login Failed');
          }}
        />

        <button onClick={handlerLogout}>Logout</button>
      </>
    );

  return (
    <>
      <h1>User Info</h1>
      <ul>
        <li>
          <Image
            src={person.picture}
            width={300}
            height={300}
            alt={'profile'}
          />
        </li>
        <li>Username : {person.name}</li>
        <li>email : {person.email}</li>
      </ul>
    </>
  );
};

export default TestGoogleLogin;
