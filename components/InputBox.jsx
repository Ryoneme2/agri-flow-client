import clsx from 'clsx';

/**
 * This function returns a button with a className that is a combination of the css prop and a
 * className that is based on the color prop.
 * @returns A button with a className of flex transition ease-in-out rounded-full px-5 py-[0.4rem]
 * @param color - primary, secondary
 * @param css - string
 * @param value - string | number
 * @param onChange - function
 */
const InputBox = ({
  color = 'primary',
  css = '',
  value = '',
  onChange = () => {},
  placeHolder = 'Insert here...',
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      className={clsx(
        `flex transition ease-in-out ${css} rounded-full focus:outline-none px-3`,
        {
          'text-[#1c658c] bg-white shadow-[0_2.5px_4px_0px_rgba(28,101,140,0.23)] focus:shadow-[0px_3px_6px_0px_rgba(28,101,140,0.37)]':
            color === 'primary',
          'border-solid border-gray-300 border-[1.5px] border-t-0 border-l-0 border-r-0':
            color === 'secondary',
        }
      )}
    />
  );
};

export default InputBox;
