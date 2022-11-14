import { useForm } from 'react-hook-form';
import React from 'react';

const App = () => {
  return (
    <>
      <div class="flex flex-col mb-4">
        <div class="relative">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value=""
            class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 border-red-500"
          />
        </div>

        <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          Invalid username field !
        </span>
      </div>
    </>
  );
};

export default App;
