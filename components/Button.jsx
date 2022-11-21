import React from 'react';
import clsx from 'clsx';

/**
 * Button is a function that takes a variant prop and returns a div with the text Button.
 * @returns JSX.Element
 * @param color - primary, danger, warn
 * @param context - string
 * @param css - string
 */
const Button = ({ color = 'primary', context, css = '', onClick }) => {
  return (
    <button
      className={clsx(
        `flex transition ease-in-out ${css} rounded-full px-5 py-[0.4rem] border-none`,
        {
          'text-white bg-[#1C658C] hover:bg-[#124e6d]': color === 'primary',
          'text-white bg-[#FF3939] hover:bg-[#c12525]': color === 'danger',
          'bg-[#FFC017]': color === 'warn',
          'text-[#1C658C] bg-gray-400 hover:bg-gray-600 hover:text-white ':
            color === 'reverse',
        }
      )}
      onClick={onClick}
    >
      {context}
    </button>
  );
};

export default Button;
