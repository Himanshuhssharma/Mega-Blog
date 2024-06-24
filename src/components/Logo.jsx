import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img src="/logo.png" alt="logo" className="w-42 h-12 ml-0" />
    </div>
  );
};

export default Logo;
