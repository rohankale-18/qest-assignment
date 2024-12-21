import React from 'react';
import { twMerge } from 'tailwind-merge';

const CustomInput = ({
  type = 'text',
  title,
  name,
  value,
  onChange,
  span = 1,
  classes,
  prefix,
  required,
  ...props // Adjust to spread other props here directly
}) => {
  return (
    <div className={twMerge(`w-full space-y-2`, classes)}>
      <div className="text-[#4D4D4D] font-medium">
        {title}
        {required && <span className="text-red-500">*</span>}
      </div>
      <div className="flex items-center group">
        {prefix && (
          <span className="p-3 place-content-center bg-white border border-[#FEF1EF] rounded-l-md border-r-0 group-focus-within:ring-2 group-focus-within:ring-[#F54F35]">
            {prefix}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={twMerge(
            "w-full focus:outline-none focus:ring-2 focus:ring-[#F54F35] border border-[#FEF1EF] rounded-md p-3 bg-white",
            prefix && "rounded-l-none" // Remove left border rounding if prefix is present
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default CustomInput;
