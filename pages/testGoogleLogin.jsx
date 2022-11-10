import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Image from 'next/image';

const TestGoogleLogin = () => {
  // Provide a custom `fetch` implementation as an option
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const x = async () => {
      const gapi = await import('gapi-script').then((pack) => pack.gapi);
      const initClient = () => {
        gapi.client.init({
          clientId: clientId,
          scope: '',
        });
      };
      gapi.load('client:auth2', initClient);
    };
    x();
  });

  const onSuccess = (res) => {
    console.log(res);
    setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <Image src={profile.imageUrl} alt='user image' />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <GoogleLogout
            clientId={clientId}
            buttonText='Log out'
            onLogoutSuccess={logOut}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText='Sign in with Google'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default TestGoogleLogin;
