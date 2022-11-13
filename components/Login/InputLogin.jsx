import React from 'react';
import clsx from 'clsx';

/**
 * Button is a function that takes a variant prop and returns a div with the text Button.
 * @returns JSX.Element
 * @param color - primary, danger, warn
 * @param context - string
 * @param css - string
 * @param icon - string
 */
const InputLogin = ({
  color = 'primary',
  placeholder,
  type,
  value = '',
  css = '',
}) => {
  return (
    <input
      type={type}
      className={clsx(
        `flex items-center transition ease-in-out ${css} rounded-full sm:text-[1rem] text-[0.75rem] px-5 py-[0.8rem] sm:my-2 my-1 border shadow sm:w-[18rem] w-full`,
        {
          'text-[#1C658C] opacity-[74%] bg-white hover:bg-gray-100 ':
            color === 'primary',
          'text-white bg-[#1C658C] hover:bg-[#164b68] ': color === 'submit',
        }
      )}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default InputLogin;
