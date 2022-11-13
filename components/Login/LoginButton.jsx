import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

/**
 * Button is a function that takes a variant prop and returns a div with the text Button.
 * @returns JSX.Element
 * @param color - primary, submit
 * @param context - string
 * @param css - string
 * @param icon - string
 */
const LoginButton = ({ color = 'primary', context, css = '', icon }) => {
  return (
    <button
      className={clsx(
        `flex items-center transition ease-in-out ${css} rounded-full sm:text-[1rem] text-[0.75rem] px-5 py-[0.8rem] sm:my-2 my-1 border shadow sm:w-[18rem] w-full `,
        {
          'text-[#1C658C] opacity-[74%] bg-white hover:bg-gray-100 ':
            color === 'primary',
        }
      )}
    >
      {icon && (
        <Image
          src={icon}
          width={25}
          height={25}
          alt={'login-icon'}
          className={'mr-3'}
        />
      )}
      {context}
    </button>
  );
};

export default LoginButton;
