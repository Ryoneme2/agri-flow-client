import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

/**
 * Button is a function that takes a variant prop and returns a div with the text Button.
 * @returns JSX.Element
 * @param color - primary, danger, warn
 * @param context - string
 * @param css - string
 * @param icon - string
 */
const LoginButton = ({ color = 'primary', context, css = '', icon }) => {
  return (
    <button
      className={clsx(
        `flex transition ease-in-out ${css} rounded-full px-5 py-[0.8rem] my-2 border shadow w-9/12`,
        {
          'text-[#1C658C] opacity-[74%] bg-white hover:bg-gray-100 ':
            color === 'primary',
        }
      )}
    >
      {icon && (
        <Image
          src={icon}
          width={20}
          height={20}
          alt={'login-icon'}
          className={'mr-3'}
        />
      )}
      {context}
    </button>
  );
};

export default LoginButton;
