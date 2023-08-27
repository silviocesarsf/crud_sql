import React from "react";

const Textfield = ({ type, placeholder, id, onChange }) => {
  return (
    <>
      <input
        onChange={onChange}
        className="w-full shadow-md outline-none p-4 rounded-md h-[60px]"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </>
  );
};

export default Textfield;
