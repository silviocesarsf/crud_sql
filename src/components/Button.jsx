import React from "react";

const Button = ({ children, handleSubmit }) => {
  return (
    <button onClick={handleSubmit} className="bg-[#85b2df] text-white w-full py-3 rounded-md text-md duration-100 hover:bg-[#78a0c8]">
      {children}
    </button>
  );
};

export default Button;
