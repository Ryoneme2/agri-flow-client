export const colorConverter = (color) => {
  switch (color) {
  }
};

export const variantConverter = (variant, color) => {
  switch (variant) {
    case 'filled':
      return `bg-[${color}] hover:bg-[${color}]`;
    case 'outline':
      return `border border-solid border-[1px] border-[${color}]`;
    case 'light':
      return `bg-[${color}] hover:bg-[${color}] text-[${color}]`;
    default:
      return `bg-[${color}] hover:bg-[${color}]`;
  }
};
