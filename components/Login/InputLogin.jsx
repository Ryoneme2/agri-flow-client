import React from 'react';
import clsx from 'clsx';

/**
 * Button is a function that takes a variant prop and returns a div with the text Button.
 * @returns JSX.Element
 * @param color - primary, danger, warn
 * @param context - string
 * @param css - string
 * @param icon - string
 * @param value - string
 */
const InputLogin = ({
  color = 'primary',
  placeholder,
  name,
  type,
  onChange = () => {},
  onClick = () => {},
  value,
  register,
  css = '',
  errorText,
}) => {
  //console.dir(register);
  const prop = {
    placeholder,
    name,
    type,
    onChange,
    onClick,
    value,
  };
  return (
    <>
      <input
        {...register}
        {...prop}
        className={clsx(
          `flex items-center transition ease-in-out ${css} rounded-full text-[0.75rem] sm:text-[1rem] px-5 py-[0.8rem] sm:my-2 my-1 border shadow w-full sm:w-[18rem] `,
          {
            'text-[#1C658C] opacity-[74%] bg-white hover:bg-gray-100':
              color === 'primary',
            'text-white bg-[#1C658C] border-transparent hover:bg-[#164b68] ':
              color === 'submit',
            'text-[#1C658C] opacity-[74%] bg-white border-red-500 hover:bg-gray-100':
              color === 'warn',
          }
        )}
      />
      {color == 'warn' ? (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errorText}
        </span>
      ) : (
        ''
      )}
    </>
  );
};

export default InputLogin;
