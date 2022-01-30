import React from "react";

type Props = {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  isDisabled?: boolean;
};

const Button = ({ children, type, isDisabled }: Props) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={
        isDisabled
          ? `${"bg-gray-500 py-2 px-6 rounded text-white text-sm cursor-pointer"}`
          : `${"bg-purple-700 py-2 px-6 rounded text-white text-sm cursor-pointer"}`
      }>
      {children}
    </button>
  );
};

export default Button;
