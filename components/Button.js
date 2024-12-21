import React from "react";

const Button = ({ value }) => {
  return (
    <button className="border-2 px-2 rounded-md border-green-800 hover:bg-green-800 transition-color duration-100">
      {value}
    </button>
  );
};

export default Button;
