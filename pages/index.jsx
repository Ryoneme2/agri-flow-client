import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomeComponent = dynamic(() => import('../components/Home'), {
  ssr: false,
});

export default function Home() {
  return (
    <Home_nonlogin
      blog={
        <SuggustTopic
          Topic={'บทความตาม หมวดหมู่'}
          Children={
            <>
              <Blog />
            </>
          }
        />
      }
    />
  );
}
